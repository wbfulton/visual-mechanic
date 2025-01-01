import { createContext } from "react";

interface SelectionState {
  partGroupNumber: number;
}

export const SelectionContext = createContext<SelectionState | undefined>(
  undefined,
);
