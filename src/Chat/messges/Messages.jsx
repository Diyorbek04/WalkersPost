import React from 'react';
import classes from './Messages.module.css'
const Post = (props)=>{
    return(
        <div className={classes.item}>
            <img src="https://png.pngtree.com/element_our/png_detail/20181102/avatar-profile-logo-vector-emblem-illustration-modern-illustration-png_227484.jpg" alt=""/>
            <strong>{props.post}</strong>
            <div>
                <span>Like {props.like}</span>
            </div>
        </div>
    );
};
export default Post;