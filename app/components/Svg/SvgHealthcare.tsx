import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const SvgHealthcare
 = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <G
      stroke="#85898F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <Path d="M1.667 18.333h16.666M14.167 1.667H5.833C3.333 1.667 2.5 3.158 2.5 5v13.333h15V5c0-1.842-.833-3.333-3.333-3.333Z" />
      <Path d="M10 5v4.167M7.917 7.083h4.166m-.366 5.417H8.275a.788.788 0 0 0-.783.783v5.05h5v-5.05a.772.772 0 0 0-.775-.783v0Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgHealthcare
