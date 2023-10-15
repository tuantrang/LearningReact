import React, { useState } from 'react'

function HookCounterFour() {
    const [items, setItems] = useState([])
    const addItem = () => {
        setItems([...items,
                { id: items.length, value: Math.floor(Math.random() * 10) + 1 }
        ])
    }
    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {
                    items.map(item => <li key={item.id}>{item.value}</li>)
                }
            </ul>
        </div>
    )
}

export default HookCounterFour

/*
    Summary - useState
    The useState hook lets you add state to funtional components
    In classes, the statei always an object.
    With the useState hoo, the state doesn't have to be an object.
    The useState hook returns an array with 2 elements.
    The first element is the current value of the staet, and the second element is a state setter function.
    New stae value depends on the previous state value?  You can pass a funciton to the setter function.
    When dealing with objects or arrays, always make sure to spread your state variable and then call the setter function
 */
