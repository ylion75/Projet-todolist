import React from 'react'
import './ListForm.css';

export default function ListForm_ListItem(props) {
    return (
        <div>
            <li className="listForm">
                <div className="listForm-item">
                    {props.txt}
                </div>       
            </li>
        </div>
    )
}
