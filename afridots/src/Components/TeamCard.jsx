import React from 'react'
import Fb from '../assets/fbIcon.png'
import Ig from '../assets/igIcon.png'
import LiIn from '../assets/liIcon.png'

const TeamCard = ({ img, name, position, fb, linkedin, ig, description }) => {
  return (
    <div className='border-20 text-center  pb-4 [border-image:url(/src/assets/Frame2.png)_30]'>
      <div className='h-[40%] w-fit mx-auto rounded overflow-hidden '>
        <img src={img} alt={description} />
      </div>
      <h2 className='text-[40px] text-center font-cherry text-[#09230F]  '>{name}</h2>
      <h3 className='text-[#5E9F43] text-center py-2 text-2xl'>{position}</h3>

      <div className='flex justify-center gap-4'>
        <a href={fb} className=' rounded-full h-fit w-fit hover:bg-blue-500 transition-colors ease-in  ' >
          <img src={Fb} alt="Facebook Icon" />
        </a>

        {/* LinkedIn */}
        <a href={linkedin} className=' rounded-full h-fit w-fit hover:bg-blue-500 transition-colors ease-in' >
          <img src={LiIn} alt="LinkedIn Icon" />
        </a>

        {/* IG */}
        <a href={ig} className=' rounded-full h-fit w-fit hover:bg-blue-500 transition-colors ease-in' >
          <img src={Ig} alt="instagram Icon" />
        </a>
      </div>

      <p className='text-center mb-4 pt-2'>{description}</p>

    </div>
  )
}

export default TeamCard