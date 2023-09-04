import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgWallet = (props: SvgProps) => (
  <Svg
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <Path
      stroke="#19D083"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22.55 16.938a2.51 2.51 0 0 0-.75 2.037c.113 1.35 1.35 2.337 2.7 2.337h2.375V22.8a4.71 4.71 0 0 1-4.7 4.7H7.825a4.71 4.71 0 0 1-4.7-4.7v-8.413a4.71 4.71 0 0 1 4.7-4.7h14.35a4.71 4.71 0 0 1 4.7 4.7v1.8H24.35c-.7 0-1.338.275-1.8.75Z"
    />
    <Path
      stroke="#19D083"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.125 15.512V9.8a3.56 3.56 0 0 1 2.3-3.338l9.925-3.75a2.375 2.375 0 0 1 3.213 2.225v4.75M8.75 15h8.75m10.699 2.462v2.576c0 .687-.55 1.25-1.25 1.274h-2.45c-1.35 0-2.588-.987-2.7-2.337a2.51 2.51 0 0 1 .75-2.038 2.49 2.49 0 0 1 1.8-.75h2.6c.7.025 1.25.588 1.25 1.275v0Z"
    />
  </Svg>
)
export default SvgWallet
