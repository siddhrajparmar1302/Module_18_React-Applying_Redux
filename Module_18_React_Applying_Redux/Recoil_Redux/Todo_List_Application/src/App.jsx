import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo_List from './Todo_List_Application/Todo_List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Todo_List />
    </>
  )
}

export default App
