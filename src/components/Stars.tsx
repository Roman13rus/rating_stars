import React from 'react'
import Star from './Star';

interface MyCountProps {
  count: number;
}

const Stars = ({count}: MyCountProps) => {
  let newCountStars: JSX.Element[]  = []
  if (typeof count != 'number' || count < 1 || count > 5) {
      newCountStars = []
  } else {
      for (let i = 0; i < count; i++) {
        newCountStars.push(
          <li className='star'>
            <Star/>
          </li>
          )
        }
    }
  return (
    <ul className="card-body-stars u-clearfix">{ newCountStars }</ul>
  )
}

export default Stars

