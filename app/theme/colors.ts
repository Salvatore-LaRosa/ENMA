// TODO: write documentation for colors and palette in own markdown file and add links from here
const palette = {
  neutral50: "#F9FBFC",
  neutral100: "#E7EAF0",
  neutral500: "#85898F",
  neutral700: "#414349",
  neutral900: "#181820",

  primary400: "#3667C6",

  gradient1a: "#276DF6",
  gradient1b: "#1D7CEC",

  gradient2a: "#7C85D7",
  gradient2b: "#6656E9",

  success500: "#19D083",
  failure500: "#F04E30",

} as const

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * Error messages.
   */
  error: palette.failure500,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.failure500,
  dark : {
    loginForm: palette.neutral900,
    palette: palette.neutral900,
    form: palette.neutral700,
    background: palette.neutral900,
    secondaryText: palette.neutral500,
    mainText: palette.neutral50,
    border: palette.neutral700,
    buttonGradientStart: palette.gradient2a,
    buttonGradientEnd: palette.gradient2b,
  },

  light: {
    loginForm: palette.neutral50,
    form: palette.neutral50,
    background: palette.neutral100,
    secondaryText: palette.neutral500,
    mainText: palette.neutral900,
    border: palette.neutral500,
    buttonGradientStart: palette.gradient1a,
    buttonGradientEnd: palette.gradient1b,
  }
}
