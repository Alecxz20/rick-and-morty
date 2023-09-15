import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'
import CharacterList from "./components/CharacterList"
import Error from './components/Error'
import CharacterDetails from "./pages/CharacterDetails"
import './App.css'
import { useState } from 'react'
import SearchList from './components/SearchList'
  
export default function App() {
    const [characterList, setCharacterList] = useState('')
    const [currentURL, setCurrenURL] = useState('https://rickandmortyapi.com/api/character')

    const router = createBrowserRouter([
        {
          path: '/',
          element: <CharacterList 
            setCurrenURL={setCurrenURL} 
            currentURL={currentURL} 
            characterList={characterList} 
            setCharacterList={setCharacterList} 
          />,
          errorElement: <Error />
        },
        {
          path: 'character/:id',
          element: <CharacterDetails />,
          errorElement: <Error />
        },
        {
          path: '/character/name=:char',
          element: <SearchList />
        }
    ])
    return (
        <RouterProvider router={router} />
    )
}