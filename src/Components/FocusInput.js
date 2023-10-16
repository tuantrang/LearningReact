import React, {useEffect, useRef} from 'react'

function FocusInput() {
    useEffect(()=>{
        //focus input element
        inputRef.current.focus()
    },[])
    const inputRef = useRef(null);

  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  )
}

export default FocusInput
