import {useState, useEffect, useRef} from 'react'

//useRef() - like useState, but no rerender of component
// accessing/interacting with DOM elements
//handling focus, animations, transitions
//managing timers and intervals

export default function UseRef(){
    // let [num, setNum]=useState(0)
    const inputRef1 = useRef(null) //returns "current" object
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)
    useEffect(()=> {
        console.log("COMPONENT RENDERED")
    })
    const handleClick1 = () => {
        // setNum(n=>n+1)
        // ref.current++
        // console.log(ref.current)
        inputRef1.current.focus() //focuses on the text box without rerender
        inputRef1.current.style.backgroundColor="green"
        inputRef2.current.style.backgroundColor=""
        inputRef3.current.style.backgroundColor=""
    }
    const handleClick2 = () => {
        inputRef2.current.focus()
        inputRef2.current.style.backgroundColor="green"
        inputRef1.current.style.backgroundColor=""
        inputRef3.current.style.backgroundColor=""
    }
    const handleClick3 = () => {
        inputRef3.current.focus()
        inputRef3.current.style.backgroundColor="green"
        inputRef2.current.style.backgroundColor=""
        inputRef1.current.style.backgroundColor=""
    }
    return (
        <div>
            <button onClick={handleClick1}>
                Click me 1 !
            </button>
            <input ref={inputRef1}/>

            <button onClick={handleClick2}>
                Click me 2!
            </button>
            <input ref={inputRef2}/>

            <button onClick={handleClick3}>
                Click me 3!
            </button>
            <input ref={inputRef3}/>
        </div>
    )
}

// this program can be written with useState instead of useRef
// but will cause unnecessary rerenders