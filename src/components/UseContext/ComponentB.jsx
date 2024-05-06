import ComponentC from "./ComponentC"

//useContext() is to share values between levels of components without props
export default function ComponentB(){
    return (
        <div className="box">
            <h1>ComponentB</h1>
            <ComponentC/>
        </div>
    )
}