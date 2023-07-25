import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgLogout = (props: SvgProps) => (
  <Svg
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      fill="#F04E30"
      d="M2.083 25c-.555 0-1.041-.208-1.458-.625C.208 23.958 0 23.472 0 22.917V2.083C0 1.528.208 1.042.625.625 1.042.208 1.528 0 2.083 0h10.104v2.083H2.084v20.834h10.104V25H2.084Zm16.875-6.424-1.493-1.493 3.542-3.541H8.854v-2.084h12.084l-3.542-3.541 1.493-1.493L25 12.534l-6.042 6.042Z"
    />
  </Svg>
)
export default SvgLogout
