import React from 'react'
import styled, {keyframes} from 'styled-components';

const kf = keyframes`
 50% {
  transform: scale(.8);
 }
 100% {
  transform: scale(1);
  opacity : 1;
 }
`
const StyledFriend = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between; 
  padding: 8px;
  border-bottom: 2px solid white;

  background-color: ${props=> props.theme.primaryColor};
  color: ${props=> props.theme.white};

  transition: all .2s ease-in-out;
  &:hover {
    transition: all .2s ease-in-out;
    background-color : ${props=> props.theme.secondaryColor}
  }
  &::before {
    content : "${props => props.besty ? '••' : '◦'}" 
  }

  button {
    border : none;
    background-color : ${props => props.theme.tertiaryColor};
    &:hover {
      transform : scale(1.2);
    }
  }

  transform : scale(2); //*start of animation 
  opacity : 0;
  animation : ${kf} .3s ease-in-out forwards;
`

export default function Friend({ info, action, besty }) {
  return (
    <StyledFriend besty = {besty}>
      {info.name}
      <button onClick={() => action(info.id)}>
        See details
      </button>
    </StyledFriend>
  )
}
