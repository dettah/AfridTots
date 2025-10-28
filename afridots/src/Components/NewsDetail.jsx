import { useParams, Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { cards } from "./NewsCard"
import { useWindowWidth } from "./hooks/useWindowWidth"
import Menu from "./Menu"
import NewsCard from "./NewsCard"
import UpdateComp from "./UpdateComp"
import Newsletter from "./Newsletter"

const NewsDetail = () => {
  const { id } = useParams()
  const card = cards.find((c) => c.id === Number(id))
  const width = useWindowWidth()
  const isMobile = width < 768
  const navigate = useNavigate()
  // Default menu selection to card's tag
  const [selected, setSelected] = useState(card?.tag || "All")

  if (!card) return <p>News not found.</p>

  return (
    <>
      <section className="px-4 sm:px-10 md:px-20 py-8">
        {/* Back button */}
        <Link to="/news" className="text-[#5E9F43] mb-6 inline-block">
          ← Back to News
        </Link>

        {/* Reusable Menu */}
        <Menu isMobile={isMobile} selected={selected} setSelected={(cat) => {
          setSelected(cat)
          navigate(`/news?category=${cat}`)
        }} />



        {/* Detail content */}
        <div className="w-full flex justify-center">
          <div className="w-4/5">
            <div className="rounded-lg flex flex-col  gap-6">
              <h1 className="text-[32px] sm:text-5xl md:text-6xl font-cherry text-center font-bold mt-4">{card.title}</h1>

              <div className="flex items-center py-1 justify-between border-y border-[#C0C0C0]">
                {/* Add author dynamically */}
                <h3 className="text-[#5E9F43] flex-1 ">Jennifer Brown</h3>
                <div className="flex flex-2 justify-between sm:flex-none sm:gap-2">
                  <div className="w-full flex justify-center ">
                    <p className="text-sm font-bold text-white bg-[#5E9F43] w-fit px-3 py-1">
                      {card.tag}
                    </p>
                  </div>
                  <p className="whitespace-nowrap"> 24th July, 2025</p>
                </div>
              </div>

              <div className="">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full rounded-2xl object-cover"
                />
              </div>

              <div>
                <p className="mt-4">{card.details}</p>
              </div>
              <div className="flex justify-center">
                <div>heart and view icons</div>
                <div className="">
                  <h3>share</h3>
                  <div>
                    social icons
                  </div>
                </div>
              </div>
            </div>

            {/* Suggested news cards */}
            {/* <div className="mt-10">
            <h2 className="text-xl font-bold mb-4">You might also like</h2>
            <NewsCard filter={selected} excludeId={card.id} />
          </div> */}
          </div>
        </div>
        <div className="md:w-4/5 mx-auto ">
          <Newsletter />
        </div>
      </section>
      <div >
        <UpdateComp />
      </div>
    </>
  )
}

export default NewsDetail
