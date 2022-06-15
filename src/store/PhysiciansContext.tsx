import React, { useState } from "react";

import { IPhysician } from "../interfaces/Physician";

type IPhysiciansContext = {
  physicians: Array<IPhysician>;
  setPhysicians: (equipments: Array<IPhysician>) => void;
};

const PhysiciansContext = React.createContext<IPhysiciansContext>({
  physicians: [],
  setPhysicians: () => {},
});

interface IPhysiciansContextProviderProps {
  children: React.ReactNode;
}

export const PhysiciansContextProvider: React.FunctionComponent<
  IPhysiciansContextProviderProps
> = ({ children }) => {
  const [physicians, setPhysicians] = useState<Array<IPhysician>>([]);

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
