import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Color } from "../types";

type UserContextType = {
  selectedColor?: Color;
  onSelect: (color: Color) => void;
  timeRemaining: number;
  canPlace: boolean;
  onPlace: () => void;
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

  const onSelect = (color: Color) => {
    setSelectedColor((prev) => {
      if (prev === color) {
        return undefined;
      }
      return color;
    });
  };

  const canPlace = useMemo(
    () => Boolean(selectedColor && timeRemaining === 0),
    [selectedColor, timeRemaining]
  );

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
  }, [timeRemaining]);

  const onPlace = () => {
    setTimeRemaining(10);
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
