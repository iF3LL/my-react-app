import ComponentD from "./ComponentD"
import {useContext} from 'react'
import { UserContext } from './ComponentA'

//useContext() is to share values between levels of components without props
export default function ComponentC(){
    return (
        <div className="box">
            <h1>ComponentC</h1>
            <h2>{`Hello again ${useContext(UserContext)}`}</h2>
            <ComponentD/>
        </div>
    )
}