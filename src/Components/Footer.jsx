import React from 'react'
import location from '../Images/footer-location.svg'
import phone from '../Images/footer-phone.svg'
import instagram from '../Images/footer-insta.svg'
import telegram from '../Images/footer-tg.svg'

export default function Footer() {
  return (
    <footer className='Footer'>
      <div className="container">
        <div className="row">
          <div className='col-md-6'>
            <h3>Наша компания DezControl предоставляет весь спектр санитарных услуг в Ташкенте. Дезинфекция, дезинсекция и дератизация в Ташкенте.</h3>
            <div className='address'>
              <img src={location} alt="" />
              <p>ТТЗ-1, М.Улугбекский р-н,Ташкент | Zipcode: 100142</p>
            </div>

            <div className='address mb-5'>
              <img src={phone} alt="" />
              <p>+998 93 102-70-27</p>
            </div>

            <h3>Our Social Networks</h3>
            <div className="d-flex gap-4">
              <img src={instagram} alt="" />
              <img src={telegram} alt="" />
            </div>
          </div>

          <div className="col-md-6">
            <div className='footer-links'>
              <div>
                <h3>Навигация</h3>
                <ul className='footer-list'>
                  <li><a href="">Главная</a></li>
                  <li><a href="">Услуги</a></li>
                  <li><a href="">О нас</a></li>
                  <li><a href="">Oставить заказ</a></li>
                </ul>
              </div>

              <div>
                <h3>Услуги</h3>
                <ul className='footer-list'>
                  <li><a href="">Дезинфекция</a></li>
                  <li><a href="">Дезинсекция</a></li>
                  <li><a href="">Дератизация</a></li>
                  <li><a href="">Пестконтроль</a></li>
                  <li><a href="">Дезодорация</a></li>
                  <li><a href="">Уничтожение</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
