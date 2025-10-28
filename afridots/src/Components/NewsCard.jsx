import { useState } from "react"
import { useNavigate } from "react-router-dom"
import EventImg1 from "../assets/newsImg.png"

const cards = [
  { id: 1, title: "Music Festival", tag: "Events", img: EventImg1, text: "Lorem ipsum...", details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quod velit fugiat atque totam error voluptatem temporibus earum dolor, aut praesentium necessitatibus saepe delectus aliquid nobis consequuntur sit modi rerum, debitis id cupiditate quae nulla. Totam illum placeat exercitationem eveniet excepturi velit, iusto soluta deserunt corporis explicabo voluptatibus ducimus ullam illo laboriosam nesciunt consectetur odio cum perspiciatis alias perferendis odit neque. Nam necessitatibus consequuntur illo possimus maiores, similique libero velit sed ullam ad ipsum fugiat commodi. Aliquid veritatis est ad ipsa, laboriosam dolorum harum maxime, nemo sit quaerat molestias delectus recusandae velit ea rerum ab ducimus corrupti adipisci autem provident?" },

  { id: 2, title: "Summer Sale", tag: "Literature", img: EventImg1, text: "Lorem ipsum...", details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quod velit fugiat atque totam error voluptatem temporibus earum dolor, aut praesentium necessitatibus saepe delectus aliquid nobis consequuntur sit modi rerum, debitis id cupiditate quae nulla. Totam illum placeat exercitationem eveniet excepturi velit, iusto soluta deserunt corporis explicabo voluptatibus ducimus ullam illo laboriosam nesciunt consectetur odio cum perspiciatis alias perferendis odit neque. Nam necessitatibus consequuntur illo possimus maiores, similique libero velit sed ullam ad ipsum fugiat commodi. Aliquid veritatis est ad ipsa, laboriosam dolorum harum maxime, nemo sit quaerat molestias delectus recusandae velit ea rerum ab ducimus corrupti adipisci autem provident?" },

  { id: 3, title: "Tech Conference", tag: "Events", img: "/images/event2.png", text: "Lorem ipsum...", details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quod velit fugiat atque totam error voluptatem temporibus earum dolor, aut praesentium necessitatibus saepe delectus aliquid nobis consequuntur sit modi rerum, debitis id cupiditate quae nulla. Totam illum placeat exercitationem eveniet excepturi velit, iusto soluta deserunt corporis explicabo voluptatibus ducimus ullam illo laboriosam nesciunt consectetur odio cum perspiciatis alias perferendis odit neque. Nam necessitatibus consequuntur illo possimus maiores, similique libero velit sed ullam ad ipsum fugiat commodi. Aliquid veritatis est ad ipsa, laboriosam dolorum harum maxime, nemo sit quaerat molestias delectus recusandae velit ea rerum ab ducimus corrupti adipisci autem provident?" },

  { id: 4, title: "Book Launch", tag: "Education", img: "/images/book1.png", text: "Lorem ipsum...", details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quod velit fugiat atque totam error voluptatem temporibus earum dolor, aut praesentium necessitatibus saepe delectus aliquid nobis consequuntur sit modi rerum, debitis id cupiditate quae nulla. Totam illum placeat exercitationem eveniet excepturi velit, iusto soluta deserunt corporis explicabo voluptatibus ducimus ullam illo laboriosam nesciunt consectetur odio cum perspiciatis alias perferendis odit neque. Nam necessitatibus consequuntur illo possimus maiores, similique libero velit sed ullam ad ipsum fugiat commodi. Aliquid veritatis est ad ipsa, laboriosam dolorum harum maxime, nemo sit quaerat molestias delectus recusandae velit ea rerum ab ducimus corrupti adipisci autem provident?" },

  { id: 5, title: "AI Summit", tag: "Education", img: "/images/ai.png", text: "Lorem ipsum...", details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quod velit fugiat atque totam error voluptatem temporibus earum dolor, aut praesentium necessitatibus saepe delectus aliquid nobis consequuntur sit modi rerum, debitis id cupiditate quae nulla. Totam illum placeat exercitationem eveniet excepturi velit, iusto soluta deserunt corporis explicabo voluptatibus ducimus ullam illo laboriosam nesciunt consectetur odio cum perspiciatis alias perferendis odit neque. Nam necessitatibus consequuntur illo possimus maiores, similique libero velit sed ullam ad ipsum fugiat commodi. Aliquid veritatis est ad ipsa, laboriosam dolorum harum maxime, nemo sit quaerat molestias delectus recusandae velit ea rerum ab ducimus corrupti adipisci autem provident?" },
  
  { id: 6, title: "Poetry Slam", tag: "Literature", img: "/images/poetry.png", text: "Lorem ipsum...", details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quod velit fugiat atque totam error voluptatem temporibus earum dolor, aut praesentium necessitatibus saepe delectus aliquid nobis consequuntur sit modi rerum, debitis id cupiditate quae nulla. Totam illum placeat exercitationem eveniet excepturi velit, iusto soluta deserunt corporis explicabo voluptatibus ducimus ullam illo laboriosam nesciunt consectetur odio cum perspiciatis alias perferendis odit neque. Nam necessitatibus consequuntur illo possimus maiores, similique libero velit sed ullam ad ipsum fugiat commodi. Aliquid veritatis est ad ipsa, laboriosam dolorum harum maxime, nemo sit quaerat molestias delectus recusandae velit ea rerum ab ducimus corrupti adipisci autem provident?"  },
]

const NewsCard = ({ filter, excludeId }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4
  const navigate = useNavigate()

  // filter first
  let filteredCards =
    filter === "All" ? cards : cards.filter((card) => card.tag === filter)

  if (excludeId) {
    filteredCards = filteredCards.filter(c => c.id !== excludeId)
  }


  // calculate pagination
  const totalPages = Math.ceil(filteredCards.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = filteredCards.slice(startIndex, startIndex + itemsPerPage)

  const tagColors = {
    Events: "bg-[#5E9F43]",
    Literature: "bg-[#E3A107]",
    Education: "bg-[#09230F]",
    Default: "bg-gray-500",
  }

  return (
    <div>
      {/* Cards */}
      {currentItems.map((card) => (
        <div
          key={card.id}
          onClick={() => navigate(`/news/${card.id}`)}
          className="cursor-pointer rounded-lg w-full gap-5 flex flex-col md:flex-row mb-8 hover:shadow-lg transition"
        >

          <div className="md:flex-3 overflow-hidden rounded-2xl md:h-[225px] border">
            <img
              src={card.img}
              alt={card.title}
              className="w-full md:w-[448px] object-cover"
            />
          </div>

          <div className="flex-5">
            <div
              className={`${tagColors[card.tag] || tagColors.Default} font-bold text-white w-fit px-3 py-1`}
            >
              <p className="text-sm">{card.tag}</p>
            </div>
            <h3 className="text-lg font-semibold mt-2 mb-4">{card.title}</h3>
            <p>{card.text}</p>
          </div>
        </div>
      ))}

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-md transition ${currentPage === page
                  ? "bg-[#5E9F43] text-white"
                  : "bg-gray-200 hover:bg-gray-300"
                }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default NewsCard
export { cards }  // 👈 export cards so detail page can use it