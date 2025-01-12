import * as React from "react"
// import Svg, { Rect, Path } from "react-native-svg"

function Notification(props) {
  return (
    <div>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="4" fill="#F18C13" fill-opacity="0.2" />
        <path d="M16.3518 28.2418C17.1929 29.311 18.5142 30 20 30C21.4858 30 22.8071 29.311 23.6482 28.2418C21.2264 28.57 18.7736 28.57 16.3518 28.2418Z" fill="#F18C13" />
        <path d="M26.7491 17V17.7041C26.7491 18.5491 26.9903 19.3752 27.4422 20.0782L28.5496 21.8012C29.5612 23.3749 28.789 25.5139 27.0296 26.0116C22.4273 27.3134 17.5727 27.3134 12.9704 26.0116C11.211 25.5139 10.4388 23.3749 11.4504 21.8012L12.5578 20.0782C13.0097 19.3752 13.2509 18.5491 13.2509 17.7041V17C13.2509 13.134 16.2726 10 20 10C23.7274 10 26.7491 13.134 26.7491 17Z" fill="#F18C13" />
      </svg>
    </div>

  )
}

export default Notification
