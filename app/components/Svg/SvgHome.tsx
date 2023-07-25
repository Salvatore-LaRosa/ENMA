import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const SvgHome = (props: SvgProps) => (
  <Svg
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <G stroke="#85898F" strokeLinejoin="round" strokeWidth={2}>
      <Path d="M31.667 15v13.333c0 3.143 0 4.714-.977 5.69C29.714 35 28.143 35 25 35H15c-3.143 0-4.714 0-5.69-.976-.977-.977-.977-2.548-.977-5.69V15" />
      <Path
        strokeLinecap="round"
        d="m5 18.333 7.5-6.666 5.285-4.699a3.333 3.333 0 0 1 4.43 0l5.285 4.699 7.5 6.666M16.667 35v-6.667a3.333 3.333 0 1 1 6.666 0V35"
      />
    </G>
  </Svg>
)
export default SvgHome

