import React from 'react'
import Img from '../Images/about.jpg'
import { Fade } from 'react-reveal'
import { Link } from 'react-scroll'


export default function About() {
  return (
    <section id='About' className='About'>
      <div className="container">
        <h2 className='section-tittle'>Наша компания</h2>
        <div className="row">
          <Fade left>
            <div className="col-md-6 about-info">
              <p>Добро пожаловать в DezEffect</p>
              <h4>Лучшие специалисты по дезинфекции</h4>
              <h5>Наша компания DezEffect представляет Вашему вниманию весь спектр профилактических услуг по городу Ташкент.В период становления нашей компании, изначально взяв на вооружение всё лучшее, что имелось на российском рынке из препаратного ряда и специализированного оборудования для борьбы с грызунами, насекомыми, болезнетворными бактериями и т.д., специалисты нашей компании внимательно следили за инновациями в этой области. </h5>
              <Link activeClass="active" spy={true} smooth={true} offset={-120} duration={100} to='Form'><button>Oставить заказ</button></Link>
              

            </div>
          </Fade>

          <Fade right>
            <div className="col-md-6">
              <img src={Img} alt="" />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}
