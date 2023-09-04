import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgCreditCard = (props: SvgProps) => (
  <Svg
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <Path
      stroke="#85898F"
      strokeLinecap="round"
      strokeWidth={2}
      d="M4.375 12.5h21.25M7.5 17.5H10m3.75 0h2.5"
    />
    <Path
      stroke="#85898F"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.75 11.25c0-2.357 0-3.536.732-4.268.732-.732 1.911-.732 4.268-.732h12.5c2.357 0 3.535 0 4.268.732.732.732.732 1.911.732 4.268v7.5c0 2.357 0 3.535-.732 4.268-.733.732-1.911.732-4.268.732H8.75c-2.357 0-3.536 0-4.268-.732-.732-.733-.732-1.911-.732-4.268v-7.5Z"
    />
  </Svg>
)
export default SvgCreditCard
