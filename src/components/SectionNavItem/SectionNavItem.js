import React from 'react';

import classes from './SectionNavItem.module.css';

const SectionNavItem = (props) =>{

    const classNames = props.selected ? [classes.SectionNavItem, classes.Selected].join(' ') : classes.SectionNavItem;
    
    const label = props.label === "" ? "Empty" : props.label;

    return(
        <button onClick={props.click} className={classNames}>
            {label}
        </button>
    );
}

export default SectionNavItem;