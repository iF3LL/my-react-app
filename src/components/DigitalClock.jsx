import React, {useState, useEffect} from 'react'
//still need to import useState and useEffect
//although not React because it's imported by default

export default function DigitalClock() {
    const [time, setTime] = useState(new Date())
    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setTime(new Date())
        }, 1000)
        return () =>{
            clearInterval(intervalId) /*stop the prev timer from continuing to run */
        }
    },[])

    //or just <span>{time.toLocaleTimeString()}</span> but no am/pm
    const formatTime = () => {        
        let hours = time.getHours() //using let instead of const because value will change
        const meridiem = hours < 12 ? "AM" : "PM"
        hours = hours % 12 || 12     //if the first thing is 0, then ok, if not, then second thing
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()
        return `${hours}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}` //use .padStart instead
    }
    const padZero = num => {
        //i wanted to do it in just format time but leading zero would disappear
        return (num <10?"0": "") + num;
    }

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    )
}
//cool thing about react is that you can easily reuse these components!