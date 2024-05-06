import {useState} from 'react'

export default function UpdateObject(){
    const [car, setCar] = useState({year: 2024, make: "Ford", model: "Mustang"})

    function handleYearChange(e) {
        setCar(c=> ({...c, year: e.target.value})) //if you have two same keys, you ignore the first one
        //put paretheses around the object so js doesn't think you want to make a multiline statement
    }
    function handleMakeChange(e) {
        setCar(c=>({...c, make: e.target.value}))
    }
    function handleModelChange(e) {
        setCar(c=>({...c,model:e.target.value}))
    }

    return (
        <div>
            <p>Your fav car is: {car.year} {car.make} {car.model}</p>
            <input type="number" value = {car.year} onChange={handleYearChange}/><br/>
            <input type="text" value = {car.make} onChange={handleMakeChange}/><br/>
            <input type="text" value = {car.model} onChange={handleModelChange}/><br/>
        </div>
    )
}