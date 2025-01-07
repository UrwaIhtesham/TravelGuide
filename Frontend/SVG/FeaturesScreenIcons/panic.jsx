import * as React from "react"
import Svg, { Path } from "react-native-svg"
const PanicSVG = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={176}
    height={176}
    fill="none"
    {...props}
  >
    <Path
      fill="#D13737"
      d="M38 49.503 20.25 31.836 32 20.086l17.667 17.75L38 49.503ZM96.333.336v25H79.667v-25h16.666Zm59.417 31.5L138 49.503l-11.667-11.667L144 20.086l11.75 11.75ZM25.5 79.503v16.666H.5V79.503h25Zm125 0h25v16.666h-25V79.503ZM38 158.669h100a16.666 16.666 0 0 1 16.667 16.667H21.333A16.666 16.666 0 0 1 38 158.669Zm50-125a49.998 49.998 0 0 1 50 50v66.667H38V83.669a50 50 0 0 1 50-50Zm0 16.667a33.333 33.333 0 0 0-33.333 33.333v50h66.666v-50A33.334 33.334 0 0 0 88 50.336Z"
    />
  </Svg>
)
export default PanicSVG
