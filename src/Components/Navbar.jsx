import React, {useState, useEffect} from 'react'
import Logo from '../Images/logo1.svg'
import { Link } from 'react-scroll'

export default function Navbar() {
  const [active, setActive] = useState('nav-list');
  const [toggleIcon, setToggleIcon] = useState('nav__toggler');
    const navToggle = () => {
      active === 'nav-list' 
      ? setActive('nav-list nav__active')
      : setActive('nav-list');

      toggleIcon === "nav__toggler"

      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
    }

  const [navbar, setNavbar] = useState(false);

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
          <Link activeClass="active" className='brand-logo' spy={true} smooth={true} offset={-120} duration={100} to='Header'>
            <img className='nav-logo' src={Logo} alt="" />
          </Link>
          <ul className={active}>
            <li><Link onClick={navToggle} activeClass="active" spy={true} smooth={true} offset={-120} duration={100} to='Header'>Главная</Link></li>
            <li><Link onClick={navToggle} activeClass="active" spy={true} smooth={true} offset={-120} duration={100} to='About'>О нас</Link></li>
            <li><Link onClick={navToggle} activeClass="active" spy={true} smooth={true} offset={-120} duration={100} to='Services'>Услуги</Link></li>
            <li><Link onClick={navToggle} activeClass="active" spy={true} smooth={true} offset={-120} duration={100} to='Form'>Oставить заказ</Link></li>
          </ul>

          <div onClick={navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </div>
    </nav>
  )
}
