import {useState} from  'react'
import {v4 as uuidv4} from 'uuid'
import ListForm_ListItem from './ListForm_ListItem'
import UserEmail from './UserEmail'
import {ListForm_Button} from './ListForm_Button.css'


export default function ListForm(){
    const [dataArr, setDataArr] = useState([
        {txt: "To Do today", id: uuidv4()},
        {txt: "Projet tutoré", id: uuidv4()},
        {txt: "Stage", id: uuidv4()}
    ])
    
    const[stateInput, setStateInput] = useState();
    const[stateShowInput, setStateShowInput] = useState(false);

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
        <div className="listForm-container">
            <div>
                <UserEmail/>
            </div>
            <h5>Mes listes (listform)</h5>
                <ul className="list-group">
                    {dataArr.map(item => {
                        return(
                            <ListForm_ListItem 
                            txt={item.txt}
                            key={item.id}
                            id={item.id}
                            />
                        )
                    })}
                </ul>

                <form onSubmit={e => addTodo(e)}>
                <input 
                    onInput={(e => linkedInput(e.target.value))}
                    type="text" 
                    className="form-control" 
                    id="todo"
                    />                   
                <button className="ListForm_Button" onClickclass={()=> setStateShowInput(true)} >Nouvelle liste </button>
            </form>
        </div>
    )
}