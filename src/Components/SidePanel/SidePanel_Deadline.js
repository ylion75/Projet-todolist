import {useState} from  'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SidePanel_Deadline(props) {


    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
        <h5>Echéance</h5>
        <DatePicker
            selected={startDate}
            //onSelect={handleDateSelect} //when day is clicked
            onChange={setStartDate} //only when value has changed            
        />
        </div>       
    )
}