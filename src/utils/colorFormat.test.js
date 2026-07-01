import {
  COPY_FORMATS,
  formatColorValue,
  formatColorValues,
  formatHexWithoutHash,
  formatRgbColor,
  formatRgbaColor
} from "./colorFormat";

describe("color format utilities", () => {
  it("formats hex values without the hash prefix", () => {
    expect(formatHexWithoutHash("#55efc4")).toBe("55efc4");
    expect(formatColorValue("#55efc4", COPY_FORMATS.HEX)).toBe("55efc4");
  });

  it("formats hex values as rgb strings", () => {
    expect(formatRgbColor("#55efc4")).toBe("rgb(85, 239, 196)");
    expect(formatColorValue("#2d3436", COPY_FORMATS.RGB)).toBe(
      "rgb(45, 52, 54)"
    );
  });

  it("formats valid palette values with leading zero channels", () => {
    expect(formatRgbColor("#00b894")).toBe("rgb(0, 184, 148)");
    expect(formatRgbColor("#0984e3")).toBe("rgb(9, 132, 227)");
    expect(formatRgbaColor("#00cec9")).toBe("rgb(0, 206, 201, 1.0)");
  });

  it("formats hex values as the existing rgba copy string", () => {
    expect(formatRgbaColor("#55efc4")).toBe("rgb(85, 239, 196, 1.0)");
    expect(formatColorValue("#2d3436", COPY_FORMATS.RGBA)).toBe(
      "rgb(45, 52, 54, 1.0)"
    );
  });

  it("returns the original color when the hash-prefixed hex format is selected", () => {
    expect(formatColorValue("#55efc4", COPY_FORMATS.HEX_HASH)).toBe("#55efc4");
    expect(formatColorValue("#55efc4", "unknown")).toBe("#55efc4");
  });

  it("formats a full color list without mutating the original palette", () => {
    const colors = ["#55efc4", "#2d3436"];

    expect(formatColorValues(colors, COPY_FORMATS.HEX)).toEqual([
      "55efc4",
      "2d3436"
    ]);
    expect(colors).toEqual(["#55efc4", "#2d3436"]);
  });
});
