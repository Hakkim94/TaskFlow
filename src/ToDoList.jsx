import React, {useEffect, useState}  from "react";
import './TodoList.css'
function ToDoList(){

    const [Task,SetTask]=useState(() => {
       return JSON.parse(localStorage.getItem("MyTasks")) || [];
    });
    const [NewTask,setNewTask]=useState("");

    useEffect(() => {
        localStorage.setItem("MyTasks", JSON.stringify(Task));
    }, [Task]);

    function HandleInputChange(event){
        setNewTask(event.target.value);
    }
    function createTask(){
        SetTask([...Task, NewTask]);
        SetNewTask("");
        
    }
    function DeleteTask(index){
        const UpdatedTask= Task.filter((_, i)=> i !== index);
        SetTask(UpdatedTask);
    }
   function MoveTaskUp(index) {
    if (index === 0) return;

    const UpdatedTask = [...Task];

    [UpdatedTask[index], UpdatedTask[index - 1]] =
    [UpdatedTask[index - 1], UpdatedTask[index]];

    SetTask(UpdatedTask);
}
    function MoveTaskDown(index){
        if (index < Task.length-1){
         const UpdatedTask=[...Task];
        [UpdatedTask[index],UpdatedTask[index+1]]=[UpdatedTask[index+1],UpdatedTask[index]];
        SetTask(UpdatedTask);
        }
    }

    return(
        <>
        <div className="Website">
           <h1> TO-DO-LIST</h1> 
           <input type="text" className="InputBox" value={NewTask} onChange={HandleInputChange} placeholder="Enter a task"></input>
           <button className="Add-Button" onClick={createTask}>ADD</button>
          
                    <div className="Tasks-List">

            
                <ol>
                    {Task.map((Task,index)=>
                    <li key={index} >

                        <span className="Task">{Task}</span>
                         <button className="Delete-Button" onClick={()=>DeleteTask(index)}>Delete</button>
                         <button className="Up-Button" onClick={()=>MoveTaskUp(index)}>UP</button>
                         <button className="Down-Button" onClick={()=>MoveTaskDown(index)}>Down</button>
                    </li>)
                    }
                </ol>
            </div>
    </div>
        </>
    )

}
export default ToDoList;