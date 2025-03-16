import * as React from "react"
import Svg, { Circle, G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const VoiceCommandSVG = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={252}
    height={252}
    fill="none"
    {...props}
  >
    <Circle
      cx={126}
      cy={126}
      r={124.765}
      stroke="#2C4EC5"
      strokeOpacity={0.15}
      strokeWidth={1.531}
    />
    <G filter="url(#a)">
      <Circle cx={126} cy={126} r={61.235} fill="#1E88E5" />
    </G>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4.593}
      d="M126 136.716c6.766 0 12.247-5.48 12.247-12.247V107.63c0-6.767-5.481-12.247-12.247-12.247-6.767 0-12.247 5.48-12.247 12.247v16.839c0 6.767 5.48 12.247 12.247 12.247Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4.593}
      d="M102.578 118.797v5.205c0 12.92 10.502 23.422 23.422 23.422 12.921 0 23.423-10.502 23.423-23.422v-5.205M121.744 108.937a12.332 12.332 0 0 1 8.511 0M123.551 115.439a9.603 9.603 0 0 1 4.93 0M126 147.43v9.185"
    />
    <Defs></Defs>
  </Svg>
)
export default VoiceCommandSVG
