import React from 'react';
import { prettyPrint }  from '../../services/helper';
import { SkillTypes } from '../../services/schemas';

import classes from './Dropdown.module.css';

const Dropdowm = (props) => {

    const optionsJSX = Object.values({...SkillTypes}).map((option, index) => (
        <option key={`optionSkill${option}${index}`} value={option}>{option}</option>
    ));

    let value = props.value === "" ? SkillTypes.Language : prettyPrint(props.value);

    return(
        <select value={value} onChange={(event) => props.update(event)} className={classes.dropdown}>
                {optionsJSX}
        </select>
    );
}

export default Dropdowm;