import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'

export default function CharacterDetails () {
  const [character, setCharacter] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  
  const { id } = useParams()

  useEffect(() => {
    setIsLoading(true)
    fetch('https://rickandmortyapi.com/api/character/' + id)
      .then(res => res.json())
      .then(data => {
        setIsLoading(false)
        setCharacter(data)
      })
  }, [id])

  if (isLoading) {
    return <Loader />
  }

  if (!character) return

  return (
    <div className='character__details'>
      <img alt={`${character.name}`} src={character.image} />
      <h1>{character.name}</h1>
      <p>Status: {character.status}</p>
      <p>Gender: {character.gender}</p>
      <p>Species: {character.species}</p>
      <Link to={"/"}><button>Go back</button></Link>
    </div>
  )
}
