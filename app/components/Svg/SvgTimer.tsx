import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgTimer = (props: SvgProps) => (
  <Svg
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      stroke="#85898F"
      strokeWidth={2}
      d="M21.875 12.5a9.375 9.375 0 1 1-18.75 0 9.375 9.375 0 1 1 18.75 0Z"
    />
    <Path
      stroke="#85898F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.5 7.292V12.5m9.375-8.333-1.042-1.042"
    />
  </Svg>
)
export default SvgTimer
