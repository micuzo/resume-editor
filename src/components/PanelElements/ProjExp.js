import React, { useState } from 'react';
import ElementContainer from './ElementContainer/ElementContainer';
import Button from '../Button/Button';
import Input from '../Input/Input';
import SectionNav from '../SectionNav/SectionNav';
import TagManager from '../TagManager/TagManager';
import { ExperienceSchema, ProjectSchema, SectionStrings } from '../../services/schemas';
import ResumeBuilder from '../../services/ResumeBuilder';
import prettyPrint from '../../Js/PrettyPrint';


const ProjExp = (props) => {
    
    let [currentPanelIndex, updateCPIndex] = useState(0);
    
    const inputChangeHandler = (dataItem, index, value) => {
        let newData = [...props.data];
        newData[index][dataItem] = value;
        props.update(newData);
    }

    const addProjExp = () => {
        let newData = [...props.data];
        newData.push(props.title === SectionStrings.Projects ? {...ResumeBuilder.createProject()} : {...ResumeBuilder.createExperience()});
        props.update(newData);
    }

    const removeProjExp = (index) => {

        if(!window.confirm('Are you sure you want to remove this item?')) return;
        
        let newData = [...props.data];
        newData.splice(index, 1);
        props.update(newData);

        if(currentPanelIndex >= newData.length) updateCPIndex(Math.max(currentPanelIndex-1, 0));
    }


    const style = {
        width: '100%',
        marginBottom: '10px',
    }
    const sections = [];
    props.data.forEach(item => {
        //Get first key in object (supposed to be title / company)
        const key = props.title === 'Projects' ? 'title' : 'company';
        sections.push(item[key]);
    });


    
    const items = props.data.map((projExp, index) => {

        const schema = props.title === SectionStrings.Projects ? ProjectSchema : ExperienceSchema;
        const labels = Object.keys(schema)
            .filter((key) => typeof(schema[key]) === "string")
            .map(label => prettyPrint(label));

        const inputs = labels.map((label) => {
            return (
                <Input
                    key={label + currentPanelIndex}
                    label={label}
                    width='95%'
                    height={label==='Responsibilities' ? '240px' : '30px'}
                    textarea={label==='Responsibilities'}
                    update={(event) => inputChangeHandler(label.toLowerCase(), index, event.target.value)}
                    val={projExp[label.toLowerCase()]}
                />
            );
            
        });

        return(
            <div style={style} key={index}>
                {inputs.slice(0, inputs.length - 1)}
                <TagManager tags={props.data[index].tags || []} update={(newTags)=> inputChangeHandler("tags", index, newTags)}/>
                {inputs.slice(inputs.length-1)}
            </div>
        );
    });

    const itemName = props.title === SectionStrings.Projects ? "Project" : "Experience";

     return(
        <ElementContainer save={props.save} title={props.title}>
            <SectionNav
                sections={sections}
                cur={currentPanelIndex}
                update={(index) => updateCPIndex(index)}
            />
            {items[currentPanelIndex]}
            <Button click={addProjExp} color={'white'}>{`Add ${itemName}`}</Button>
            <Button click={() => removeProjExp(currentPanelIndex)}color={'white'}>{`Remove ${itemName}`}</Button>
        </ElementContainer>
     );
}

export default ProjExp;
