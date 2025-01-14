"use client";

import { createContext, useState } from "react";

interface SelectionState {
  selectedGroupId?: number;
  selectedPartId?: number;
  setSelectedGroupId: (id?: number) => void;
  setSelectedPartId: (id?: number) => void;
}

const initContext: SelectionState = {
  setSelectedGroupId: () => {},
  setSelectedPartId: () => {},
};

// update
export const SelectionContext = createContext<SelectionState>(initContext);

export const SelectionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedGroupId, setSelectedGroupId] = useState<number | undefined>(
    undefined,
  );
  const [selectedPartId, setSelectedPartId] = useState<number | undefined>(
    undefined,
  );

  return (
    <SelectionContext.Provider
      value={{
        selectedGroupId,
        selectedPartId,
        setSelectedGroupId,
        setSelectedPartId,
      }}>
      {children}
    </SelectionContext.Provider>
  );
};
