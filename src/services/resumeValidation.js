//The validate functions make sure the structure of the different sections in our resume conforms to
//what we want.

import { PersonalInformationSchema, EducationSchema, ProjectSchema, ExperienceSchema, SkillSchema, SectionStrings } from "./schemas";

const validateSimpleObject = (targetObj, inputObj) => {
    if(inputObj === undefined) return {...targetObj};

    const outputObj = {...targetObj};
    const targetObjKeys = Object.keys(targetObj);

    targetObjKeys.forEach(key => {
        const newVal = inputObj[key] || outputObj[key];
        outputObj[key] = newVal;
    });

    return outputObj;
}

const validateArrayOfSimpleObjects = (targetObj, inputArr) => {
    return inputArr.map(obj => validateSimpleObject(targetObj, obj));
}

//Validation functions per Section
const validatePersonalInformation = (inputPersonalInformation) => validateSimpleObject(PersonalInformationSchema, inputPersonalInformation);
const validateEducation = (inputEducation) => validateSimpleObject(EducationSchema, inputEducation);
const validateExperience = (inputExp) => validateArrayOfSimpleObjects(ExperienceSchema, inputExp);
const validateProjects = (inputProjs) => validateArrayOfSimpleObjects(ProjectSchema, inputProjs);
const validateSkills = (inputSkills) => validateArrayOfSimpleObjects(SkillSchema, inputSkills);


const validateSectionFunctions = {
    [SectionStrings.PersonalInformation]: validatePersonalInformation,
    [SectionStrings.Education]: validateEducation,
    [SectionStrings.Experience]: validateExperience,
    [SectionStrings.Projects]: validateProjects,
    [SectionStrings.Skills]: validateSkills
}

const validateResume = (resume) => {
    let outputResume = {};

    Object.values(SectionStrings).forEach(section => {
        outputResume[section] = validateSectionFunctions[section](resume[section]);
    });
    
    return outputResume;
}

export default validateResume;
