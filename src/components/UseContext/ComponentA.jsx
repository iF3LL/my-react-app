import ComponentB from "./ComponentB"
import {useState, createContext} from 'react'

export const UserContext = createContext()

//useContext() is to share values between levels of components without props
//avoid prop drilling - instead, we traverse up to find the nearest context provider

/*provider component
1. import {createContext} from 'react'
2. export const MyContext = createContext();
3. <MyContext.Provider value = {value}>
    <Child/>
    </MyContext.Provider>    
*/

/*consumer components
1. import {useContext}, import {MyContext from 'provider'}
2. const value = useContext(MyContext)
*/
export default function ComponentA(){
    const [user, setUser] = useState("sunn")
    return (
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value ={user}>
                <ComponentB/>
            </UserContext.Provider>
        </div>
    )
}