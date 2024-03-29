import React, { useState } from 'react';
import Input from '../../Input/Input';

import classes from './GeneralInfo.module.css';

const GeneralInfo = (props) => {

    const [inputState, updateInputState] = useState({
        ...props.meta
    });

    const updateName = () => {
        alert(`Resume name changed to ${inputState.name}.`);
        props.save(inputState);
    }

    return (
        <div className={classes.GeneralInfo}>
            <h2>General Information </h2>
            <div className={classes.Inputs}>
                <Input
                    label='Resume Name'
                    placeholder="Resume"
                    width='40%'
                    height="30px"
                    update={(event) => updateInputState({
                        ...inputState,
                        name: event.target.value
                    })}
                    val={inputState.name}
                />
                <button onClick={updateName} className={classes.Save}>Update Name</button>
            </div>
            <hr className={classes.hr}/>
        </div>
        
    );
}

export default GeneralInfo;