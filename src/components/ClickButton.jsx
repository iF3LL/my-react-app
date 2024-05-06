export default function Button() {
    let count = 0;
    const handleClick = (e) => { // {} for multiline arrow func
        if (count==3) e.target.textContent = "no more clicking"
        count++;
        console.log(e)
        console.log("clicked too many times")
    }
    const double = (e) => { //you can have onDoubleClick instead of onClick
        let x=true;
        if (x) {
            e.target.textContent = "easter egg!"
            x=!x
        }else {
            (e.target.textContent = "easterEgg again!!")
            x=!x
        }
    }
    return (
        <button onClick={(e) => handleClick(e) }>click button</button>
    )
}

//e for event handling, you get an object with a lot of info
//if you add handleClick() <- with paratheses, as opposed to just handleClick then you invoke it right away, so use func