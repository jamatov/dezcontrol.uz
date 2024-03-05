import React from 'react'

export default function Form() {
  return (
    <section className='Form'>
      <div className="container">
        <h2 className='section-tittle'>Оставить заявку</h2>

          <form action="">
            <div className="row">
              <h3>Оставьте вашу заявку, и наши специалисты свяжутся с вами в ближайшее время.</h3>
              <div className="col-md-6 mb-4">
                <input className="col-12" type="text" placeholder='Имя' />
              </div>
              <div className="col-md-6 mb-4">
                <input className="col-12" type="text" placeholder='Телефон' />

              </div>
              <div className="col-12 mb-4">
                <textarea className='col-12' name="message" id="" cols="30" rows="10" placeholder='Опишите Ваше обращение в кратце, мы Вам перезвоним и обсудим детали вместе'></textarea>

              </div>
            </div>
            <button>Oставить заказ</button>

          </form>
      </div>
    </section>
  )
}
