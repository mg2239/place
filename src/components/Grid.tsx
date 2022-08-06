import { useState, useEffect } from "react";
import { tw } from "twind";
import { Color } from "../types";
import { getBgColor, SIZE } from "../util";
import { useUser } from "../context/UserContext";
import { GridBox as GridBoxType } from "../types/index";

type GridBoxProps = GridBoxType & {
  position: number;
  onClick: (index: number) => void;
};

const GridBox = ({ color, position, onClick }: GridBoxProps) => {
  const [hover, setHover] = useState(false);
  const { selectedColor, canPlace } = useUser();

  const shouldPreview = Boolean(hover && canPlace);

  const handleClick = () => {
    if (selectedColor && canPlace) {
      setHover(false);
      onClick(position);
    }
  };

  return (
    <span
      className={tw(
        "w-full",
        "h-full",
        getBgColor(color),
        shouldPreview && `hover:${getBgColor(selectedColor!)}`
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    />
  );
};

const Grid = () => {
  const [grid, setGrid] = useState<GridBoxType[]>(
    [...new Array(SIZE ** 2)].map(() => ({
      color: Color.WHITE,
    }))
  );
  const { canPlace, onPlace, selectedColor } = useUser();

  const onClick = (position: number) => {
    setGrid((prev) => {
      if (selectedColor) {
        prev[position].color = selectedColor;
        onPlace(prev);
        return [...prev];
      }
      return prev;
    });
  };

  return (
    <div
      className={tw`grid grid-cols-size w-grid h-grid m-auto mt-4 border border-slate-300 ${
        canPlace && "cursor-none"
      }`}
    >
      {grid.map((box, index) => (
        <GridBox color={box.color} position={index} onClick={onClick} />
      ))}
    </div>
  );
};

export default Grid;
