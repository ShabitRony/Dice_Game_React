import { useState } from "react"
import NumberSelector from "./NumberSelector"
import RollDice from "./RollDice"
import TotalScore from "./TotalScore"
import styled from "styled-components"
import { Button } from "../Styled/Button"
import Rules from "./Rules"

const GamePlay = () => {
  const [score , setScore] = useState(0);
  const [selectedNumber , setSelectedNumber] = useState();
  const [currentDice , setCurrentDice] = useState(1);
  const [error,setError] = useState("");
  const [showRules,setShowRules] = useState(false)
  const generateRandom =(max,min)=>{
    console.log(Math.floor(Math.random()*(max - min)+min))
    return Math.floor(Math.random()*(max - min)+min); 
}
const RoleDice = () =>{
  if(!selectedNumber){
    setError("You Have Not Selected Any Number.");
    return;
  } 
    setError("");
  const randomNumber = generateRandom(1,7)
  setCurrentDice((prev)=>randomNumber);
  if(selectedNumber === randomNumber){
    setScore((prev)=>prev+1);
  }else{
    setScore((prev)=> prev-1);
  }

  setSelectedNumber(undefined)
} 
const toggleRules =()=>{
  setShowRules((prev)=>!prev);
}

const resetScore=()=>{
  setScore(0);
}
  return (
    <MainContainer>
        <div className="top_section">
        <TotalScore
        score={score}
        />
        <NumberSelector
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        error={error}
        setError={setError}
        />
        </div>
        <RollDice
        currentDice={currentDice}
        RoleDice={RoleDice}
        />
        <div className="btns">
          <Button onClick={resetScore}>Reset</Button>
          <Button onClick={toggleRules}>{showRules?"Hide":"Show"}Show Rules</Button>
        </div>
        {showRules && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.div`
    .top_section{
        display: flex;
        justify-content: space-between;
        align-items: end;
        padding-top: 50px;
    }
    .btns{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap:10px;
      
    }

`
