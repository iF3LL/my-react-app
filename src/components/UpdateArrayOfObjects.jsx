import {useState} from 'react'

export default function UpdateArrayOfObjects(){
    const [cars, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const[carMake,setCarMake] = useState({
        value: "",
        isTouched: false
    })
    const [carModel,setCarModel] = useState({
        value: "",
        isTouched: false
    })

    function handleAddCar(){
        if (carYear > new Date().getFullYear() || carYear < new Date().getFullYear()-100) {
            window.alert("Please enter a date within the past 100 years")
            setCarYear(new Date().getFullYear())
        }
        else if (carMake.value == "" || carModel.value == "") {
            window.alert("Please fill missing values")        
        } else {
            const newCar={year: carYear, make: carMake, model: carModel}
            setCars(c=>[...c,newCar])
            setCarYear(new Date().getFullYear())
            setCarMake({value: "",isTouched: false})
            setCarModel({value: "",isTouched: false})
        }
    }

    return (
        <div>
            <h2>List of car objects*</h2>
            <ul>
                {cars.map((car, index) => <li 
                    key={index} 
                    onClick={()=>setCars(cars.filter((_, i) => i !== index))}>
                    {car.year} {car.make.value} {car.model.value}
                </li>)}
            </ul>
            <input type="number"
                   value={carYear} 
                   onChange={(e)=>setCarYear(e.target.value)} 
                   min={0} 
                   max={new Date().getFullYear()}/> 
            &nbsp;add the year            
            <br/>
            <div style={{ display: "flex", alignItems: "center", height:"1rem", padding: "1rem 0 0 0"}}>
                <input type="text"
                    value={carMake.value} 
                    onChange={(e)=>setCarMake({...carMake, value: e.target.value})} 
                    onBlur={()=>setCarMake({...carMake, isTouched: true})} 
                    placeholder="enter car make"/> 
                        &nbsp;
                {carMake.isTouched && carMake.value == "" ? 
                    <p className="missingValue">ENTER A MAKE</p> : 
                    <p>add the make</p>}
            </div>
            <div style={{ display: "flex", alignItems: "center", height:"1rem", padding: "1rem 0 1rem 0"}}>
                <input type="text"
                    value={carModel.value} 
                    onChange={(e)=>setCarModel({...carModel, value: e.target.value})} 
                    onBlur={()=>setCarModel({...carModel, isTouched: true})} 
                    placeholder="enter car model"/>
                    &nbsp;
                {carModel.isTouched && carModel.value == "" ? 
                    <p className="missingValue">ENTER A MODEL</p> : 
                    <p>add the model</p>}
            </div>

            <button onClick={handleAddCar}>Add car</button>
        </div>
    )
}