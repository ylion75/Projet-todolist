import TaskForm_Item from './TaskForm_Item';

export default function TaskForm(props){

    const [dataArr, setDataArr] = useState([
        {txt: "Créer un repository sur github", id: uuidv4()},
        {txt: "Créer un repository sur github", id: uuidv4()},
        {txt: "Créer un repository sur github", id: uuidv4()},
        {txt: "Créer un repository sur github", id: uuidv4()},

    ])
    
    const deleteElement = id => {
        const filteredState = dataArr.filter(item => {
            return item.id !== id;
        })
        setDataArr(filteredState)
    }    

    return (
        <div className="TaskForm-Container">       
            <h3>Prochaines tâches</h3>
                <ul className="TaskForm-Tasks">
                    {dataArr.map(item => {
                        return(                        
                            <TaskForm_Item
                            txt={item.txt}
                            key={item.id}
                            id={item.id}
                            delFunc = {deleteElement}
                            />
                        )
                    })}
                </ul>                          
        </div>
    )
}

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
