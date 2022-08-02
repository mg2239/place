import { useState } from "react";
import { tw } from "twind";
import { Color, Position } from "../types";
import { getColor } from "../util";

type GridBoxProps = {
  color: Color;
  position: Position;
};

const GridBox = ({ color, position }: GridBoxProps) => {
  return <span className={tw`w-full h-full ${getColor(color)}`} />;
};

const SIZE = 10;

const Grid = () => {
  const [grid, setGrid] = useState<GridBoxProps[]>(
    [...new Array(SIZE ** 2)].map((_, index) => ({
      color: Color.WHITE,
      position: getPosition(index),
    }))
  );

  function getPosition(index: number) {
    const x = index % SIZE;
    const y = Math.floor(index / SIZE);
    return { y, x };
  }

  return (
    <div
      className={tw`grid grid-cols-10 w-grid h-grid m-auto mt-4 border border-slate-200`}
    >
      {grid.map((props) => (
        <GridBox {...props} />
      ))}
    </div>
  );
};

export default Grid;
