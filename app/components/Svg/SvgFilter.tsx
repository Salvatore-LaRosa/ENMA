import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgFilter = (props: SvgProps) => (
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
      d="M27.708 4.375H7.292a2.917 2.917 0 0 0-2.917 2.917V9c0 .774.307 1.516.854 2.063l8.5 8.5c.547.546.854 1.288.854 2.062v7.958c0 .923 1.116 1.385 1.768.733l1.149-1.15 2.062-2.062a2.917 2.917 0 0 0 .855-2.062v-3.417c0-.774.307-1.516.854-2.063l8.5-8.5A2.917 2.917 0 0 0 30.625 9V7.292a2.917 2.917 0 0 0-2.917-2.917Z"
    />
  </Svg>
)
export default SvgFilter
