import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Coupon = ({coupon, onDelete, onToggle}) => {
  return (
    <div className={`coupon ${coupon.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(coupon.id)}>
      <h3>{coupon.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(coupon.id)}/></h3>
      <p>{coupon.day}</p>
    </div>
  )
}

export default Coupon