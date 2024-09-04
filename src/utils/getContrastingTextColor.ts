import getRGBColor from "./getRGBColor";

export default function getContrastingTextColor(color: string) {
  const [r, g, b] = getRGBColor(color);

  const luminance =
    (0.2126 * r) / 255 + (0.7152 * g) / 255 + (0.0722 * b) / 255;

  return luminance > 0.5 ? "black" : "white";
}
