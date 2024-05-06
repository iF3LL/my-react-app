import {useState} from 'react'

export default function Todo() {
    const [task, setTask] = useState("")
    const [taskList, setTaskList] = useState([])
    //how to get a unique key? make object? index wouldn't work

    const addTask = () => {
        if(task.trim() !== "") {
            setTaskList(t=>[...t,task])
            setTask("")
        }
    }
    const deleteTask = (index) => setTaskList(taskList.filter((_, i) => i!== index))
    const moveTaskUp = (index) => {
        //if index>0
        const newTaskList = [...taskList];
        [newTaskList[index],newTaskList[index-1]] = [newTaskList[index-1],newTaskList[index]]
        setTaskList(newTaskList)
    }
    const moveTaskDown = (index) => {
        const newTaskList = [...taskList];
        [newTaskList[index+1],newTaskList[index]] = [newTaskList[index],newTaskList[index+1]]
        setTaskList(newTaskList)
    }

    return (
        <div className="todo">
            <h1>To-Do List</h1>
            <input onChange={(e)=>setTask(e.target.value)}
                   placeholder="Enter a task..."
                   type="text"
                   value={task /*need to include value so it updates*/}
                   />
            <button onClick={addTask}
                    className="add-button"
            >Add</button>
            <ol>
                {taskList.map((t,index)=>
                    <li key={index}>    {/* no need for class here, use selector*/}
                        <span className="task-text">{t}</span>
                        <button className="delete-button" onClick={()=> deleteTask(index)}>
                            Delete
                        </button>
                        {index !== 0 && <button className="move-button" onClick={()=>moveTaskUp(index)}>
                            👆
                        </button>}
                        {index !== taskList.length-1 && <button className="move-button" onClick={()=>moveTaskDown(index)}>
                            👇
                        </button>}
                    </li>
                )}
            </ol>
        </div>
    )
    
    //task adding box
    //tasks - delete, move up, move down
}