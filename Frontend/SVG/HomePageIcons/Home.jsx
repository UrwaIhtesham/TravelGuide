import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const Home = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Rect width={40} height={40} fill="#E3F2FD" rx={20} />
    <Path
      fill="#000"
      d="M10 31.25v-15l10-7.5 10 7.5v15h-7.5V22.5h-5v8.75H10Z"
    />
  </Svg>
)
export default Home;