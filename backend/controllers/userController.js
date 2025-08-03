import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import { v2 as cloudinary } from 'cloudinary'
import doctorModel from '../models/doctorModel.js'
import appointmentModel from '../models/appointmentModel.js'
import e from 'express'
import Stripe from 'stripe'



// api to register user
const registerUser = async (req, res) => {

    try {


        const { name, email, password } = req.body

        if (!name || !password || !email) {
            return res.json({ success: false, message: "Missing details" })
        }

        //validating email
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "enter a valid email" })
        }

        //validating strong password
        if (password.length < 8) {
            return res.json({ success: false, message: "enter a strong password" })
        }

        //hasing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const userData = {
            name,
            email,
            password: hashedPassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()
        //_id

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

        res.json({ success: true, token })


    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

//api for user login
const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: 'User does not exist' })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Invalid credentials" })
        }

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

// api to get user data
const getProfile = async (req, res) => {
    try {
        const { userId } = req.userId
        const userData = await userModel.findById(req.userId).select('-password');
        res.json({ success: true, userData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

//api to update user profile
const updateProfile = async (req, res) => {
    try {
        const userId = req.userId
        const { name, phone, address, dob, gender } = req.body
        const imageFile = req.file

        if (!name || !phone || !dob || !gender) {
            return res.json({ success: false, message: "Data Missing" })
        }

        await userModel.findByIdAndUpdate(userId, { name, phone, address: JSON.parse(address), dob, gender })

        if (imageFile) {

            //upload image to cloudinary
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' })
            const imageURL = imageUpload.secure_url

            await userModel.findByIdAndUpdate(userId, { image: imageURL })
        }
        res.json({ success: true, message: "profile updated" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

//api to book appointment
const bookAppointment = async (req, res) => {
    try {

        const { docId, slotDate, slotTime } = req.body

        const userId = req.userId;

        const docData = await doctorModel.findById(docId).select('-password')

        if (!docData.available) {
            return res.json({ success: false, message: 'Doctor not available' })
        }

        let slots_booked = docData.slots_booked

        // checking for slot availability
        if (slots_booked[slotDate]) {
            if (slots_booked[slotDate].includes(slotTime)) {
                return res.json({ success: false, message: 'slot not available' })
            } else {
                slots_booked[slotDate].push(slotTime)
            }
        } else {
            slots_booked[slotDate] = []
            slots_booked[slotDate].push(slotTime)
        }

        const userData = await userModel.findById(userId).select('-password')

        delete docData.slots_booked

        const appointmentData = {
            userId,
            docId,
            userData,
            docData,
            amount: docData.fees,
            slotTime,
            slotDate,
            date: Date.now(),
            cancelled: false,
            payment: false,
            isCompleted: false

        }

        const newAppointment = new appointmentModel(appointmentData)
        await newAppointment.save()

        //save new slots data in docdata
        await doctorModel.findByIdAndUpdate(docId, { slots_booked })

        res.json({ success: true, message: 'Appointment Booked' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


//api to get user appointment for frontend

const listAppointment = async (req, res) => {

    try {

        const userId = req.userId;
        const appointments = await appointmentModel.find({ userId })

        res.json({ success: true, appointments })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

//api to cancel appointment
const cancelAppointment = async (req, res) => {
    try {
        const { userId, appointmentId } = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)

        // verify appointmrnt user
        if (appointmentData.userId !== userId) {
            return res.json({ success: false, message: 'unauthorized action' })
        }

        await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true })

        // releasing doctor slot

        const { docId, slotDate, slotTime } = appointmentData

        const doctorData = await doctorModel.findById(docId)

        let slots_booked = doctorData.slots_booked

        slots_booked[slotDate] = slots_booked[slotDate].filter(e => e !== slotTime)

        await doctorModel.findByIdAndUpdate(docId, { slots_booked })

        res.json({ success: true, message: 'Appointment Cancelled' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}



// api to make payment of appointment using stripe

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const payment = async (req, res) => {
  try {
    const { appointmentId } = req.body
    const appointmentData = await appointmentModel.findById(appointmentId)

    if (!appointmentData || appointmentData.cancelled) {
      return res.json({ success: false, message: "Appointment cancelled or not found" })
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'LKR',
            product_data: {
              name: `Appointment with ${appointmentData.docData.name}`,
            },
            unit_amount: appointmentData.amount * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/payment-success?appointmentId=${appointmentId}`,
      cancel_url: `${process.env.FRONTEND_URL}/myappointments`,
    })

    res.json({ success: true, sessionId: session.id })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

const confirmPayment = async (req, res) => {
  try {
    const { appointmentId } = req.body;
    await appointmentModel.findByIdAndUpdate(appointmentId, { payment: true });
    res.json({ success: true });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// do payment = true


export { registerUser, loginUser, getProfile, updateProfile, bookAppointment, listAppointment, cancelAppointment, payment, confirmPayment }