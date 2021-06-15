import * as React from "react"
import Checkbox from '@material-ui/core/Checkbox'
import DeleteIcon from '@material-ui/icons/Delete'

export default function TaskForm_Item(props) {

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
      };

    return (  
        <div class="TaskFormItem-Container"> 
            <button className="taskItem">
                    <div class="taskCheckbox">
                        <Checkbox                        
                            taskChecked={checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </div>
                    <div class="taskText">
                        {props.txt}
                    </div>
                    <div className="deleteIcon">
                        <DeleteIcon onClick={() => props.delFunc(props.id)}> 
                        </DeleteIcon>      
                    </div>          
            </button>  
        </div>     
        
    )
}
