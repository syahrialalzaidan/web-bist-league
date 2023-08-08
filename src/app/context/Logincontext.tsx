"use client"
import { createContext, useContext, useState, ReactNode } from "react";

const LoginContext = createContext<any>({});

interface LoginContextProviderProps {
  children: ReactNode;
}

export const LoginContextProvider = ({ children }: LoginContextProviderProps) => {
  const [loginData, setLoginData] = useState({});

  return (
    <LoginContext.Provider value={[loginData, setLoginData]}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => {
  return useContext(LoginContext);
};