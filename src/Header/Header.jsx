import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props)=>{
     let

          section  ='/section/'+ 2,
         regiseter = '/register/'+1;



    return(
        <>
            <div className={classes.header}>
                   <NavLink to={regiseter}>Register</NavLink><br/>
                 <NavLink to={section}>section</NavLink>
            </div>
        </>
    );
};
export  default  Header;