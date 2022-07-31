import React from 'react'
import {AffairType} from "./HW2";
import './Affairs.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div className='affRowWrap'>
            <button>{props.affair.name}</button>
            <button className={props.affair.priority}>{props.affair.priority}</button>
            <button className='delBtn' onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
