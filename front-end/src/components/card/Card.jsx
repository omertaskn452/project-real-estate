import React from 'react'
import "./card.css"

const Card = ({title, img, bedroom, bathroom, price, address, latitude, longitude}) => {
  return (
    <div className='card'>
      <div className="card-container">
        <div className="card-img-wrapper">
          <img className='card-img' src={img} alt="" />
        </div>
        <div className="card-infos">
          <h3 className='card-header'>{title}</h3>
          <div className='card-address'>
            <img className='card-icon' src="/icons/pin.png" alt="" />
            <span>{address}</span>
          </div>
          <div className="card-price">
            ${price}
          </div>
          <div className="card-others">
            <div className="card-utility">
              <img className='card-icon' src="/icons/bed.png" alt="" />
              <span>{bedroom} Bedroom</span>
            </div>
            <div className="card-utility">
              <img className='card-icon' src="/icons/bath.png" alt="" />
              <span>{bathroom} Bathroom</span>
            </div>
            <div className="card-btn-wrapper">
              <div className="card-btn">
                <img className='card-icon' src="/icons/save.png" alt="" />
              </div>
              <div className="card-btn">
                <img className='card-icon' src="/icons/chat.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
