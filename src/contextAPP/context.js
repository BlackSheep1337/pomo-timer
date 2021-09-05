import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

const INITIAL_STATE = {
  hour: 0,
  minutes: 25,
  seconds: 0,
}

const AppProvider = ({ children }) => {
  const [STATE, setSTATE] = useState(INITIAL_STATE)
  
  useEffect(() => {
    const { minutes, seconds } = STATE;
    const ONE_SECOND = 1000;
    let timeout = setInterval(() => {
      setSTATE((prevState) => {
        return {
          ...prevState,
          minutes: seconds === 0 ? minutes - 1 : minutes,
          seconds: seconds === 0 ? 9 : seconds - 1,
        }
      })
    }, ONE_SECOND);
    if (minutes === 0 && seconds === 0) {
      clearInterval(timeout);
    }
    return () => clearInterval(timeout);
  }, [STATE]);

  const handlePomodoro = (e) => {
    e.preventDefault();
    setSTATE({ minutes: 25, seconds: 0 });
  }

  const handleShortBreak = (e) => {
    e.preventDefault();
    setSTATE({ minutes: 5, seconds: 0 });
  }

  const handleLongBreak = (e) => {
    e.preventDefault();
    setSTATE({ minutes: 10, seconds: 0 });
  }



  return <AppContext.Provider value={{
    STATE,
    setSTATE,
    handlePomodoro,
    handleShortBreak,
    handleLongBreak,
  }}>
    { children }
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export default AppProvider;
