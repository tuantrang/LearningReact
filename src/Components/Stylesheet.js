import React from 'react'
import '../CSS/myStyle.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''

  return (
    <div>
      <h1 className={`${className} font-xl`}>Stylesheet</h1>
    </div>
  )
}

export default Stylesheet
