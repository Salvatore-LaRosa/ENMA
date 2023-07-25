import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgBack = (props: SvgProps) => (
  <Svg
    width={11}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      stroke="#85898F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.172 1.172 1.938 8.406a.376.376 0 0 0 0 .532l7.234 7.234"
    />
  </Svg>
)
export default SvgBack
