export const PersonalInformationSchema = {
    name: '',
    phoneNumber: '',
    location: '',
    email: '',
    github: '',
    linkedin: '',
}

export const EducationSchema = {
    degree: "",
    school: "",
    secondaryLine: "",
    timeline: "",
    location: ""
}

export const ExperienceSchema = {
company: '',
description: '',
timeline: '',
tags: [],
responsibilities: ''
}

export const ProjectSchema = {
title: '',
description: '',
timeline: '',
tags: [],
responsibilities: ''
}

export const SkillSchema = {
    name: '',
    type: ''
}

export const SkillTypes = {
    Language: "Language", 
    Technology: "Technology", 
    Database: "Database"
};

export const SectionStrings = {
    PersonalInformation: "PersonalInformation",
    Education: "Education",
    Experience: "Experience",
    Projects: "Projects",
    Skills: "Skills"
}
