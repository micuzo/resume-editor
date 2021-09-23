import React from 'react';
import prettyPrint from '../../Js/PrettyPrint';

import classes from './Dropdown.module.css';

const Dropdowm = (props) => {

    let value = prettyPrint(props.value || "language");

    return(
        <select value={value} onChange={(event) => props.update(event)} className={classes.dropdown}>
                <option value='Language'>Language</option>
                <option value='Technology'>Technology</option>
                <option value='Database'>Database</option>
        </select>
    );
}

export default Dropdowm;