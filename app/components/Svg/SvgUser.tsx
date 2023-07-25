import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgUser = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#85898F"
      strokeWidth={2}
      d="M17 8A5 5 0 1 1 7 8a5 5 0 0 1 10 0Z"
    />
    <Path
      stroke="#85898F"
      strokeLinecap="round"
      strokeWidth={2}
      d="M3 21c.957-3.076 3.42-4 9-4s8.043.924 9 4"
    />
  </Svg>
)
export default SvgUser
