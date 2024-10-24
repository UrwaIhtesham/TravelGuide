import * as React from "react"
import Svg, { G, Path, Defs, Pattern, Use, Image } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Voice = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={70}
    height={70}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path fill="url(#b)" d="M0 0h50v50H0z" shapeRendering="crispEdges" />
    </G>
    <Defs>
      <Pattern
        id="b"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#c" transform="scale(.01)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,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"
        id="c"
        width={100}
        height={100}
      />
    </Defs>
  </Svg>
)
export default Voice;