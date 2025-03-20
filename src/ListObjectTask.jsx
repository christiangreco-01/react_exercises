import { element } from "prop-types";
import React, {useState} from "react";

function ListObjectTask(){
    const[tasks, setTask] = useState(["eat","walk","sleep"])
    const[newTask, setNewTask] = useState("");

    function inputChange(event){
        setNewTask(event.target.value)
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTask(t => [...t, newTask]);
            setNewTask("");
        }

    }
    function deleteTask(index){
        const updatedList = tasks.filter((_,i) => i !== index)
        setTask(updatedList);
    }
    function moveUp(index){
        if(index > 0){
            const updatedList = [...tasks];
            [updatedList[index], updatedList[index - 1]] = [updatedList[index - 1], updatedList[index]]
            setTask(updatedList)
        }

    }
    function moveDown(index){
        if(index < tasks.length -1){
            const updatedList = [...tasks];
            [updatedList[index], updatedList[index + 1]] = [updatedList[index + 1], updatedList[index]]
            setTask(updatedList)
        }
    }

    return(
        <div className="to-do-list">
            <h1>To Do List</h1>

            <div>
                <input 
                    type="text" 
                    placeholder="enter a task:"
                    value={newTask}
                    onChange={inputChange}
                    />
                <button className="add-button" onClick={addTask}> add </button>

                <ol>
                    {tasks.map((task,index) =>
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button className="delete-button" onClick={() => deleteTask(index)}>
                                Delete
                            </button>
                            <button className="move-button" onClick={() => moveUp(index)}>
                                Up
                            </button>
                            <button className="move-button" onClick={() => moveDown(index)}>
                                Down
                            </button>
                        </li>
                    )}
                </ol>
            </div>
        </div>
    )

}

export default ListObjectTask