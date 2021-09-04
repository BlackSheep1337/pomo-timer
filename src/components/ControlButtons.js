import React from 'react';
import { TimerControlContainer } from './styles';

export default function ControlButtons() {
  return (
    <TimerControlContainer>
      <button className="green">
        Start
      </button>
      <button className="red">
        Stop
      </button>
      <button className="gray">
        Reset
      </button>
    </TimerControlContainer>
  )
}
