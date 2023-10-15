import React, { useState, useEffect } from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(()=> {
        console.log('useEffect - Update document title')
        document.title = `You clicked ${count} times`
    },[count]);

    return (
        <div>
            <input type='text' value={name} onChange={event => setName(event.target.value)} />
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