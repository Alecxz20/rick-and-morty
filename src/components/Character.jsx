import React from 'react'
import { Link } from 'react-router-dom'

export default function Character ({ item }) {
    const {name, id, image} = item
  return (
    <li className='character__card'>
        <Link to={"/character/" + id}>
            <h2>{name}</h2>
            <img className='character__img' src={image} alt="Name image" />
        </Link>
    </li>
  )
}
