import * as React from "react"
import Svg, { G, Path, Defs, Pattern, Use, Image } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Shield = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={70}
    height={71}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path fill="url(#b)" d="M0 .5h50v50H0z" shapeRendering="crispEdges" />
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
export default Shield;