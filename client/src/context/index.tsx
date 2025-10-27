import { createContext, useContext, useState, type ReactNode } from 'react';

type GlobalContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

const defaultContextValues: GlobalContextType = {
  theme: '',
  setTheme: () => {},
};

const Context = createContext<GlobalContextType>(defaultContextValues);

const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeColor] = useState<string>('');
  const setTheme = (message: string) => setThemeColor(message);

  return <Context.Provider value={{ theme, setTheme }}>{children}</Context.Provider>;
};

export const useGlobalContext = () => useContext(Context);
export default GlobalContextProvider;
