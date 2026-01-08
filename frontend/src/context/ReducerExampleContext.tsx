import React, { createContext, useContext, useReducer, ReactNode } from "react";

export type Product = {
  id: string;
  name: string;
  price: number;
};

type State = {
  products: Product[];
  loading: boolean;
  filter: string | null;
};

type Action =
  | { type: "SET_PRODUCTS"; payload: Product[] }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_FILTER"; payload: string | null }
  | { type: "RESET" };

const initialState: State = {
  products: [],
  loading: false,
  filter: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_PRODUCTS":
      // TODO : apply filtering or sorting when setting products
      return { ...state, products: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_FILTER":
      // TODO : implement complex filter logic (e.g., by category, price range)
      return { ...state, filter: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const ReducerExampleContext = createContext<
  { state: State; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

export function ReducerExampleProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ReducerExampleContext.Provider value={{ state, dispatch }}>
      {children}
    </ReducerExampleContext.Provider>
  );
}

export function useReducerExample() {
  const ctx = useContext(ReducerExampleContext);
  if (!ctx) {
    throw new Error("useReducerExample must be used within ReducerExampleProvider");
  }
  return ctx;
}