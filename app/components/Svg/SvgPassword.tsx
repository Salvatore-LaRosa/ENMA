import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgPassword = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#85898F"
      strokeWidth={2}
      d="M13 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
    />
    <Path
      stroke="#85898F"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 9c1.886 0 2.828 0 3.414.586C19 10.172 19 11.114 19 13v4c0 1.886 0 2.828-.586 3.414C17.828 21 16.886 21 15 21H9c-1.886 0-2.828 0-3.414-.586C5 19.828 5 18.886 5 17v-4c0-1.886 0-2.828.586-3.414C6.172 9 7.114 9 9 9h6Z"
    />
    <Path
      stroke="#85898F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 9V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"
    />
  </Svg>
)
export default SvgPassword
