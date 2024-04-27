import { Color } from "../types";
import { getBgColor } from "../util";
import { useUser } from "../context/UserContext";

const ColorSelector = () => {
  const colors = Object.values(Color);
  const { selectedColor, onSelect } = useUser();

  const isSelected = (color: Color) => selectedColor === color;

  return (
    <div className="w-grid m-auto bg-slate-300">
      <div className="grid grid-cols-10 p-5">
        {colors.map((color) => (
          <div key={color} className="block w-11 h-11 text-center">
            <span
              className={`block w-full h-full ${getBgColor(
                color
              )} cursor-pointer hover:scale-110 transition-transform`}
              onClick={() => onSelect(color)}
            />
            {isSelected(color) && <p className="leading-4 text-2xl">•</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
