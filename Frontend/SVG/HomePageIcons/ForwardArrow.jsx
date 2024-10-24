import * as React from "react"
import Svg, { G,Path, Rect, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const ForwardArrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={55}
    height={55}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Rect width={25} height={25} fill="#3266B1" rx={12.5} />
    </G>
    <Path
      fill="#000"
      d="M6.5 6.226 8.285 5l9.72 6.681c.157.107.282.235.367.375.084.14.128.29.128.442a.852.852 0 0 1-.128.443c-.085.14-.21.267-.366.374L8.285 20l-1.783-1.226 9.123-6.274L6.5 6.226Z"
    />
    <Defs></Defs>
  </Svg>
)
export default ForwardArrow;