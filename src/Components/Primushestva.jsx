import React from 'react'
import img1 from '../Images/p1.svg'
import img2 from '../Images/p2.svg'
import img3 from '../Images/p3.svg'

export default function Primushestva() {
  return (
    <section id='Primushestva' className='Primushestva'>
      <div className="container">
        <h2 className='section-tittle'>Почему вы должны выбрать именно нас</h2>
        <div className="row">
          
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <img src={img1} alt="" />
                <h3>Дератизация</h3>
                <p>Уничтожение и контроль численности грызунов (крыс, мышей, полёвок) на объектах всех категорий, от производственных помещений до продовольственных складов и торговых центров.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <img src={img2} alt="" />
                <h3>Дезинфекция</h3>
                <p>Профилактическая дезинфекция представляет собой сложный процесс, требующий вмешательства специалистов, пренебрегать которым не рекомендуется и даже опасно</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <img src={img3  } alt="" />
                <h3>Дезинсекция</h3>
                <p>В дезинсекции нуждаются многочисленные рестораны и кафе, предприятия пищевой промышленности, торговые и бизнес-центры, а также все те, кто столкнулся с опасным и неприятным соседством с насекомыми.</p>
              </div>
            </div>
          </div>

          
          
        </div>
      </div>
    </section>
  )
}
