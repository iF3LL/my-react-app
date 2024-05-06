import {useState,useEffect} from 'react'

export default function UseEffect() { //aka "use side code"
    //for event listeners, DOM manipulation, subscription (real-time update), API, 
    //clean up when component unmounts
    //use it for readability, and for cleanup code if you added an event listener, you remove too
    //run on re-render: useEffect(()=>{})
    //run only on mount: useEffect(()=>{},[])
    //run on mount or when value changes: useEffect(()=>{},[value]) this is a dependency array
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green")
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    // useEffect(()=>document.title=`Count: ${count}`) //changes title on any change
    // useEffect(()=>{
    //     document.title=`Count: ${count}`
    // }, [])  // only updates title to 0 - only updates once
    // useEffect(()=>{
    //     document.title=`Count: ${count} ${color}`
    // }, [count])  // updates on mount and when count variable updates
    useEffect(()=>{
        document.title=`Count: ${count} ${color}`
    }, [count, color])  // updates on mount and when count or color updates

    useEffect(()=>{
        window.addEventListener("resize", handleResize) 
        //if you didn't useEffect, then it would add event listeners on every size change
        //-unnecessary
        console.log("Event listener added !")
        return () => {
            window.removeEventListener("resize",handleResize)
            console.log("Event listener removed !")
        }
    },[])

    function handleResize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    return (<>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={()=>setCount(c=>c+1)}>Add</button>
        <button onClick={()=>setCount(c=>c-1)}>Subtract</button>
        <button onClick={()=>setColor(c=>c==="green"?"red":"green")}>Change color</button>
        <p>Window width {width}px</p>
        <p>Window height {height }</p>
    </>)
}