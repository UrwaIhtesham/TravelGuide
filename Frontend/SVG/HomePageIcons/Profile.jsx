import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Profile = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M20 23a8 8 0 1 0 0-16.001A8 8 0 0 0 20 23Zm0-2a6 6 0 1 0 0-12.002A6 6 0 0 0 20 21Z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20ZM29.63 35.21A17.9 17.9 0 0 1 20 38a17.9 17.9 0 0 1-9.831-2.92c-.24-.3-.483-.61-.73-.93A2.14 2.14 0 0 1 9 32.845c0-1.077.774-1.98 1.809-2.131 6.845-1 11.558-.914 18.412.035A2.08 2.08 0 0 1 31 32.818c0 .48-.165.946-.463 1.31-.307.374-.61.735-.907 1.082Zm3.355-2.744c-.16-1.872-1.581-3.434-3.49-3.698-7.016-.971-11.92-1.064-18.975-.033-1.92.28-3.335 1.856-3.503 3.733A17.94 17.94 0 0 1 2 20c0-9.941 8.059-18 18-18s18 8.059 18 18a17.94 17.94 0 0 1-5.015 12.466Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default Profile;