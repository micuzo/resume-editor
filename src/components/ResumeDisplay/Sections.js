import React from 'react';
import {Text, View, Font } from '@react-pdf/renderer';
import TitledSection from './TitledSection';

import allStyles from './styles';

const readTextArea = (input, isDescription = false) => {
    if (input.length === 0) return "";

    const styles = allStyles.GeneralText;
    const brackets = new Set(["[", "]", "<", ">"]);
    const specialChars = new Set(["[", "]", "<", ">", "\\", "-"]);
    const linesStr = input.split("\n");
    
    let highlight = {};
    let bold = {};
    let textComponentKey = 0;

    //Map all of the lines into a View components filled with Text components 
    //acting like "HTML span elements" for differently styled text
    const lineComponents = linesStr.map((line, lineIndex) => {
        let currStr = "";
        const textComponents = [];

        const charArray = line.split("");

        let lineStart = null;
        if(!isDescription){
            lineStart = (
                <Text style={charArray[0] === '-'? styles.bulletPoint : styles.indent}>
                    {charArray[0] === '-' ? '•' : ' '}
                </Text>
            );
        }
        
        //Build individual Text Components with different styling for this line
        charArray.forEach((c, index) => {
            const isLastChar = index + 1 >= charArray.length;
            const isFirstChar = index <= 0;
            const prevChar = isFirstChar ? "" : charArray[index - 1];

            const displaySpecialChar = specialChars.has(c) && prevChar === "\\";
            if (!specialChars.has(c) || displaySpecialChar) {
                currStr += c;
            }

            if (brackets.has(c) || isLastChar) {
                const style = {...styles.regular, ...highlight, ...bold};

                if (isLastChar) currStr += "\n";
                textComponents.push(
                    <Text key={`${lineIndex} ${currStr}`} style={style}>
                        {currStr}
                    </Text>
                );

                currStr = "";

                if (!displaySpecialChar) {
                    if (c === "[") bold = styles.bold;
                    if (c === "]") bold = {};
                    if (c === "<") highlight = styles.highlighted;
                    if (c === ">") highlight = {};
                }
            }
        });

        return (
            <View key={`line ${lineIndex} ${input}`} style={isDescription ? styles.lineViewDesc : styles.lineView}>
                {lineStart}
                <Text>
                    {textComponents}
                </Text>
            </View>
        );
    });

    return lineComponents;
}


const Education = (props) => {

    const data = props.data;
    const styles = allStyles.Education;

    return(
        <TitledSection section="Education">
            <View style={styles.educationView}>
                <View style={styles.educationLeft}>
                    <View style={styles.degreeSchoolBox}>
                        <Text style={styles.degree}>{data.degree + ' '}</Text>
                        <Text style={styles.school}>{' - ' + data.school}</Text>
                    </View>
                    <Text style={styles.secondaryLine}>{data.secondaryLine}</Text>
                </View>
                <View style={styles.educationRight}>
                    <Text style={styles.timeline}>{data.timeline}</Text>
                    <Text style={styles.location}>{data.location}</Text>
                </View>
            </View>
            
        </TitledSection>
    )
}

const PersonalInformation = (props) =>{

    const data = props.data;
    const infoBoxText =  `${data.email}
    ${data.phoneNumber}
    ${data.location}`;
    
    const styles = allStyles.PersonalInformation;

    return(
        <View style={styles.personalInformationView}>
            <View style={styles.left}>
                <Text style={styles.name}>{data.name} </Text>
                <View style={styles.links}>
                    <Text style={styles.link}>/MichaelUz</Text>
                    <Text style={styles.link}>/in/micuzo</Text>
                </View>
            </View>
            <View style={styles.infoBox}>
                <Text style={styles.infoBoxText}>{data.email}</Text>
                <Text style={styles.infoBoxText}>{data.phoneNumber}</Text>
                <Text style={styles.infoBoxText}>{data.location}</Text>
            </View>
        </View>
    )
}

const ShortProjExp = (props) => {

    const data = props.data;
    const styles = allStyles.ShortProjExp;

    const Jobs = data.map((job,index) => (
        <View key={index} style={styles.view}>
            <View style={styles.left}>
                <Text style={styles.title}>{job.company + ' | '}</Text>
                <Text style={styles.description}>{job.description}</Text>
            </View>
            <View style={styles.right}>
                <Text style={styles.timeline}>{job.timeline}</Text>
            </View>
        </View>
    ));


    return(
        <TitledSection section="Experience">
            {Jobs}
        </TitledSection>
    )
}

const ProjExp = (props) => {
    const data = props.data;
    const styles = allStyles.ProjExp;
    const shortStyles = allStyles.ShortProjExp;
    
    let key = props.title === 'Projects' ? 'title' : 'company';

    const ProjExps = data.map((element, index) => {

        if(element.responsibilities !== ''){
            const textComponents = readTextArea(element.responsibilities);
            const descComponents = readTextArea(element.description, true);

            return(
                <View key={index} style={styles.view}>
                    <View style={styles.header}>
                        <View style={styles.titleDesc}>
                            <Text style={styles.title}>{element[key] + ' | '}</Text>
                            {descComponents}
                        </View>
                        <View style={styles.timelineView}>
                            <Text style={styles.timeline}>{element.timeline}</Text>
                        </View>
                    </View>
                    <View style={styles.responsibilitiesView}>
                        {textComponents}
                    </View>
                </View>
            );
        }
        else{
            const descComponents = readTextArea(element.description, true);
            return (
                <View key={index + 'short'} style={shortStyles.view}>
                    <View style={shortStyles.left}>
                        <Text style={shortStyles.title}>{element[key] + ' | '}</Text>
                        {descComponents}
                    </View>
                    <View style={shortStyles.right}>
                        <Text style={shortStyles.timeline}>{element.timeline}</Text>
                    </View>
                </View>
            )
        }
    });

    return(
        <TitledSection section={props.title}>
            {ProjExps}
        </TitledSection>
    )
}

const Skills = (props) => {
    
    const data = props.data;
    const styles = {
        ...allStyles.Skills,
        generalText: allStyles.GeneralText
    }
    
    let skills = [[], [], []];
    let skillsJSX = [[], [], []];

    //Sort the skills into the correct arrays
    data.forEach((skill) => {
        if(!skill.type) skills[0].push(skill);
        else if(skill.type === 'language') skills[0].push(skill);
        else if(skill.type === 'technology') skills[1].push(skill);
        else if(skill.type === 'database') skills[2].push(skill);
    });

    //Make JSX elements of the skills
    for (let i = 0; i < skills.length; i++){
        skillsJSX[i] = skills[i].map((skill, index) => {
            if (skill.proficiency !== 'n/a')
                return <Text key={index+skill.name} style={styles.skill}>{skill.name}</Text>;

            return null;
        });
    }

    /*
    ---------------------------------------------------------------------
    |                            IMPORTANT                              |
    ---------------------------------------------------------------------
    */
    //React-pdf seems to set view width to 100% of container by default! Extra "fill" view here is included as a work-around to have lines have a dynamic length.
    return(
        <TitledSection section="Skills">
            <View style={styles.view}>
    
                <View style={styles.labelAndLineView}>
                    <Text style={styles.label}>Languages: </Text>
                    <View style={styles.lineView}>
                        {skillsJSX[0]}
                    </View>
                    <View style={styles.fill}></View>
                </View>

                <View style={styles.labelAndLineView}>
                    <Text style={styles.label}>Technologies: </Text>
                    <View style={styles.lineView}>
                        {skillsJSX[1]}
                    </View>
                    <View style={styles.fill}></View>
                </View>

                <View style={styles.labelAndLineView}>
                    <Text style={styles.label}>Databases: </Text>
                    <View style={styles.lineView}>
                        {skillsJSX[2]}
                    </View>
                    <View style={styles.fill}></View>
                </View>
            </View>
        </TitledSection>
    )
}

export {
    PersonalInformation, 
    Education,
    ProjExp as Projects,
    ProjExp as Experience,
    ShortProjExp as ShortExperience,
    ShortProjExp as ShortProjects,
    Skills
}

export const SectionTypes = {
    PERSONAL_INFORMATION: 'PersonalInformation',
    EDUCATION: 'Education',
    EXPERIENCE: 'Experience',
    PROJECTS: 'Projects',
    SKILLS: 'Skills'
}
