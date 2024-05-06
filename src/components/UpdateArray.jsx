import {useState} from 'react'

export default function UpdateArray() {
    const [foods, setFoods] = useState(["Apple","Orange","Banana"])
    const [newFood, setNewFood] = useState("")

    function handleAddFood(){
        // const newFood=document.getElementById("foodInput").value
        // document.getElementById("foodInput").value = ""
        // setFoods(f=>[...f, newFood])
        //this works, but let's use state instead, with e
        //however, cannot directly give e to handleAddFood because 
        //handleAddFood is called from the button, not the text box
        //so we will update an invisible variable and append that when needed
        //You can see this used in UpdateArrayOfObjects
        setFoods(f=>[...f,newFood])
        setNewFood("")        
    }
    function handleRemoveFood(index){
        setFoods(foods.filter((_, i) => i!== index)) //underscore convention to ignore
        //for arrays, first argument is element, second is index (optional)
    }
    return (
        <div>
            <h2>List of Food</h2>
            <p>(click to remove)</p>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={()=>handleRemoveFood(index)}>{food}</li>)}
            </ul>
            {/* <input type="text" id="foodInput" placeholder="enter food name"/> */}
            <input type="text" onChange={(e)=> setNewFood(e.target.value)} placeholder="enter food name"/>
            <button onClick={handleAddFood}>add food</button>
        </div>
    )
}