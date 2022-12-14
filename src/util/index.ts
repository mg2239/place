import { Color, Position } from "../types";

export const getBgColor = (color: Color) => {
  const map = {
    red: "bg-red-500",
    orange: "bg-orange-400",
    yellow: "bg-yellow-400",
    green: "bg-green-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    pink: "bg-pink-500",
    brown: "bg-yellow-900",
    black: "bg-black",
    white: "bg-white",
  };
  return map[color];
};

export const SIZE = 20;
