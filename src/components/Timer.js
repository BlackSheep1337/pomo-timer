import React from 'react';
import { useGlobalContext } from '../contextAPP/context';
import { TimerContainer } from './styles';


export default function Timer() {
  const { STATE: { minutes, seconds } } = useGlobalContext();


  return (
    <TimerContainer>
      <h1>
        { minutes < 10 ? `0${ minutes }` : minutes }
        :
        { seconds < 10 ? `0${ seconds }` : seconds }
      </h1>
    </TimerContainer>
  )
}
