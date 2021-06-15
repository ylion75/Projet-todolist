import React from 'react'
import './ListForm.css';

export default function ListForm_ListItem(props) {
    return (
        <button>
            <li className="listForm">
                <div className="listForm-item">
                    {props.txt}
                </div>       
            </li>
        </button>
    )
}
