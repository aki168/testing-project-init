import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from "react";

type AppContextType = {
  isLogin: boolean;
  setLogin: Dispatch<SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isLogin, setLogin] = useState(false);
  return (
    <AppContext.Provider
      value={{
        isLogin,
        setLogin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
