import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgRow = (props: SvgProps) => (
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
      d="m1.828 16.172 7.234-7.234a.376.376 0 0 0 0-.532L1.828 1.172"
    />
  </Svg>
)
export default SvgRow
