import classes from './TagManager.module.css';
import { useState } from 'react';

const TagManager = (props) => {

    const [currentTag, updateCurrentTag] = useState("");

    const addTag = () => {
        const newTags = [...props.tags];
        newTags.push(currentTag);
        props.update(newTags);
        updateCurrentTag("");
    }

    const removeTag = (index) => {
        const newTags = [...props.tags];
        newTags.splice(index, 1);
        props.update(newTags);
    }

    const createTagJSX = (index, tag) => {
        return (
            <div key={index + 'tag'} className={classes.tagContainer}>
                <p className={classes.tag}>{tag}</p>
                <button className={classes.removeButton} onClick={()=> removeTag(index)}>X</button>
            </div>
        );
    }

    const tagsJSX = props.tags.map((tag, index)=> createTagJSX(index, tag));

    return(
        <div className={classes.container}>
            <p className={classes.label}>Tags</p>
            <div className={classes.tagsContainer}>
                <input value={currentTag} onChange={(e) => updateCurrentTag(e.target.value)} className={classes.input}/>
                <button className={classes.addButton} onClick={addTag}>+</button>
                <div className={classes.tags}>
                    {tagsJSX}
                </div>
            </div>
        </div>
    );
}

export default TagManager;