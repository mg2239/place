import { useState } from "react";
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

  const shouldPreview = !!hover && !!selectedColor;

  const handleClick = () => {
    if (selectedColor) {
      setHover(false);
      onClick(position);
    }
  };

  return (
    <span
      className={`w-full h-full ${getBgColor(color)} ${
        shouldPreview ? `hover:${getBgColor(selectedColor)}` : ""
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    />
  );
};

const Grid = () => {
  const { grid, placeOnGrid } = useGrid();
  const { onPlace, selectedColor } = useUser();

  const onClick = (position: number) => {
    placeOnGrid(selectedColor!, position);
    onPlace();
  };

  return (
    <div className="grid grid-cols-size w-grid h-grid m-auto mt-4 border border-slate-300">
      {grid.map((box, index) => (
        <GridBox
          key={index}
          color={box.color}
          position={index}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default Grid;
