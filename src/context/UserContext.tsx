import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Color } from "../types";

type UserContextType = {
  selectedColor?: Color;
  onSelect: (color: Color) => void;
  onPlace: () => void;
};

const initialState: UserContextType = {
  onSelect: () => {},
  onPlace: () => {},
};

const UserContext = createContext(initialState);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [selectedColor, setSelectedColor] = useState(
    initialState.selectedColor
  );

  const onSelect = (color: Color) => {
    setSelectedColor((prev) => {
      if (prev === color) {
        return undefined;
      }
      return color;
    });
  };

  const onPlace = () => {
    setSelectedColor(undefined);
  };

  return (
    <UserContext.Provider
      value={{
        selectedColor,
        onSelect,
        onPlace,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
