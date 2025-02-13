// 色の型を定義
export type ColorType = "primary" | "secondary" | "accent" | "highlight";

// 色のペアを定義する型
interface ColorPair {
  background: string;
  text: string;
}

// 色のペアを定義
const colors: Record<ColorType, ColorPair> = {
  primary: {
    background: "#f0fafc",
    text: "#2e4b73",
  },
  secondary: {
    background: "#72dafd",
    text: "#2a4b65",
  },
  accent: {
    background: "#2e4b73",
    text: "#f8f9fb",
  },
  highlight: {
    background: "#fae741",
    text: "#4c2816",
  },
};

// 色のペアを取得する関数をエクスポート
export const getColor = (color: ColorType): ColorPair => {
  return colors[color];
};
