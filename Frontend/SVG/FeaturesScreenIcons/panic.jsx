import * as React from "react"
import Svg, { Path } from "react-native-svg"
const PanicSVG = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Path
      fill="#D13636"
      d="M4 2h3l1 2h2V2h4v2h2l1-2h3c2.152 3.228 2.2 4.284 2 8h-3l-1 6h2v3H4v-3h2l-1-6H2c-.2-3.716-.152-4.772 2-8Z"
    />
    <Path
      fill="#D63030"
      d="M4 2h3c-.523 2.763-1.109 5.326-2 8H2c-.2-3.716-.152-4.772 2-8Z"
    />
    <Path fill="#D03737" d="M10 20h4v2h-4v-2Z" />
  </Svg>
)
export default PanicSVG
