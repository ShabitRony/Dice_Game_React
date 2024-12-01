import { useState } from "react";
import "./App.css";
import StartGame from "./components/StartGame"
import GamePlay from "./components/GamePlay";


const App = () => {
  const [isGameStarted,setIsGameStarted] = useState(false)

    const toggleGame = () => {
      setIsGameStarted((prev)=> !prev);
    };

  return (
    <div>
      {
        isGameStarted ? <GamePlay/> : <StartGame
        toggle = {toggleGame}
        />
      }
      
    </div>
  )
}

export default App
