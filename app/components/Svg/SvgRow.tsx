import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgRow = (props: SvgProps) => (
  <Svg
    width={18}
    height={10}
    fill="none"
    {...props}
  >
    <Path
      stroke="#85898F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1.5 1.25 7.234 7.234a.376.376 0 0 0 .532 0L16.5 1.25"
    />
  </Svg>
)
export default SvgRow
