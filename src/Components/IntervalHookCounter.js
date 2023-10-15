import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
   const [count, setCount] = useState(0)

   useEffect(() => { 
       function doLog(){
           console.log(count)
       }

       doLog()
       const interval = setInterval(tick, 1000)

       return () => {
           clearInterval(interval)
       }
   },[count])

   const tick = () => {
       setCount(prevCount => prevCount + 1)
   }

  return (
    <div>
      Count - {count}
    </div>
  )
}

export default IntervalHookCounter
