import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgPlus = (props: SvgProps) => (
  <Svg
    width={45}
    height={45}
    fill="none"
    {...props}
  >
    <Path
      stroke="#F9FBFC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M9.375 22.5h26.25M22.5 9.375v26.25"
    />
  </Svg>
)
export default SvgPlus
