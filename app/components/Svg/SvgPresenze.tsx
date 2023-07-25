import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgPresenze = (props: SvgProps) => (
  <Svg
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      stroke="#85898F"
      strokeWidth={2}
      d="M35 20c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15Z"
    />
    <Path
      stroke="#85898F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 11.667V20M35 6.667 33.333 5"
    />
  </Svg>
)
export default SvgPresenze
