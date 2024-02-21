import { useState } from 'react'
import Header from './Header/Header.jsx'
import './App.css'
import Books from'./Books.jsx'
import Home from './Home/Home.jsx'
import Cart from './Cart.jsx'
import Footer from './Footer/Footer.jsx'


function App() {

  const [selectedLink, setSelectedLink] = useState('Home');
  const links = ['Home', 'Books', 'My Cart'];
  const handleSelectLink = (link) => {setSelectedLink(link)};

  return (
    <>
      //<Header links = {links} selectedLink={selectedLink} onSelectLink={handleSelectLink}/>
      <div>
        {selectedLink === 'Home' && <Home onBookClick={() => handleSelectLink('Books')} />}
        {selectedLink === 'Books' && <Books/>}
        {selectedLink === 'My Cart' && <Cart/>}
      </div>
      <Footer/>
    </>
  )
}

export default App
