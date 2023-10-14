import React from 'react'

function FunctionClick() {
  function clickHandler() {
    alert("Button was clicked")
  }  

  return (
    <div>
      <button onClick={clickHandler}>click</button>
    </div>
  )
}

export default FunctionClick
