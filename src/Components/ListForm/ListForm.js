import * as React from "react"
import UserEmail from './UserEmail'

export default function ListForm(props){
    const {lists, onSelectList, onAddList} = props;

    const handleSubmit = (e) => {
      e.preventDefault();
  
      const titleInput = e.target.elements.title;
      const title = titleInput.value;
  
      onAddList(title);
  
      titleInput.value = "";
    };



  return (
    <div className="listForm-container">
      <div>
          <UserEmail/>
      </div>
      <h5> Mes listes (listform)</h5>
          <ul className="list-group">
              {lists.map((list, index) => {
                  return(
                      <li key={list.id}>
                        <button type="button" onClick={() => onSelectList(index)}>
                          {list.txt}
                        </button>
                    </li>                         
            
                  )
              })}
          </ul>

      <form onSubmit={handleSubmit}>
        <input                     
          type="text" 
          name="title"                
        />    
        <button className="ListForm_Button">Nouvelle liste </button>
      </form>
    </div>
  )
}

      /*
    const[stateInput, setStateInput] = useState();
    const[stateShowInput, setStateShowInput] = useState(false);

      const addTodo = e => {
        e.preventDefault(); //permet de ne pas actualiser la page
        const newArr = [...lists]

        const newTodo = {};
        newTodo.txt = stateInput;
        newTodo.id = uuidv4;

        newArr.push(newTodo);
        setLists(newArr);
        setStateInput('');
    }

    const linkedInput = e => {
    setStateInput(e);
    }
    */