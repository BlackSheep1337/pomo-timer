import React, { useEffect } from 'react';
import { useGlobalContext } from '../contextAPP/context';
import { TimerContainer } from './styles';

export default function Timer() {
  const { STATE: { minutes, seconds }, setSTATE} = useGlobalContext();

  useEffect(() => {
    const ONE_SECOND = 1000;
    let timeoutSecond = setInterval(() => {
      setSTATE((prevState) => {
        return {
          ...prevState,
          minutes: seconds === 0 ? minutes - 1 : minutes,
          seconds: seconds === 0 ? 9 : seconds - 1,
        }
      })
    }, ONE_SECOND);
    if (minutes === 0 && seconds === 0) {
      clearInterval(timeoutSecond)
    }
    return () => clearInterval(timeoutSecond);
  }, [seconds, setSTATE, minutes]);

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
