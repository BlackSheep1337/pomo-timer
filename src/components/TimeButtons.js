import React from 'react';
import { ButtonsContainer } from './styles';
import { useGlobalContext } from '../contextAPP/context';

export default function TimeButtons() {
  const {  handlePomodoro, handleShortBreak, handleLongBreak  } = useGlobalContext();
  return (
    <ButtonsContainer>
        <button onClick={ handlePomodoro }>
          Pomodoro
        </button>
        <button onClick={ handleShortBreak }>
          Short Break
        </button>
        <button onClick={ handleLongBreak }>
          Long Break
        </button>
    </ButtonsContainer>
  )
}
