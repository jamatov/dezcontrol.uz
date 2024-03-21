import React from 'react'
import location from '../Images/footer-location.svg'
import phone from '../Images/footer-phone.svg'
import instagram from '../Images/footer-insta.svg'
import telegram from '../Images/footer-tg.svg'
import { Link } from 'react-scroll'


export default function Footer() {
  return (
    <footer className='Footer'>
      <div className="container">
        <div className="row">
          <div className='col-md-6 mb-4'>
            <h3>Наша компания DezEffect предоставляет весь спектр санитарных услуг в Ташкенте. Дезинфекция, дезинсекция и дератизация в Ташкенте.</h3>
            <div className='address'>
              <img src={location} alt="" />
              <p>ТТЗ-1, М.Улугбекский р-н,Ташкент | Zipcode: 100142</p>
            </div>

            <a href="tel:+998954333344">
              <div className='address mb-5'>
                <img src={phone} alt="" />
                <p>+99895 433 33 44</p>
            </div>
            </a>

            <h3>Наши социальные сети</h3>
            <div className="d-flex gap-4">
              <a target='_blank' href="https://www.instagram.com/dezinsect.uz/">
                <img src={instagram} alt="" />
              </a>
              <a target='_blank' href="https://t.me/dezinsect">
                <img src={telegram} alt="" />
              </a>
            </div>
          </div>

          <div className="col-md-6">
            <div className='footer-links'>
              <div>
                <h3>Навигация</h3>
                <ul className='footer-list'>
                  <li><Link activeClass="active" spy={true} smooth={true} offset={-120} duration={100} to='Header'>Главная</Link></li>
                  <li><Link activeClass="active" spy={true} smooth={true} offset={-120} duration={100} to='About'>О нас</Link></li>
                  <li><Link activeClass="active" spy={true} smooth={true} offset={-120} duration={100} to='Services'>Услуги</Link></li>
                  <li><Link activeClass="active" spy={true} smooth={true} offset={-120} duration={100} to='Form'>Oставить заказ</Link></li>
                </ul>
              </div>

              <div>
                <h3>Услуги</h3>
                <ul className='footer-list'>
                  <li><Link activeClass="active" spy={true} smooth={true} offset={-120} duration={100} to='Services'>Дезинфекция</Link></li>
                  <li><Link activeClass="active" spy={true} smooth={true} offset={-120} duration={100} to='Services'>Дезинсекция</Link></li>
                  <li><Link activeClass="active" spy={true} smooth={true} offset={-120} duration={100} to='Services'>Дератизация</Link></li>
                  <li><Link activeClass="active" spy={true} smooth={true} offset={-120} duration={100} to='Services'>Пестконтроль</Link></li>
                  <li><Link activeClass="active" spy={true} smooth={true} offset={-120} duration={100} to='Services'>Дезодорация</Link></li>
                  <li><Link activeClass="active" spy={true} smooth={true} offset={-120} duration={100} to='Services'>Уничтожение</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
