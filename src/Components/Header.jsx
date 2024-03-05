import React from 'react'
import Img from '../Images/bg-person.png'
import Icon1 from '../Images/icon1.svg'
import Icon2 from '../Images/icon2.svg'
import Icon3 from '../Images/icon3.svg'
import Icon4 from '../Images/icon4.svg'
import Icon5 from '../Images/icon5.svg'





export default function Header() {
  return (
    <section className='Header'>
      <div className="container">
        <div className="row">
          <div className="col-md-8 header-info">
            <p>Профессиональная дезинфекция в Ташкенте</p>
            <h2>С нами легко убить вредителей через службу <span>Дезинфекции</span></h2>
            <h5>Только лучшие услуги дезинфекции Оперативный выезд и гарантия 1 годиналасе услуги дезинфекции. Доверьтесь только лу шим спе малистам!</h5>
            <button>Oставить заказ</button>
          </div>
          <div className="col-md-4 header-img">
            <div className='po-re'>
              <img className='header-img__img' src={Img} alt="" />
              <img className='icon1' src={Icon1} alt="" />
              <img className='icon2' src={Icon2} alt="" />
              <img className='icon3' src={Icon3} alt="" />
              <img className='icon4' src={Icon4} alt="" />
              <img className='icon5' src={Icon5} alt="" />


            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
