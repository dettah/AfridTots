import React from 'react'
import Fb from '../assets/bi_facebook.svg'
import SUbscribe from './SUbscribe'

const Footer = () => {
  return (
    <div className="flex flex-col items-center py-24 bg-[url('../src/assets/Footer.png')] bg-cover">
      <div className='flex gap-2'>
        {/* <img className='text-blue-800' src={Fb} alt="Footer background pattern" /> */}

        <svg className='w-6 h-6 text-yellow-500 hover:text-blue-600 cursor-pointer rounded-full border border-transparent hover:border hover:bg-white hover:border-yellow-500 transition-colors duration-300 ease-in-out' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.0001 12.0735C24.0001 5.40454 18.6271 -0.00146484 12.0001 -0.00146484C5.37007 3.51563e-05 -0.00292969 5.40454 -0.00292969 12.075C-0.00292969 18.1005 4.38607 23.0955 10.1221 24.0015V15.564H7.07707V12.075H10.1251V9.41253C10.1251 6.38704 11.9176 4.71603 14.6581 4.71603C15.9721 4.71603 17.3446 4.95154 17.3446 4.95154V7.92154H15.8311C14.3416 7.92154 13.8766 8.85303 13.8766 9.80853V12.0735H17.2036L16.6726 15.5625H13.8751V24C19.6111 23.094 24.0001 18.099 24.0001 12.0735Z" fill="currentColor" />
        </svg>

        {/* IG */}
        <svg className='w-7 h-7 text-yellow-500 hover:text-blue-600 cursor-pointer rounded-full border border-transparent hover:border hover:bg-white hover:border-yellow-500 transition-colors duration-300 ease-in-out' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.3333 4C23.1014 4 24.7971 4.70238 26.0474 5.95262C27.2976 7.20286 28 8.89856 28 10.6667V21.3333C28 23.1014 27.2976 24.7971 26.0474 26.0474C24.7971 27.2976 23.1014 28 21.3333 28H10.6667C8.89856 28 7.20286 27.2976 5.95262 26.0474C4.70238 24.7971 4 23.1014 4 21.3333V10.6667C4 8.89856 4.70238 7.20286 5.95262 5.95262C7.20286 4.70238 8.89856 4 10.6667 4H21.3333ZM16 10.6667C14.5855 10.6667 13.229 11.2286 12.2288 12.2288C11.2286 13.229 10.6667 14.5855 10.6667 16C10.6667 17.4145 11.2286 18.771 12.2288 19.7712C13.229 20.7714 14.5855 21.3333 16 21.3333C17.4145 21.3333 18.771 20.7714 19.7712 19.7712C20.7714 18.771 21.3333 17.4145 21.3333 16C21.3333 14.5855 20.7714 13.229 19.7712 12.2288C18.771 11.2286 17.4145 10.6667 16 10.6667ZM16 13.3333C16.7072 13.3333 17.3855 13.6143 17.8856 14.1144C18.3857 14.6145 18.6667 15.2928 18.6667 16C18.6667 16.7072 18.3857 17.3855 17.8856 17.8856C17.3855 18.3857 16.7072 18.6667 16 18.6667C15.2928 18.6667 14.6145 18.3857 14.1144 17.8856C13.6143 17.3855 13.3333 16.7072 13.3333 16C13.3333 15.2928 13.6143 14.6145 14.1144 14.1144C14.6145 13.6143 15.2928 13.3333 16 13.3333ZM22 8.66667C21.6464 8.66667 21.3072 8.80714 21.0572 9.05719C20.8071 9.30724 20.6667 9.64638 20.6667 10C20.6667 10.3536 20.8071 10.6928 21.0572 10.9428C21.3072 11.1929 21.6464 11.3333 22 11.3333C22.3536 11.3333 22.6928 11.1929 22.9428 10.9428C23.1929 10.6928 23.3333 10.3536 23.3333 10C23.3333 9.64638 23.1929 9.30724 22.9428 9.05719C22.6928 8.80714 22.3536 8.66667 22 8.66667Z" fill="currentColor" />
        </svg>

        {/* X */}
        <svg className='w-7 h-7 text-yellow-500 hover:text-blue-600 cursor-pointer rounded-full border border-transparent hover:border hover:bg-white hover:border-yellow-500 transition-colors duration-300 ease-in-out' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.5826 4.08398L16.9213 11.6987L11.1613 4.08398H2.81592L12.7853 17.1187L3.33725 27.9173H7.38259L14.6746 19.584L21.0479 27.9173H29.1839L18.7919 14.1787L27.6253 4.08398H23.5826ZM22.1639 25.4973L7.53858 6.37598H9.94258L24.4039 25.496L22.1639 25.4973Z" fill="currentColor" />
        </svg>


      </div>

      {/* Newsletter */}

      <div className='flex flex-col items-center px-4 sm:px-10 md:px-42 text-white'>
        <h2 className='font-cherry text-3xl py-6'>Newsletter</h2>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium rem commodi nulla quas dolor architecto quae suscipit hic. Voluptas dolorem esse cum, inventore minima reprehenderit aliquid sunt impedit sit pariatur.</p>
      </div>
      {/* SUbscribe card */}
      <SUbscribe />
      <div className='py-6'>
        <h2 className='font-cherry text-3xl  text-white '>Sitemap</h2>
      </div>
      <div className='text-white'>
        <ul className='flex gap-10'>
          <li className='hover:text-yellow-500 cursor-pointer transition-colors ease-in-out  duration-300'>Home</li>
          <li className='hover:text-yellow-500 cursor-pointer transition-colors ease-in-out  duration-300'>About Us</li>
          <li className='hover:text-yellow-500 cursor-pointer transition-colors ease-in-out  duration-300'>Shop</li>
          <li className='hover:text-yellow-500 cursor-pointer transition-colors ease-in-out  duration-300'>Events</li>
        </ul>
      </div>

      <div className='py-6'>
        <h2 className='font-cherry text-3xl  text-white '>Contact Us</h2>
      </div>
      <div className='text-white flex '>
        <input type="tel" name="telephone" placeholder='+234 5678 9012' id=""  className="" />
        <p>maitama Abuja</p>
      </div>
<div className='mt-5 bg-[#F6E2B2] text-[16px] px-5 py-1 rounded-full'>
  <h4>powered by &copy; 2025 Sense Connect</h4>
</div>
    </div>
  )
}

export default Footer