import React from 'react';
import prettyPrint from '../../Js/PrettyPrint';
import { SkillTypeOptions } from '../../services/schemas';

import classes from './Dropdown.module.css';

const Dropdowm = (props) => {

    const optionsJSX = [...SkillTypeOptions].map((option, index) => (
        <option key={`optionSkill${option}${index}`} value={option}>{option}</option>
    ));

    let value = props.value === "" ? SkillTypeOptions[0] : prettyPrint(props.value);

    return(
        <select value={value} onChange={(event) => props.update(event)} className={classes.dropdown}>
                {optionsJSX}
        </select>
    );
}

export default Dropdowm;