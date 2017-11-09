import React from 'react'

const Rating = ({ rating, rateColor }) => (
  <div>
    {[...Array(5).keys()].map(r => (
      <i 
        key={r} 
        className={`fa fa-star${r <= rating-1 ? '' : '-o'}`} 
        onClick={() => rateColor(r+1)}
      />
    ))}
  </div>
)

export default Rating
