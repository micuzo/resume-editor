import emptyResume from "../Js/emptyResume";
import { ExperienceSchema, ProjectSchema, SkillSchema } from "./schemas";


const createExperience = () => ({...ExperienceSchema});

const createProject = () => ({...ProjectSchema});

const createSkill = () => ({...SkillSchema});

const createResume = () => ({...emptyResume});

const ResumeBuilder = {
    createExperience,
    createProject,
    createSkill,
    createResume
}

export default ResumeBuilder;