import React, {useState, useEffect} from 'react'
import Logo from '../Images/logo.svg'

export default function Navbar() {
  const [navbar, setNavbar] = useState(false)

  const changeNavbar = () => {
    if (window.scrollY >= 50) {
        setNavbar(true);
    } else {
        setNavbar(false)
    }
  }
  
  window.addEventListener('scroll', changeNavbar);

  return (
    <nav className={`Navbar ${navbar ? 'navbarActive' : ''}`}>
      <div className="container">
        <div className="nav-body">
          <img src={Logo} alt="" />
          <ul>
            <li><a href="">Главная</a></li>
            <li><a href="">Услуги</a></li>
            <li><a href="">О нас</a></li>
            <li><a href="">Oставить заказ</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
