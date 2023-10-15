import React, {useState} from 'react'

function HookCounter(){
    //Destructuring
    const [count, setCount] = useState(0)


    return (
        <div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
    )
}

export default HookCounter

/* 
    Rules of Hooks      
      "Only Call Hooks at the Top Level"
      Don't call Hooks inside loops, conditions, or nested functions
    
      "Only Call Hooks form React Functions"
      Call them from within React Funcitonal componnents and not just any regular JavasScript Function
*/