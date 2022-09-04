/**
 * Pseudo APIs
 */

import { IAPIResponse } from "../interfaces/APIResponse";

import { MOCK_API_RESPONSE } from "./data";

const FAKE_API_DELAY: number = 2e3;

let n_req = 0;

export const fake_fetch = async <T>(
  url: string,
  method: string
): Promise<T> => {
  return new Promise((resolve, reject) => {
    if (url.startsWith(`${process.env.REACT_APP_BACKEND_URL}/physicians/:`)) {
      const param = url.substring(url.indexOf("/:") + 2);

      // setTimeout(() => {
      //   resolve(
      //     MOCK_API_RESPONSE.find((datum) => datum.doctorName === param) as any
      //   );
      // }, FAKE_API_DELAY);
    } else if (url === `${process.env.REACT_APP_BACKEND_URL}/physicians/`) {
      setTimeout(() => {
        n_req++;
        if (n_req === 2 || n_req === 5) {
          reject("Error on fetching the data, backend must be down");
        } else {
          resolve(JSON.stringify(MOCK_API_RESPONSE) as any);
        }
      }, FAKE_API_DELAY);
    } else {
      reject("Error on fetching the data, backend must be down");
    }
  });
};
