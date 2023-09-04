import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgSun = (props: SvgProps) => (
  <Svg
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      stroke="#85898F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.27 12.5a6.77 6.77 0 1 0-13.54 0"
    />
    <Path
      stroke="#85898F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m5.198 5.198-.136-.136m14.74.136.136-.136-.136.136ZM12.5 2.167v-.084.084ZM2.167 12.5h-.084.084Zm20.75 0h-.084.084Z"
    />
    <Path
      stroke="#85898F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M4.167 15.625h16.666M6.25 18.75h12.5m-9.375 3.125h6.25"
    />
  </Svg>
)
export default SvgSun
