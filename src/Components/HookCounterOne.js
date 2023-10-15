import React, { useState, useEffect } from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0)
    useEffect(()=> {
        document.title = `You clicked ${count} times`
    });

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterOne

/*
useEffect
The Effect Hook lets you perform side effects in functional components
It is a close replacement for componentDidMount, componentDidUpdate and componentWillUnmount
*/