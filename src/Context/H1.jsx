import { createContext } from "react";

export const Context = createContext();

export const Providers = ({ children }) => {
  const degree = "bcs";
  const highest_qualification = "msc";
  const clgName = "vcacs";
  return (
    <Context.Provider value={{ degree, highest_qualification, clgName }}>
      {children}
    </Context.Provider>
  );
};
