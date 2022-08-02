import { Color } from "../types";
import { tw } from "twind";
import { getColor as getBgColor } from "../util";
import { useUser } from "../context/UserContext";

const ColorSelector = () => {
  const colors = Object.values(Color);
  const { selectedColor, onSelect } = useUser();

  const isSelected = (color: Color) => selectedColor === color;

  return (
    <div className={tw`grid grid-cols-10 w-fit m-auto p-5 bg-slate-300`}>
      {colors.map((color) => (
        <div className={tw`block w-11 h-11 text-center`}>
          <span
            className={tw`block w-full h-full ${getBgColor(
              color
            )} cursor-pointer hover:scale-110 transition-transform`}
            onClick={() => onSelect(color)}
          />
          {isSelected(color) && <p className={tw`leading-4 text-2xl`}>•</p>}
        </div>
      ))}
    </div>
  );
};

export default ColorSelector;
