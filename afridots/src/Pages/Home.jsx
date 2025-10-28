import React from 'react'
import NavBar from '../Components/NavBar'
import Quart from "../assets/sector.png"
import HeroImg1 from '../assets/Frame13.png'
import HeroImg2 from '../assets/HeroImg2.png'
import Read1 from '../assets/read1.png'
import Kellog from '../assets/Vector.png'
import Gplus from '../assets/Vector(1).png'
import Shield from '../assets/Generative_Object.png'
import OrangeBtn from '../Components/OrangeBtn'
import SoundComp from '../Components/SoundComp'
import UpdateComp from '../Components/UpdateComp'
import Footer from '../Components/Footer'

const Home = () => {

    const images = [
        { src: Read1, alt: "Book title" },
        { src: Read1, alt: "Book title" },
        { src: Read1, alt: "Book title" },
        { src: Read1, alt: "Book title" },
        { src: Read1, alt: "Book title" }
    ]




    return (
        <>
            <section className='' >

                {/* <img src={Quart} alt="Sector background image" className='absolute sm:top-0 lg:-top-40 right-0 w-3/5 z-[-10]' />
                
                <nav>
                    <NavBar />
                </nav> */}

                <main className='mb-20'>
                    <section className='flex justify-center mt-30  flex-col-reverse sm:flex-row sm:px-10 md:px-20 gap-10 '>
                        <div>
                            <img src={HeroImg1} alt="" />
                        </div>
                        <div>
                            <img src={HeroImg2} alt="Two kids with a globe" />
                        </div>
                    </section>
                    <section className='sm:px-10 md:px-20 pt-24'>
                        <section className=' flex flex-col items-center justify-center py-10 w-full border-[20px] [border-image:url(/src/assets/Books.png)_30] '>
                            <ul className='flex gap-4 p-4 overflow-x-hidden scrollbar-hide'>
                                {images.map((items, index) => (
                                    <li key={index} className='flex-shrink-0' >
                                        <img src={items.src} alt={items.alt} className=' h-[11em] md:h-[15em]' />
                                    </li>
                                ))}
                            </ul>
                            <div className='flex justify-end  pt-10 w-full md:px-34'>
                                <div>
                                    <OrangeBtn /></div>
                            </div>
                        </section>
                    </section>

                    <section className='flex gap-20 md:gap-4 sm:px-10 md:px-20 pt-16 md:flex-row flex-col  '>
                        <div className='flex-5 h-fit py-16 px-2 border-[20px] [border-image:url(/src/assets/Audio.png)_30]'>
                            <div className='border border-[#b3bbb5] p-7 rounded-2xl'>
                                <SoundComp />
                            </div>
                            <div className='border border-[#b3bbb5] p-7 rounded-2xl mt-6'>
                                <SoundComp />
                            </div>
                            <div className='mt-5 flex justify-end'>
                                <button className='bg-[#56913D] w-[166px] h-[56px] rounded-4xl text-white font-bold '>more stories</button>
                            </div>
                        </div>
                        <div className='border-[20px] flex-2 [border-image:url(/src/assets/Frame311.png)_30] py-16  px-4 sm:px-20 md:flex md:flex-col md:justify-between'>
                            <div className='flex justify-between'>
                                <img className='h-[40px]' src={Kellog} alt="kellog's logo" />
                                <img src={Gplus} alt="G plus's logo" />
                            </div>

                            <div>
                                <h2 className='my-10 font-bold'>Africa (My Africa) </h2>
                                <p className='leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque unde maiores pariatur asperiores nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem magnam odio exercitationem nam ab minus ad esse iusto officiis eligendi.</p>
                            </div>

                            <div className='mt-5 flex justify-end'>
                                <button className='bg-[#56913D] w-[166px] h-[56px] rounded-4xl text-white font-bold '>more stories</button>
                            </div>
                        </div>
                    </section>

                    {/* Latest Update */}
                    <section>
                        <UpdateComp />
                    </section>
                    {/* Parent */}
                    <section className='bg-[#cee2c6] sm:px-10 md:px-20 md:py-10 md:flex md:flex-row-reverse'>
                        <div className=' flex justify-center py-6 flex-shrink-0 md:relative md:flex-3'>
                            <img className='h-[257px] md:h-[400px] md:absolute md:-top-30 ' src={Shield} alt="Generative shield" />
                        </div>
                        <div className=' md:flex-5'>
                            <h2 className='text-2xl'>A Platform Trusted by</h2>
                            <h1 className='font-cherry text-white text [-webkit-text-stroke:2px_black] text-5xl mt-1 mb-6'>Parent Globally</h1>
                            <p className='leading-6 pb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident repellendus tempora consequuntur mollitia modi sunt unde quae, nam molestiae consectetur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat perferendis rem illo quidem iste officia accusamus illum, quae harum corrupti?</p>
                        </div>
                    </section>
                </main>
                {/* <footer>
                    <Footer />
                </footer> */}

            </section>

        </>
    )
}

export default Home