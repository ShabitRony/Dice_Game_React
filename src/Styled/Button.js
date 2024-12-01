import styled from "styled-components";
export const Button = styled.button`
  padding: 10px 15px;
  color: white;
  width: 200px;
  height: 40px;
  background: #000000;
  border-radius: 5px;
  border: none;
  transition: 0.4s ease-in-out;
  cursor: pointer;


  &:hover{
    background-color: #383838;
    transition: 0.3s ease-in-out;
    transform: scale(1.02);
  }
`;