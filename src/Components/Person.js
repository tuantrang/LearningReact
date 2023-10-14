import React from 'react'

function Person(props) {
  const {name, age, skill} = props.person  
  return (
    <div>
        <h1>
            I am {name}. I am {age}.  I kwow {skill}
        </h1>
    </div>
  )
}

export default Person
