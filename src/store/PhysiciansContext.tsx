import React, { useState } from "react";

import { IPhysician } from "../interfaces/Physician";

type IPhysiciansContext = {
  physicians: Array<IPhysician>;
  // updateEquipment: (
  //   serialNumber: string,
  //   newTelematicData: ITelematicData
  // ) => void;
  setPhysicians: (equipments: Array<IPhysician>) => void;
};

const PhysiciansContext = React.createContext<IPhysiciansContext>({
  physicians: [],
  // updateEquipment: () => {},
  setPhysicians: () => {},
});

interface IPhysiciansContextProviderProps {
  children: React.ReactNode;
}

export const PhysiciansContextProvider: React.FunctionComponent<
  IPhysiciansContextProviderProps
> = ({ children }) => {
  const [physicians, setPhysicians] = useState<Array<IPhysician>>([]);

  // function updateEquipment(
  //   serialNumber: string,
  //   newTelematicData: ITelematicData
  // ) {
  //   setPhysicians((prev) => [
  //     ...prev.map((item) =>
  //       item.SerialNumber === serialNumber
  //         ? {
  //             ...item,
  //             telematicData: newTelematicData,
  //           }
  //         : item
  //     ),
  //   ]);
  // }

  const physiciansValue: IPhysiciansContext = {
    physicians,
    // updateEquipment,
    setPhysicians,
  };
  return (
    <PhysiciansContext.Provider value={physiciansValue}>
      {children}
    </PhysiciansContext.Provider>
  );
};

export default PhysiciansContext;
