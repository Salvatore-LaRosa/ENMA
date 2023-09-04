import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgDelete = (props: SvgProps) => (
  <Svg
    width={32}
    height={36}
    fill="none"
    {...props}
  >
    <Path
      fill="#85898F"
      d="M5.05 36a2.889 2.889 0 0 1-2.119-.881A2.889 2.889 0 0 1 2.05 33V4.5H0v-3h9.4V0h13.2v1.5H32v3h-2.05V33c0 .8-.3 1.5-.9 2.1-.6.6-1.3.9-2.1.9H5.05Zm21.9-31.5H5.05V33h21.9V4.5Zm-16.6 24.2h3V8.75h-3V28.7Zm8.3 0h3V8.75h-3V28.7Z"
    />
  </Svg>
)
export default SvgDelete
