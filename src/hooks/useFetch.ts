import { useCallback, useReducer } from "react";

import { fake_fetch } from "../apis/api";

interface State<T> {
  data?: T;
  error?: Error;
  status: "loading" | "fetched" | "error" | "idle";
  // eslint-disable-next-line no-undef
  sendRequest: (url: string, options?: RequestInit) => void;
}

// discriminated union type
type Action<T> =
  | { type: "loading" }
  | { type: "fetched"; payload: T }
  | { type: "error"; payload: Error };

function useFetch<T = unknown>(): State<T> {
  const initialState: State<T> = {
    error: undefined,
    data: undefined,
    status: "idle",
    sendRequest: () => {},
  };

  // Keep state logic separated
  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case "loading":
        return { ...initialState, status: action.type };
      case "fetched":
        return { ...initialState, data: action.payload, status: action.type };
      case "error":
        return { ...initialState, error: action.payload, status: action.type };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  // eslint-disable-next-line no-undef
  const fetchData = useCallback(async (url: string, options?: RequestInit) => {
    dispatch({ type: "loading" });

    try {
      // const response = await fetch(url, {
      //   ...options,
      // });
      const response = await fake_fetch(url, "GET");
      // if (!response.ok) {
      //   throw new Error(response.statusText);
      // }
      // if (response.ok && response.status !== 200) {
      //   throw new Error("302 error happend. Maybe you forgot .json");
      // }

      // const data = (await response.json()) as T;
      const data = (await response) as T;

      dispatch({ type: "fetched", payload: data });
    } catch (error) {
      dispatch({ type: "error", payload: error as Error });
    }
  }, []);

  return { ...state, sendRequest: fetchData };
}

export default useFetch;
