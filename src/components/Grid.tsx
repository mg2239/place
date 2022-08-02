import { useState, useEffect } from "react";
import { tw } from "twind";
import { Color, Position } from "../types";
import { getColor } from "../util";
import { useUser } from "../context/UserContext";

type GridBoxProps = {
  color: Color;
  position: Position;
  onClick: (position: Position) => void;
};

const GridBox = ({ color, position, onClick }: GridBoxProps) => {
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState(color);
  const { selectedColor } = useUser();

  const shouldPreview = Boolean(hover && selectedColor);

  const handleHover = () => {};

  const handleClick = () => {
    if (selectedColor) {
      setSelected(selectedColor);
      setHover(false);
      onClick(position);
    }
  };

  return (
    <span
      className={tw(
        "w-full",
        "h-full",
        getColor(selected),
        "cursor-pointer",
        shouldPreview && [
          `hover:${getColor(selectedColor!)}`,
          "hover:opacity-50",
        ]
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    />
  );
};

const SIZE = 10;

const Grid = () => {
  const [grid, setGrid] = useState<GridBoxProps[]>(
    [...new Array(SIZE ** 2)].map((_, index) => ({
      color: Color.WHITE,
      position: getPosition(index),
      onClick: onClick,
    }))
  );
  const { onPlace } = useUser();

  function getPosition(index: number) {
    const x = index % SIZE;
    const y = Math.floor(index / SIZE);
    return { y, x };
  }

  function onClick(position: Position) {
    onPlace();
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
