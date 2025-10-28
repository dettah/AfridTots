import React from 'react'
import Update from '../Components/Update'
import Star from '../assets/Star.png'
import Update1 from '../assets/update1.png'
import UpdateBg from '../assets/LatestUpdate.png'



const UpdateComp = () => {

    const updates = [
        {
            image: Update1,
            category: "Events",
            title: "Tech Conference 2025",
            description:
                "Join us for an amazing event filled with innovation, networking, and growth opportunities.",
        },
        {
            image: Update1,
            category: "News",
            title: "Afridots Expands to New Regions",
            description:
                "Afridots is now live in more African countries, empowering developers across the continent.",
        },
    ]

    return (
        <div>
            <section className=' bg-cover mt-20 py-16 sm:px-10 md:px-20 bg-center w-'
                style={{ backgroundImage: `url(${UpdateBg})` }}
            >
                <div>
                    <img className='w-[80px] ' src={Star} alt="" />
                </div>
                <div>
                    <h2 className='font-cherry text-4xl my-5'>Latest Update</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex obcaecati enim, nihil nulla, est vel dolorum deserunt commodi a nostrum architecto illo? Dolore cumque sequi ullam delectus similique id. Autem?</p>
                </div>
                <div className="flex gap-4 overflow-x-scroll mt-6">
                    {updates.map((item, index) => (
                        <div className="flex-shrink-0">
                            <Update
                                key={index}
                                image={item.image}
                                category={item.category}
                                title={item.title}
                                description={item.description}
                            />
                        </div>
                    ))}
                </div>

            </section>
        </div>
    )
}

export default UpdateComp