import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      stroke="#85898F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.092 6.98a3.158 3.158 0 0 1-4.236 1.646c-2.684-1.24-5.47 1.546-4.23 4.23a3.158 3.158 0 0 1-1.646 4.236c-2.585 1.077-2.585 4.74 0 5.816a3.158 3.158 0 0 1 1.646 4.236c-1.24 2.684 1.546 5.47 4.23 4.23a3.158 3.158 0 0 1 4.236 1.646c1.077 2.585 4.74 2.585 5.816 0a3.158 3.158 0 0 1 4.236-1.646c2.684 1.24 5.47-1.546 4.23-4.23a3.158 3.158 0 0 1 1.646-4.236c2.585-1.077 2.585-4.74 0-5.816a3.158 3.158 0 0 1-1.646-4.236c1.24-2.684-1.546-5.47-4.23-4.23a3.158 3.158 0 0 1-4.236-1.646c-1.077-2.585-4.74-2.585-5.816 0Z"
    />
    <Path
      stroke="#85898F"
      strokeWidth={2}
      d="M25 20a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    />
  </Svg>
)
export default SvgComponent

