import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Redux/Counter'
import Component from './CRUD/Component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Simple Redux Counter</h2>
      <Counter />


      <h2>Simple CRUD Application</h2>
      <Component />
    </>
  )
}

export default App
