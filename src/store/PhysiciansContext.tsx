import React, { useState } from "react";

import { IAPIResponse } from "../interfaces/APIResponse";

type IPhysiciansContext = {
  physicians: IAPIResponse | null;
  setPhysicians: (response: IAPIResponse) => void;
};

const PhysiciansContext = React.createContext<IPhysiciansContext>({
  physicians: null,
  setPhysicians: () => {},
});

interface IPhysiciansContextProviderProps {
  children: React.ReactNode;
}

export const PhysiciansContextProvider: React.FunctionComponent<
  IPhysiciansContextProviderProps
> = ({ children }) => {
  const [physicians, setPhysicians] = useState<IAPIResponse>({
    data: {
      count: 0,
      doctorsLists: [],
    },
    message: "",
    status: "",
  });

  const physiciansValue: IPhysiciansContext = {
    physicians,
    setPhysicians,
  };
  return (
    <PhysiciansContext.Provider value={physiciansValue}>
      {children}
    </PhysiciansContext.Provider>
  );
};

export default PhysiciansContext;
