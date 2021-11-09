import React from "react"
import { Typewriter as ReactTypewriter } from "react-simple-typewriter"

const Typewriter = () => {
  return (
    <p>
      She also{" "}
      <span>
        {/* Style will be inherited from the parent element */}
        <ReactTypewriter
          words={["loves cats.", "goes hiking a lot.", "drinks tea all day."]}
          loop={5}
          cursor
          cursorStyle="|"
          typeSpeed={120}
          deleteSpeed={70}
          delaySpeed={2000}
        />
      </span>
    </p>
  )
}

export default Typewriter