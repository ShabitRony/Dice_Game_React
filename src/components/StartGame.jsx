import styled from "styled-components";
import { Button } from "../Styled/Button";
const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img style={{width:"500px"}} src="/images/dices.png" alt="dice" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button
        onClick={toggle}
        >Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 980px;
  display: flex;
  margin: 0 auto;
 align-items: center;
  height: 100vh;

  .content{
      h1{
            font-size: 90px;
            white-space: nowrap;
  } 

  }
`;


