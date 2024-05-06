import {useContext} from 'react'
import { UserContext } from './ComponentA'

//useContext() is to share values between levels of components without props
export default function ComponentD(){
    const user=useContext(UserContext)
    return (
        <div className="box">
            <h1>ComponentD</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    )
}