import { onValue, ref } from "firebase/database";
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
    onValue(ref(db, "grid"), (snapshot) => setGrid(snapshot.val()));
  }, []);

  const updateGrid = (color: Color, position: number) => {
    setGrid((prev) => {
      prev[position].color = color;
      return [...prev];
    });
  };

  return { grid, updateGrid };
};

export default useGrid;
