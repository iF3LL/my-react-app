import {useState} from 'react'

export default function Counter() {
    const [number, setNumber] = useState(0)
    function decrement (){
        // setNumber(number-1)
        // setNumber(number-1) //if you have two setNumber calls right here, they are batched - setNumber(n=>n+1)
        setNumber(n=>n-1)   //don't use "number" variable directly!
        setNumber(n=>n-1)   //this is an updater function (sends to queue), very good practice
    }
    return (
        <>
            <p>{number}</p>
            <button onClick = {() => decrement()}>--</button>
            <button onClick = {() => setNumber(0)}>Reset</button> {/*or c=>c=0, but not necessary because not dependent on prev state*/}
            <button onClick = {() => setNumber(1+number)}>+</button>
        </>
    )
}