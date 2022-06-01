import { useReducer } from "react";

import { fake_fetch } from "../apis/api";

interface State<T> {
  data?: T;
  error?: Error;
  status?: string;
  sendRequest: (url: string, method: string) => void;
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
    status: "",
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

  const fetchData = async (url: string, method = "GET") => {
    dispatch({ type: "loading" });

    try {
      // const response = await fetch(url, options);
      const response = await fake_fetch(url, method);

      // const data = (await response.json()) as T;
      const data = response;

      dispatch({ type: "fetched", payload: data as any });
    } catch (error) {
      dispatch({ type: "error", payload: error as Error });
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);
  return { ...state, sendRequest: fetchData };
}

export default useFetch;
