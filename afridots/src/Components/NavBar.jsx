import React from 'react'
import Logo from '../assets/logo.png'
import OrangeBtn from './OrangeBtn'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between sm:px-10 md:px-20 pt-10'>
      <img src={Logo} alt="Logo of Afridtots" className='w-[147px]' />

      <ul className='flex font-cherry gap-4'>
        <li className='font-cherry text-primary text-green-700 text-[24px]'>About Us</li>

        <li className=' text-primary text-green-700 text-[24px]'>Book Us</li>

        <OrangeBtn/>

      </ul>
    </div>
  )
}

export default NavBar