import React, { useState } from "react";

type TUIContext = {
  isMessageboxVisible: boolean;
  setMessageboxVisiblity: (visible: boolean) => void;
};

const UIContext = React.createContext<TUIContext>({
  isMessageboxVisible: false,
  setMessageboxVisiblity: (visible: boolean) => {},
});

interface IUIContextProviderProps {
  children: React.ReactNode;
}

export const UIContextProvider: React.FunctionComponent<
  IUIContextProviderProps
> = ({ children }) => {
  const [isMessageboxVisible, setMessageboxVisiblity] = useState(false);

  const contextValue: TUIContext = {
    isMessageboxVisible,
    setMessageboxVisiblity,
  };
  return (
    <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>
  );
};

export default UIContext;
