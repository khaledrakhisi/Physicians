/**
 * Pseudo APIs
 */

import { IPhysician } from "../interfaces/Physician";

import { MOCK_PHYSICIANS } from "./data";

interface IApiState<T> {
  data?: T;
  error?: Error;
  status: string;
}

const FAKE_API_DELAY: number = 1e3;

export const fetchAllUsers = async (): Promise<
  IApiState<Array<IPhysician>>
> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "success",
        data: MOCK_PHYSICIANS,
      });
    }, FAKE_API_DELAY);
  });
};

// export const fetchAllHobbies = async (): Promise<IApiState<Array<IHobby>>> => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         status: "success",
//         data: MOCK_HOBBIES,
//       });
//     }, FAKE_API_DELAY);
//   });
// };
