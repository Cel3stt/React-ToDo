import React from 'react'
import "./Tag.css"
  const Tag = ({tagName, selectTag, selected}) => {

    const tagStyle = {
      HTML: {backgroundColor: "#FFA590"},
      CSS: {backgroundColor: "#ADE8F4"},
      JavaScript: {backgroundColor: "#FDFD96"},
      React: {backgroundColor: "#00B4D8"}
    }
  return (
    <button 
      type='button' 
      style={selected ? tagStyle[tagName] : tagStyle.default}
      className='tag' 
      onClick={() => selectTag(tagName)}>
      {tagName}

      
      </button>
  )
}

export default Tag