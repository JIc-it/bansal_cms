import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function Notification(props) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={40} height={40} rx={4} fill="#F18C13" fillOpacity={0.2} />
      <Path
        d="M16.352 28.242A4.63 4.63 0 0020 30a4.63 4.63 0 003.648-1.758 27.158 27.158 0 01-7.296 0zM26.75 17v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.794 25.794 0 01-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723c.452-.703.693-1.529.693-2.374V17c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7z"
        fill="#F18C13"
      />
    </Svg>
  )
}

export default Notification
