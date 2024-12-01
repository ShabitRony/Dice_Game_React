
import styled from "styled-components"
const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to Play Dice Game!</h2>
      <div className="text">
        <p>Select Any Number.</p>
        <p>after click on dice if selected number is equal to dice number you will get same point as dice</p>
        <p>if you get wrong guess then 1 point will be deducted</p>
      </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
    background-color: #fbf1f1;
    padding: 20px;
    max-width: 300px;
    margin: 0 auto;
    margin-top:40px ;
    align-items: center;

    h2{
        font-size: 24px;
    }
    .text{
        margin-top:24px;

    }
`
