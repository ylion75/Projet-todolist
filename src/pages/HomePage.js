import * as React from "react";
import {useState} from  'react'
import {v4 as uuidv4} from 'uuid'
import ListForm from '../Components/ListForm/ListForm'
import TaskForm from '../Components/TaskForm/TaskForm'
import SidePanel from '../Components/SidePanel/SidePanel'
import './HomePage.css'

export default function HomePage(){
    //task
    const [dataArr, setDataArr] = useState([
        {txt: "Créer un repository sur github", id: uuidv4()},
        {txt: "Créer un repository sur github", id: uuidv4()},
        {txt: "Créer un repository sur github", id: uuidv4()},
        {txt: "Créer un repository sur github", id: uuidv4()},

    ])

    return (
        <div className="HomePage-Container">
            <div className= "HomePageLeftPanel">                
                <ListForm/>               
            </div>
            <div className="HomePageMainPanel">
                <TaskForm/>             
            </div> 
            <div className="HomePageRightPanel">          
                <SidePanel/>                
            </div>    
        </div>
    )
}
