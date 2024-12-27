import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* {----left section ----} */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt='' />
          <p className='w-full md:w-2/3  text-gray-600 leading-6'>
            Book your doctor’s appointment in just minutes with our intuitive web app. We connect you to top healthcare professionals for seamless,
            quick, and easy consultations. Manage your health with ease from the comfort of your home. Your health and well-being are our utmost
            priority. Trusted care is just a click away.
          </p>
        </div>
        {/* {----center section ----} */}
        <div>
          <p className='text-xl font-medium mb-5'>Company</p>
          <ul className='flex flex-col text-gray-600 gap-2'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* {----right section ----} */}
        <div>
          <p className='text-xl font-medium mb-5'>Get in Touch</p>
          <ul className='flex flex-col text-gray-600 gap-2'>
            <li>+91 8595758595</li>
            <li>naveendev@example.com</li>
          </ul>
        </div>
      </div>
      {/* {----Copyright text----} */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ Prescripto - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer