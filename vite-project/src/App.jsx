import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import JokeGenerator from './JokesGenerator';

function App() {
  const [joke,setJoke]= useState('');

  return (
    <>
   <JokeGenerator/>
        
    </>
  )
}

export default App
