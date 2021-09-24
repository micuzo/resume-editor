import { emptyResume, tutorialResume } from "./sampleResumes";
import { ExperienceSchema, ProjectSchema, SkillSchema } from "./schemas";


const createExperience = () => ({...ExperienceSchema});

const createProject = () => ({...ProjectSchema});

const createSkill = () => ({...SkillSchema});

const createEmptyResume = () => ({...emptyResume});

const createTutorialResume = () => ({...tutorialResume})

const ResumeBuilder = {
    createExperience,
    createProject,
    createSkill,
    createResume: createEmptyResume,
    createTutorialResume
}

export default ResumeBuilder;