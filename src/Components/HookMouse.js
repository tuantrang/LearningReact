import React, { useState, useEffect } from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (event) => {
        setX(event.clientX)
        setY(event.clientY)
    }

    useEffect(()=> {
        console.log('useEffect called')
        document.addEventListener('mousemove', logMousePosition)
    },[])
    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default HookMouse

/*
    Passing in empty array in useEffect make it only called once just like componentDidMount
*/


