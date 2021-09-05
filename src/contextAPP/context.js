import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const INITIAL_STATE = {
  hour: 0,
  minutes: 25,
  seconds: 0,
}

const AppProvider = ({ children }) => {
  const [STATE, setSTATE] = useState(INITIAL_STATE)









  return <AppContext.Provider value={{
    STATE,
    setSTATE,
  }}>
    { children }
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export default AppProvider;
