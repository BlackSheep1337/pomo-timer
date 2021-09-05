import React from 'react';
import { AdContainer } from './styles';
import Pomodoro from '../assets/images/pomodoro.jpg';
import PomodoroWeb from '../assets/images/pomodoro.jpg.webp';
import TecnicaPomo from '../assets/images/tecnica-pomodoro-nos-estudos.png';

export default function Ads() {
  return (
    <AdContainer>
      <div>
        <img src={ Pomodoro } alt="pomodoro" />
      </div>
      <div>
        <img src={ PomodoroWeb } alt="pomodoro web" />
      </div>
      <div>
        <img src={ TecnicaPomo } alt="tecnica" />
      </div>
    </AdContainer>
  )
}
