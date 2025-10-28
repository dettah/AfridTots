import React from 'react'
import Star from '../assets/Star4.png'
import SoundComp from '../Components/SoundComp'
import TrendingBook from './TrendingBook'

const Trending = () => {
  return (
    <div className=''>

      <div className='bg-[#E3A107] flex gap-5 font-cherry pr-10 items-center rounded-t-2xl rounded-b-sm mb-10'>

        <img src={Star} alt="" />
        <h3 className='text-[36px]'>Trending</h3>
      </div>
      <div className='flex'>

        {/* audio */}
        <div className='flex'>
          <div>
            <SoundComp />
          </div>
          <div>
            <TrendingBook />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending