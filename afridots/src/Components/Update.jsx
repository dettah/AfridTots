import React from 'react'

const Update = ({ image, category, title, description }) => {

  const categoryColors = {
    Events: "bg-green-500",
    News: "bg-blue-500",
    Alert: "bg-red-500",
    Default: "bg-gray-500",
  }



  return (
    <>
    <div className="w-screen sm:w-[456px]">
      {/* Image container with styled border */}
      <div className="w-fit h-fit border-[0px] [box-shadow:inset_0_0_0_20px_url(/src/assets/Books.png)]">
        <img className="h-inherit" src={image} alt={title} />
      </div>

      {/* Category tag */}
      <div className="w-fit py-2 px-4 text-white bg-green-500 font-bold mt-8 mb-4">
        <h2>{category}</h2>
      </div>

      {/* Text content */}
      <div>
        <h1 className="font-semibold text-2xl line-clamp-1">{title}</h1>
        <div className="mt-2 mb-4">
          <p className="line-clamp-2">{description}</p>
        </div>
      </div>
    </div>


    
    </>
  )
}

export default Update
