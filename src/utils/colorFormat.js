export const COPY_FORMATS = {
  HEX_HASH: "hex-hash",
  HEX: "hex",
  RGB: "rgb",
  RGBA: "rgba"
};

export const formatHexWithoutHash = color => color.slice(1);

const getRgbParts = color => {
  const hex = formatHexWithoutHash(color);
  const bigint = parseInt(hex, 16);

  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255
  };
};

export const formatRgbColor = color => {
  const { r, g, b } = getRgbParts(color);

  return `rgb(${r}, ${g}, ${b})`;
};

export const formatRgbaColor = color => {
  const { r, g, b } = getRgbParts(color);

  return `rgb(${r}, ${g}, ${b}, 1.0)`;
};

export const formatColorValue = (color, format) => {
  switch (format) {
    case COPY_FORMATS.HEX:
      return formatHexWithoutHash(color);
    case COPY_FORMATS.RGB:
      return formatRgbColor(color);
    case COPY_FORMATS.RGBA:
      return formatRgbaColor(color);
    default:
      return color;
  }
};

export const formatColorValues = (colors, format) =>
  colors.map(color => formatColorValue(color, format));
