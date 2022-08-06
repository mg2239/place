import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { Color, GridBox } from "../types";

type UserContextType = {
  selectedColor?: Color;
  onSelect: (color: Color) => void;
  timeRemaining: number;
  canPlace: boolean;
  onPlace: (grid: GridBox[]) => void;
};

const initialState: UserContextType = {
  onSelect: () => {},
  timeRemaining: 0,
  canPlace: false,
  onPlace: () => {},
};

const UserContext = createContext(initialState);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [selectedColor, setSelectedColor] = useState(
    initialState.selectedColor
  );
  const [timeRemaining, setTimeRemaining] = useState(
    initialState.timeRemaining
  );
  const [canPlace, setCanPlace] = useState(initialState.canPlace);

  const onSelect = (color: Color) => {
    setSelectedColor((prev) => {
      if (prev === color) {
        return undefined;
      }
      return color;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev > 0) {
          return prev - 1;
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCanPlace(Boolean(selectedColor && timeRemaining === 0));
  }, [timeRemaining, selectedColor]);

  const onPlace = (grid: GridBox[]) => {
    setTimeRemaining(10);
    setSelectedColor(undefined);
  };

  return (
    <UserContext.Provider
      value={{
        selectedColor,
        onSelect,
        timeRemaining,
        canPlace,
        onPlace,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
