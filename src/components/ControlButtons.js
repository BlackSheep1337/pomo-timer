import React from 'react';
import { TimerControlContainer } from './styles';
import { useGlobalContext } from '../contextAPP/context';

export default function ControlButtons() {
  const { handleReset, handleStart, handleStop } = useGlobalContext()
  return (
    <TimerControlContainer>
      <button onClick={ handleStart } className="green">
        Start
      </button>
      <button onClick={ handleStop } className="red">
        Stop
      </button>
      <button onClick={ handleReset } className="gray">
        Reset
      </button>
    </TimerControlContainer>
  )
}
