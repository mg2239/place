import { onValue, ref, runTransaction } from "firebase/database";
import { useEffect, useState } from "react";
import { Color, GridBox } from "../types";
import { SIZE } from "../util";
import db from "../util/firebase";

const useGrid = () => {
  const [grid, setGrid] = useState<GridBox[]>(
    [...new Array(SIZE ** 2)].map(() => ({
      color: Color.WHITE,
    }))
  );

  useEffect(() => {
    onValue(ref(db, "grid"), (snapshot) => {
      const val = snapshot.val();
      if (val) {
        setGrid(val);
      }
    });
  }, []);

  const placeOnGrid = (color: Color, position: number) => {
    setGrid((prev) => {
      prev[position].color = color;
      return [...prev];
    });
    runTransaction(ref(db, `grid/${position}`), (box) => {
      box.color = color;
      return box;
    });
  };

  return { grid, placeOnGrid };
};

export default useGrid;
