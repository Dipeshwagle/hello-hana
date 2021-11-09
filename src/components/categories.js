import React from "react"

const Categories = ({ categories }) => {
  if (!categories) return null
  return categories.map((category, index) => {
    const addSlash = index !== categories.length - 1 ? " / " : ""

    return (
      <span key={index}>
          {category}
          {addSlash}
      </span>
    )
  })
}

export default Categories