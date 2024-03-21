import React from 'react'
import Img from '../Images/bg-person.png'
import Icon1 from '../Images/icon1.svg'
import Icon2 from '../Images/icon2.svg'
import Icon3 from '../Images/icon3.svg'
import Icon4 from '../Images/icon4.svg'
import Icon5 from '../Images/icon5.svg'
import Res from '../Images/responsive-head.png'
import { Fade } from 'react-reveal'
import { Link } from 'react-scroll'




export default function Header() {
  return (
    <section id='Header' className='Header'>
      <div className="container">
        <div className="row">
          <Fade left>
            <div className="col-md-8 header-info">
              <p>Профессиональная дезинфекция в Ташкенте</p>
              <h2>С нами легко убить вредителей через службу <span>Дезинфекции</span></h2>
              <h5>Только лучшие услуги дезинфекции Оперативный выезд и гарантия 1 годиналасе услуги дезинфекции. Доверьтесь только лучшим спецалистам!</h5>
              <Link activeClass="active" spy={true} smooth={true} offset={-120} duration={100} to='Form'><button>Oставить заказ</button></Link>
              
            </div>
          </Fade>

          <Fade right> 
            <div className="col-md-4 header-img">
              <div className='po-re'>
                <img className='header-img__img' src={Img} alt="" />
                <img className='icon1' src={Icon1} alt="dezinfeksiya" />
                <img className='icon2' src={Icon2} alt="dezinfeksiya" />
                <img className='icon3' src={Icon3} alt="dezinfeksiya" />
                <img className='icon4' src={Icon4} alt="dezinfeksiya" />
                <img className='icon5' src={Icon5} alt="dezinfeksiya" />
              </div>
            </div>
          </Fade>
          
          <Fade right>
            <div className="col-12 res-img">
              <img src={Res} alt="dezinfeksiya" />
            </div>
          </Fade>
          

          
        </div>
      </div>
    </section>
  )
}
