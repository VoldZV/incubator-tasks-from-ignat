import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import './h5.css'

function Header() {
    return (
        <div className={'menu'}>
            {/*add NavLinks*/}
            <NavLink className={({isActive}) => `${isActive ? 'link active' : 'link'}`}
                     to={PATH.PRE_JUNIOR}>PRE_JUNIOR</NavLink>
            <NavLink className={({isActive}) => `${isActive ? 'link active' : 'link'}`}
                     to={PATH.JUNIOR}>JUNIOR</NavLink>
            <NavLink className={({isActive}) => `${isActive ? 'link active' : 'link'}`}
                     to={PATH.JUNIOR_PLUS}>JUNIOR_PLUS</NavLink>
            <div className="navigate">Here</div>
        </div>
    )
}

export default Header
