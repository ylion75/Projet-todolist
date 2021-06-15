import * as React from "react"
import {v4 as uuidv4} from 'uuid'
import ListForm from '../Components/ListForm/ListForm'
import TaskForm from '../Components/TaskForm/TaskForm'
import SidePanel from '../Components/SidePanel/SidePanel'
import './HomePage.css'


export default function HomePage(){    
    //listform(gauche)
    const [lists, setLists] = React.useState([
        {txt: "To Do today", id: uuidv4(), tasks: [
            {id: uuidv4(), title:"Tache 1, liste 1", done: false, note:"Hello", steps: [
                {id:uuidv4(), title:"Step1"},
                {id:uuidv4(), title:"Step2"},
            ]},
            {id: uuidv4(), title:"Tache 2, liste 1", done: false, note:"Hello2", steps: [
                {id:uuidv4(), title:"Step1"},
            ]},
        ]},

        {txt: "Projet tutoré", id: uuidv4(), tasks: [
            {id: uuidv4(), title:"Tache 1, liste 2", done: false, note:"Coucou", steps: [
                {id:uuidv4(), title:"Step1"},
                {id:uuidv4(), title:"Step2"},
            ]},
            {id: uuidv4(), title:"Tache 2, liste 2", done: false, note:"Coucou ca va", steps: [
                {id:uuidv4(), title:"Step1"},
                {id:uuidv4(), title:"Step2"},
                {id:uuidv4(), title:"Step3"},
            ]}
        ]},
        {txt: "Stage", id: uuidv4(), tasks: [
            {id: uuidv4(), title:"Tache 1, liste 3", done: false, steps:[]},
            {id: uuidv4(), title:"Tache 2, liste 3", done: false, steps:[]},
        ]},
    ])

    const [selectedListIndex, setSelectedListIndex] = React.useState(null);
    const selectedList = lists[selectedListIndex];
    
    const [selectedTaskIndex, setSelectedTaskIndex] = React.useState(null);
    const selectedTask = selectedList 
        ? selectedList.tasks[selectedTaskIndex] 
        : null;

    const handleSelectList = (listIndex) => {
        setSelectedListIndex(listIndex);
        setSelectedTaskIndex(null);
    }
    
    const handleAddList = (title) => {        
        const newList = {
        id: uuidv4(),
        txt: title,
        tasks: [],
        };

        setLists((prevLists) => {
        return [...prevLists, newList];
        });
    };   

    const handleAddTask = (taskToAdd) => {
        const newTask = {
            id: uuidv4(),
            title: taskToAdd,
            steps: [],
        };

        const updatedList = {
            ...selectedList,
            tasks: [...selectedList.tasks, newTask]
        };

        setLists((prevLists) => {
            return [
                ...prevLists.slice(0, selectedListIndex),
                updatedList,
                ...prevLists.slice(selectedListIndex + 1)
            ]
        })
    }
    
    const modifyTaskTitle = (newTaskTitle) => {
        const updatedTask= {
            ...selectedTask,
            title: newTaskTitle,
        }

        setLists((prevLists) => {
            const selectedListIndex = prevLists.findIndex(
                (list) => list.id === selectedList.id
            );
      
            const updatedList = {
                ...selectedList,
                updatedTask,
                /*
                tasks: selectedList.tasks.map((task) => {
                    if (task.id !== updatedTask.id) {
                        return task;
                    }      
                    return updatedTask;
                })
                */
            }

            return [
                ...prevLists.slice(0, selectedListIndex),
                updatedList,
                ...prevLists.slice(selectedListIndex + 1)
            ];
        });
    }

    //delete task
    const deleteTask = (taskToDelete) => {
        const updatedList = {
            ...selectedList,
            tasks: selectedList.tasks.filter((task) => task.id !== taskToDelete.id)
        };

        setLists((prevLists) => {
            const selectedListIndex = prevLists.findIndex(
            (list) => list.id === selectedList.id
            );

            return [
                ...prevLists.slice(0, selectedListIndex),
                updatedList,
                ...prevLists.slice(selectedListIndex + 1)
            ];
        });
        setSelectedTaskIndex(null);
    };

    const handleAddStep = (newStepLabel) => {
        const newStep = {
          id: uuidv4(),
          title: newStepLabel
        };
    
        const updatedTask = {
          ...selectedTask,
          steps: [...selectedTask.steps, newStep]
        };
    
        const updatedList = {
          ...selectedList,
          tasks: [
            ...selectedList.tasks.slice(0, selectedTaskIndex),
            updatedTask,
            ...selectedList.tasks.slice(selectedTaskIndex + 1)
          ]
        };
    
        setLists((prevLists) => {
          return [
            ...prevLists.slice(0, selectedListIndex),
            updatedList,
            ...prevLists.slice(selectedListIndex + 1)
          ];
        });
    }; 

    const deleteStep = (stepToDelete) => {
        const updatedTask = {
            ...selectedTask,
            steps: selectedTask.steps.filter((step) => step.id !== stepToDelete.id)
        };     

        setLists((prevLists) => {
            const selectedListIndex = prevLists.findIndex(
                (list) => list.id === selectedList.id
            );
      
            const updatedList = {
                ...selectedList,
                tasks: selectedList.tasks.map((task) => {
                    if (task.id !== updatedTask.id) {
                        return task;
                    }      
                    return updatedTask;
                })
            }

            return [
                ...prevLists.slice(0, selectedListIndex),
                updatedList,
                ...prevLists.slice(selectedListIndex + 1)
            ];
        });
    }   

    
    const handleAddNote = (noteToAdd) => {
        console.log(noteToAdd);
    }

    const withdrawEditPanel = () => {
        return [
            setSelectedTaskIndex(null)
        ]
    }


    return (
        <div className="HomePage-Container">
            <div className= "HomePageLeftPanel">                
                <ListForm 
                    lists={lists}    
                    onSelectList={handleSelectList}
                    onAddList={handleAddList}
                />        
            </div>
            <div className="HomePageMainPanel">
                {selectedList ? <TaskForm 
                    list={selectedList} 
                    onSelectTask={setSelectedTaskIndex}
                    onAddTask={handleAddTask}
                    onDeleteTask={deleteTask}                
                /> : null}                                        
            </div> 
            <div className="HomePageRightPanel">    
            {selectedTask ? (<SidePanel 
                    task={selectedTask}     
                    modifyTitle={modifyTaskTitle}            
                    onAddStep={handleAddStep}
                    onDeleteStep={deleteStep}
                    hidePanel={withdrawEditPanel}
                    />                      
            ): null}      
                            
            </div>                 
        </div>
    )
}

