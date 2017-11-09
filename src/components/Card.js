import React from 'react'
import moment from 'moment'
import Rating from './Rating'


const Card = ({ color: { id, title, color, rating, timestamp }, onClick, rateColor }) => (
  <div style={{ backgroundColor: color, display: 'inline-block', margin: 20, padding: 15, borderRadius: 10 }}>
    <div onClick={onClick} style={{ float: 'right' }}><i className="fa fa-remove" /></div>
    <h3>{title}</h3>
    <span>{moment(timestamp).format('M/D/Y h:mma')}</span>
    <Rating rating={rating} rateColor={rateColor} />
  </div>
)

export default Card
