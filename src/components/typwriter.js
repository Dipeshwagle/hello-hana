import React from "react"
import { Typewriter as ReactTypewriter } from "react-simple-typewriter"

const Typewriter = () => {
  return (
    <h1 style={{ paddingTop: "5rem", margin: "auto 0", fontWeight: "normal" }}>
      She also{" "}
      <span style={{ color: "red" }}>
        {/* Style will be inherited from the parent element */}
        <ReactTypewriter
          words={["loves cats", "goes hiking a lot", "drinks tea all day"]}
          loop={5}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </h1>
  )
}

export default Typewriter
