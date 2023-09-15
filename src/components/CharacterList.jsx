import React, { useEffect, useState  } from 'react'
import Character from './Character'
import Search from './Search'

export default function CharacterList ({ setCurrenURL, characterList, setCharacterList, currentURL }) {
  const [searchValue, setSearchValue] = useState('')
  
  function fetching (url) {
    fetch(url)
      .then(res => res.json())
      .then(data => setCharacterList(data))
  }

  useEffect(() => {
    fetching(currentURL)
  }, [searchValue])

  function goNext() {
    setCurrenURL(characterList.info.next)
    fetching(characterList.info.next)
  }

  function goBack() {
    setCurrenURL(characterList.info.prev)
    fetching(characterList.info.prev)
  }

  function handleSubmit(url) {
    setCurrenURL(url)
    fetching(url)
  }

  const list = characterList.results

  return (
        <>
          <h1>Rick and Morty</h1>
          <Search handleSubmit={handleSubmit} searchValue={searchValue} setSearchValue={setSearchValue} />
          <ul className="character__list">
              {list && list.map(item => {
                return <Character item={item} key={item.id}/>
              })}
          </ul>
          <div className="navigation">
            <button onClick={goBack}>Prev</button>
            <button onClick={goNext}>Next</button>
          </div>
        </>
  )
}
