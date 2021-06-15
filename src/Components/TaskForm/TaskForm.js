import * as React from "react";
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'

export default function TaskForm(props){    
    const {list, onSelectTask, onAddTask, onDeleteTask} = props;
    const [newTaskLabel, setNewtaskLabel] = React.useState("");

    const handleAddTask = () => {
        onAddTask(newTaskLabel);
        console.log(newTaskLabel);
        setNewtaskLabel("");        
    }

    //checkbox
    const [checked, setChecked] = React.useState(false);
    const handleChecked = (event) => {
        setChecked(event.target.checked);
        console.log("barrer le texte");
        //document.getElementsByTagName("taskText").strike();
    };

    return (
        <div className="TaskForm-Container">       
            <h3>Prochaines tâches</h3>
                <ul className="TaskForm-Tasks">
                    {list.tasks.map((task, index) => {
                        return(       
                            <button className="TaskForm-Items" onClick={() => onSelectTask(index)}>                             
                                <div class="taskCheckbox">
                                    <Checkbox                        
                                        taskChecked={checked}
                                        onChange={handleChecked}
                                        inputProps={{'aria-label': 'primary checkbox' }}
                                    />
                                </div>
                                <div className="taskText">
                                    {task.title}
                                </div>
                                <div className="deleteIcon">
                                    <DeleteIcon onClick={() => onDeleteTask(task)}> 
                                    </DeleteIcon>      
                                </div> 
                            </button>                            
                        )
                    })}
                </ul>
            <div>
                <input                     
                    type="text" 
                    name="newTask" 
                    placeholder="Ajoutez une tâche à votre liste"  
                    value={newTaskLabel}       
                    onChange={(e)=> setNewtaskLabel(e.target.value)}          
                />         
                <button type="button" onClick={handleAddTask}>+</button>                          
            </div>
        </div>
    )
}




/*
TaskForm_Item
<TaskForm_Item 
                            onClick={() => onSelectTask(item)}
                            txt={item.txt}
                            id={item.id}
                            delFunc = {deleteElement}
                            /> 


/*

const addTodo = e => {
        e.preventDefault(); //permet de ne pas actualiser la page
        const newArr = [...dataArr]

        const newTodo = {};
        newTodo.txt = stateInput;
        newTodo.id = uuidv4;

        newArr.push(newTodo);
        setDataArr(newArr);
        setStateInput('');
    }

    const linkedInput = e => {
        setStateInput(e);
    }

//dans le return 
 <form onSubmit={e => addTodo(e)} class="mb-3">
                <label htmlFor="todo" className="form-label mt-3"> Nouvelle étape </label>
                    <input 
                    onInput={(e => linkedInput(e.target.value))}
                    type="text" 
                    className="form-control" 
                    id="todo"
                    />
                <button className="mt-2 btn btn-primary d-block">Ajouter</button>
    </form>

*/
