import React from 'react'
import Img from '../Images/about.jpg'

export default function About() {
  return (
    <section className='About'>
      <div className="container">
        <h2 className='section-tittle'>Наша компания</h2>
        <div className="row">
          <div className="col-md-6 about-info">
            <p>Добро пожаловать в DezControl</p>
            <h4>Лучшие специалисты по дезинфекции</h4>
            <h5>Наша компания DezControl представляет Вашему вниманию весь спектр профилактических услуг по городу Ташкент.В период становления нашей компании, изначально взяв на вооружение всё лучшее, что имелось на российском рынке из препаратного ряда и специализированного оборудования для борьбы с грызунами, насекомыми, болезнетворными бактериями и т.д., специалисты нашей компании внимательно следили за инновациями в этой области. </h5>
            <button>Oставить заказ</button>
          </div>
          <div className="col-md-6">
            <img src={Img} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
