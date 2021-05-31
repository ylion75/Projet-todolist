import React from 'react'
import './SidePanel_Step.css'
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Checkbox from '@material-ui/core/Checkbox'

export default function SidePanel_Step(props) {
    return (
        <div>
            <div className="SidePanel_Step-Container">
                <div>
                    <Checkbox></Checkbox>                   
                </div>
                <div>
                    {props.txt}
                </div>
                <RemoveCircleOutlineIcon onClick={() => props.delFunc(props.id)}>
                </RemoveCircleOutlineIcon>
            </div>
        </div>
    )
}