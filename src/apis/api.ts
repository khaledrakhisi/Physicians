/**
 * Pseudo APIs
 */

import { MOCK_PHYSICIANS } from "./data";

const FAKE_API_DELAY: number = 2e3;

export const fake_fetch = async <T>(
  url: string,
  method: string
): Promise<T> => {
  return new Promise((resolve) => {
    if (url.startsWith(`${process.env.REACT_APP_BACKEND_URL}/physicians/:`)) {
      const param = url.substring(url.indexOf("/:") + 2);
      // console.log(param);

      setTimeout(() => {
        resolve(
          MOCK_PHYSICIANS.find(
            (datum) => datum.id.toLowerCase() === param.toLowerCase()
          ) as any
        );
      }, FAKE_API_DELAY);
    } else if (url === `${process.env.REACT_APP_BACKEND_URL}/physicians/`) {
      setTimeout(() => {
        resolve(MOCK_PHYSICIANS as any);
      }, FAKE_API_DELAY);
    }
  });
};
