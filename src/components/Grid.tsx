import { useState } from "react";
import { tw } from "twind";
import { getBgColor } from "../util";
import { useUser } from "../context/UserContext";
import { GridBox as GridBoxType } from "../types/index";
import useGrid from "../hooks/useGrid";

type GridBoxProps = GridBoxType & {
  position: number;
  onClick: (index: number) => void;
};

const GridBox = ({ color, position, onClick }: GridBoxProps) => {
  const [hover, setHover] = useState(false);
  const { selectedColor } = useUser();

  const shouldPreview = Boolean(hover && selectedColor);

  const handleClick = () => {
    if (selectedColor) {
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
  const { grid, updateGrid } = useGrid();
  const { onPlace, selectedColor } = useUser();

  const onClick = (position: number) => {
    updateGrid(selectedColor!, position);
    onPlace();
  };

  return (
    <div
      className={tw`grid grid-cols-size w-grid h-grid m-auto mt-4 border border-slate-300 ${
        Boolean(selectedColor) && "cursor-none"
      }`}
    >
      {grid.map((box, index) => (
        <GridBox color={box.color} position={index} onClick={onClick} />
      ))}
    </div>
  );
};

export default Grid;
