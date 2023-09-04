import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgUserSmall = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#85898F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.158 18.333c0-3.225-3.208-5.833-7.158-5.833s-7.158 2.608-7.158 5.833M10 10a4.167 4.167 0 1 0 0-8.333A4.167 4.167 0 0 0 10 10v0Z"
    />
  </Svg>
)
export default SvgUserSmall
