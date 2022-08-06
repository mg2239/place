export enum Color {
  RED = "red",
  ORANGE = "orange",
  YELLOW = "yellow",
  GREEN = "green",
  BLUE = "blue",
  PURPLE = "purple",
  PINK = "pink",
  BROWN = "brown",
  BLACK = "black",
  WHITE = "white",
}

export type Position = {
  y: number;
  x: number;
};

export type GridBox = {
  color: Color;
};
