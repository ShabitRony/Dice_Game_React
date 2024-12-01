import styled from "styled-components"
const RollDice = ({currentDice,RoleDice}) => {
    
    
  return (
    <DiceContainer>
      <div className="dice"
      onClick={RoleDice}
      >
        <img src={`/images/dices/dice_${currentDice}.png`} alt="Dice1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    .dice{
        cursor: pointer;
        
    }
    p{
        font-size: 24px;
    }
    .dice img{
      width: 200px;
    }
`
