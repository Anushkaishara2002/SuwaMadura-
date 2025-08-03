import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.jpg'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.jpg'
import doc2 from './doc2.jpg'
import doc3 from './doc3.jpg'
import doc4 from './doc4.jpg'
import doc5 from './doc5.jpg'
import doc6 from './doc6.jpg'
import doc7 from './doc7.jpg'
import doc8 from './doc8.jpg'
import doc9 from './doc9.jpg'
import doc10 from './doc10.jpg'
import doc11 from './doc11.jpg'
import doc12 from './doc12.jpg'
import doc13 from './doc13.jpg'
import doc14 from './doc14.jpg'
import doc15 from './doc15.jpg'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Nishani Nayanathara',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Nishani has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1500,
        address: {
            line1: 'No. 446, Lassana Lane',
            line2: 'Kurunegala'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Sumudu Weragoda',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Sumudu has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1500,
        address: {
            line1: '37/1 Hijra Mawatha',
            line2: 'Kurunegala'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Jagath Karunarathne',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Jagath has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 2000,
        address: {
            line1: 'Ambepussa - Kurunegala - Trincomalee Hwy',
            line2: 'Kurunegala'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. K.M.I. Senaratne',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Senaratne has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1500,
        address: {
            line1: 'No. 7-D, Samagi Mawatha, Iluppugedara Road',
            line2: 'Kurunegala'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Sameera Samarabandu',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Sameera has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1500,
        address: {
            line1: 'Near Kurunegala Hospital, Rear Side of Asiri Lab, Canal Road',
            line2: 'Kurunegala'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Afkar',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Afkar has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1500,
        address: {
           line1: '37/1 Hijra Mawatha',
           line2: 'Kurunegala'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. M.F. Ahamed',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Ahamed has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 2000,
        address: {
           line1: 'General Practice Location',
           line2: 'Kurunegala'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Hasanga Gamage',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Hasanga has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1600,
        address: {
            line1: 'Miracle Health Hospital, 223 Dambulla Road',
            line2: 'Kurunegala'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Vipula Warnasooriya',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Vipula has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1300,
        address: {
           line1: 'Miracle Health Hospital, 223 Dambulla Road',
           line2: 'Kurunegala'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Wasantha Dissanayake',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Wasantha has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1400,
        address: {
            line1: 'Miracle Health Hospital, 223 Dambulla Road',
            line2: 'Kurunegala'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Udaya Nelumdeniya',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Udaya has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1500,
        address: {
            line1: 'Miracle Health Hospital, 223 Dambulla Road',
            line2: 'Kurunegala'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Dayananda Bandara',
        image: doc12,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Dayananda has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1500,
        address: {
            line1: 'Miracle Health Hospital, 223 Dambulla Road',
            line2: 'Kurunegala'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. P.M. Wijewardana',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Wijewardana has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1500,
        address: {
           line1: 'Miracle Health Hospital, 223 Dambulla Road',
           line2: 'Kurunegala'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Rajima Srinani',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Rajima has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1600,
        address: {
           line1: 'Miracle Health Hospital, 223 Dambulla Road',
           line2: 'Kurunegala'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Jagath Karunarathne',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Jagath has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1300,
        address: {
            line1: 'Ambepussa - Kurunegala - Trincomalee Hwy',
            line2: 'Kurunegala'
        }
    },
]