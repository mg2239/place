import { useState, useEffect } from "react";
import { tw } from "twind";
import { Color, Position } from "../types";
import { getBgColor } from "../util";
import { useUser } from "../context/UserContext";

type GridBoxProps = {
  color: Color;
  position: Position;
  onClick: (position: Position) => void;
};

const GridBox = ({ color, position, onClick }: GridBoxProps) => {
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState(color);
  const { selectedColor, canPlace } = useUser();

  const shouldPreview = Boolean(hover && canPlace);

  const handleHover = () => {};

  const handleClick = () => {
    if (selectedColor && canPlace) {
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
        getBgColor(selected),
        shouldPreview && `hover:${getBgColor(selectedColor!)}`
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    />
  );
};

const SIZE = 20;

const Grid = () => {
  const [grid, setGrid] = useState<GridBoxProps[]>(
    [...new Array(SIZE ** 2)].map((_, index) => ({
      color: Color.WHITE,
      position: getPosition(index),
      onClick: onClick,
    }))
  );
  const { canPlace, onPlace } = useUser();

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
      className={tw`grid grid-cols-size w-grid h-grid m-auto mt-4 border border-slate-300 ${
        canPlace && "cursor-none"
      }`}
    >
      {grid.map((props) => (
        <GridBox {...props} />
      ))}
    </div>
  );
};

export default Grid;
