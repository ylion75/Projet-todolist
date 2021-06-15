import * as React from "react"
import Checkbox from '@material-ui/core/Checkbox'
import DeleteIcon from '@material-ui/icons/Delete'
import DatePicker from "react-datepicker";
import './SidePanel.css'
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';

export default function SidePanel(props){    
    const {task, modifyTitle, onAddStep, onDeleteStep, hidePanel} = props;   
    const [newStepLabel, setNewStepLabel] = React.useState("");
    const [startDate, setStartDate] = React.useState(new Date());    
    const [title, setTitle] = React.useState(task.title);
    const [note, setNote] = React.useState(task.note);

    const handleAddStep = () => {
        onAddStep(newStepLabel);
        setNewStepLabel("");
    }  

    const handleSubmit = (e) => {
        e.preventDefault();
        modifyTitle(title);
    }

    return (
        <div className="SidePanel-Container">  
            <form onSubmit={handleSubmit}>
                <div>   
                    <label for="Title"> Titre </label>
                    <input 
                        defaultValue={task.title}
                        onChange={(e)=> modifyTitle(e.target.value)}>
                    </input>
                </div> 
                <div>            
                    <ul className="list-group">
                        {task.steps.map((item) => {
                            return(
                                <button> 
                                    <div>
                                        <Checkbox/>
                                    </div>
                                    <div className="stepTitle">
                                        {item.title}
                                    </div>
                                    <div>
                                        <DeleteIcon onClick={() => onDeleteStep(item)}>
                                        </DeleteIcon> 
                                    </div>
                                </button>

                            )
                        })}
                    </ul>
                </div> 
                <div>                
                    <input 
                        type="text"     
                        name="newStep"
                        className="form-control" 
                        placeholder="Nouvelle étape"
                        value={newStepLabel}
                        onChange={(e)=> setNewStepLabel(e.target.value)}
                    />
                <button onClick={handleAddStep} className="SidePanelAddStepButton"><AddTwoToneIcon>Ajouter</AddTwoToneIcon></button>
                </div>
                <div>
                    <label for="Note">Note</label>
                    <input 
                        type="text"
                        value= {note}  > 
                    </input>
                </div>
                <div>
                    <label for="Date">Echéance</label>
                    <DatePicker
                        selected={startDate}
                        //onSelect={handleDateSelect} //when day is clicked
                        onChange={setStartDate}
                    />
                </div>
                <div className="SidePanelButtons">
                    <button className="SidePanelSaveButton">Enregistrer</button>
                    <button onClick={hidePanel} className="SidePanelCancelButton">Annuler</button>
                </div>
            </form>
        </div>   
        
    
    )
}

/* 
                               <SidePanel_Step 
                            txt={item.title}
                            key={item.id}
                            id={item.id}
                            onClick={()=> onDeleteStep(item)}
                            />

                
            
            
            
            <h5>Note</h5>
            <input></input>

            <div className="SidePanelButtons">
                <button className="SidePanelSaveButton">Enregistrer</button>
                <button className="SidePanelCancelButton">Annuler</button>
            </div>
   
        

*/