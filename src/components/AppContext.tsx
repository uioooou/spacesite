import React, { createContext, ReactNode, useState } from "react";

interface AppContextProps {
  modalState: string;
  setModalState: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [modalState, setModalState] = useState<string>("");

  const contextValue: AppContextProps = {
    modalState,
    setModalState,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
