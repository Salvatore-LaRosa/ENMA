import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgSearch = (props: SvgProps) => (
  <Svg
    width={35}
    height={35}
    fill="none"
    {...props}
  >
    <Path
      stroke="#85898F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m21.875 21.875 8.75 8.75"
    />
    <Path
      stroke="#85898F"
      strokeWidth={2}
      d="M24.792 14.583c0 5.638-4.57 10.209-10.209 10.209-5.638 0-10.208-4.57-10.208-10.209 0-5.638 4.57-10.208 10.208-10.208s10.209 4.57 10.209 10.208Z"
    />
  </Svg>
)
export default SvgSearch
