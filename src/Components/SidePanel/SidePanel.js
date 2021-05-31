import {useState} from  'react'
import {v4 as uuidv4} from 'uuid'
import SidePanel_Step from './SidePanel_Step'
import SidePanel_Deadline from './SidePanel_Deadline'
import './SidePanel.css'
import SidePanel_Title from './SidePanel_Title'
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';

export default function SidePanel(){    
    const [dataArr, setDataArr] = useState([
        {txt: "Aller sur Github", id: uuidv4()},
        {txt: "Créer le repository", id: uuidv4()},
    ])
        
    const[stateInput, setStateInput] = useState();

    const deleteElement = id => {
        const filteredState = dataArr.filter(item => {
            return item.id !== id;
        })
        setDataArr(filteredState)
    }

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

    return (
        <div className="SidePanel-Container">       
            <SidePanel_Title/>
            <h5>Etapes</h5>
                <ul className="list-group">
                    {dataArr.map(item => {
                        return(
                            <SidePanel_Step 
                            txt={item.txt}
                            key={item.id}
                            id={item.id}
                            delFunc = {deleteElement}
                            />
                        )
                    })}
                </ul>

                <form onSubmit={e => addTodo(e)} class="mb-3">
                    <input 
                    onInput={(e => linkedInput(e.target.value))}
                    type="text" 
                    className="form-control" 
                    id="todo"
                    placeholder="Nouvelle étape"
                    />
                <button className="SidePanelAddStepButton"><AddTwoToneIcon>Ajouter</AddTwoToneIcon></button>
            </form>
            
            <SidePanel_Deadline/>
            
            <h5>Note</h5>
            <input></input>
            <div className="SidePanelButtons">
                <button className="SidePanelSaveButton">Enregistrer</button>
                <button className="SidePanelCancelButton">Annuler</button>
            </div>
   
        </div>
    )
}