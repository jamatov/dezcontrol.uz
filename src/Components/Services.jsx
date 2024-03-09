import React from 'react'
import img1 from '../Images/card1.jpg'
import '../Styles/card.css'
import { Link } from 'react-scroll'

export default function Services() {
  return (
    <section id='Services' className='Services'>
      <div className="container">
        <h2 className='section-tittle'>Широкий спектр услуг</h2>
        <div className="row">

        
          
          <div className="col-md-4 mb-3">
            <div className="card kard card1">
              <div className="card-content">
                <h2 className="card-title">Дезинфекция</h2>
                <p className="card-body">
                Очистка вирусов и бактерий, комплексная профилактика.
                </p>
                <Link activeClass="active" className='button' spy={true} smooth={true} offset={-120} duration={100} to='Form'>Oставить заказ</Link>

              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card kard card2">
              <div className="card-content">
                <h2 className="card-title">Дезинсекция</h2>
                <p className="card-body">
                Уничтожение возбудителей инфекционных заболеваний.
                </p>
                <Link activeClass="active" className='button' spy={true} smooth={true} offset={-120} duration={100} to='Form'>Oставить заказ</Link>

              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card kard card3">
              <div className="card-content">
                <h2 className="card-title">Дератизация</h2>
                <p className="card-body">
                Комплексная борьба против грызунов: мышей и крыс.
                </p>
                <Link activeClass="active" className='button' spy={true} smooth={true} offset={-120} duration={100} to='Form'>Oставить заказ</Link>

              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card kard card4">
              <div className="card-content">
                <h2 className="card-title">Пестконтроль</h2>
                <p className="card-body">
                Это комплекс мероприятий по ограничению численности вредителей  
                </p>
                <Link activeClass="active" className='button' spy={true} smooth={true} offset={-120} duration={100} to='Form'>Oставить заказ</Link>

              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card kard card5">
              <div className="card-content">
                <h2 className="card-title">Уничтожение</h2>
                <p className="card-body">
                Уничтожение мелких вредных организмов любого вида.
                </p>
                <Link activeClass="active" className='button' spy={true} smooth={true} offset={-120} duration={100} to='Form'>Oставить заказ</Link>

              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card kard card6">
              <div className="card-content">
                <h2 className="card-title">Дезодорация</h2>
                <p className="card-body">
                Yдаление и корневое устранение неприятных или вредных запахов.
                </p>
                <Link activeClass="active" className='button' spy={true} smooth={true} offset={-120} duration={100} to='Form'>Oставить заказ</Link>

              </div>
            </div>
          </div>

          


        </div>
      </div>
    </section>
  )
}
