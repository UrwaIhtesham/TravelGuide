import * as React from "react";
import {View, StyleSheet} from 'react-native';
import Svg, { G, Path, Defs, Pattern, Use, Image } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Alert = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={70}
    height={70}
    fill="none"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h50v50H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="scale(.01)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={80}
        height={80}
      />
    </Defs>
  </Svg>
);

export default Alert;