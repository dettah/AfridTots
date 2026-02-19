import './App.css'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import NavBar from './Components/NavBar'
import News from './Components/News'
import Footer from './Components/Footer'
import Quart from '../src/assets/sector.png'
import NewsDetail from './Components/NewsDetail'
import Shop from './Pages/Shop'
import Book from './Pages/Book'
import Audio from './Pages/Audio'
import Product from './Pages/Product'
import ItemDetails from "./Pages/ItemDetails";
import AudioItemDetails from "./Pages/AudioItemDetails";


function App() {
  const location = useLocation();
  return (
    <div>
      <section className='relative ' >

        {(location.pathname === '/' || location.pathname === '/about') && (
          <img
            src={Quart}
            alt="Sector background image"
            className="absolute sm:top-0 lg:-top-40 right-0 w-3/5 z-[-10]"
          />
        )}

        <nav>
          <NavBar />
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail /> } />
          <Route path="/shop" element={<Shop />} />
          <Route path="/books" element={<Book />} />
          <Route path="/audio" element={<Audio />} />
          <Route path='/products' element={<Product />} />
          <Route path="/item/:id" element={<ItemDetails />} />
          <Route path="/audio-item/:id" element={<AudioItemDetails />} />
        </Routes>

        <Footer />
      </section>

    </div>
  )
}

export default App
