import { EducationSchema, PersonalInformationSchema, SectionStrings } from "./schemas";

let sampleResponsibilities = `-This line has a bullet point.
[This text is in bold.]
[<This text is highlighted and in bold.>]
<[So is this text]>
[The styling <can be] overlapped like this.>
Use \\\\ to escape like this \\[ \\< \\-
Manual text wrapping
is required.`

//To be used when new resume is created
export const tutorialResume  = {
    [SectionStrings.PersonalInformation]:{
        name: 'John Doe',
        phoneNumber: '',
        location: '',
        email: '',
        github: '',
        linkedin: '',
    },
    [SectionStrings.Education]:{
        degree: "",
        school: "",
        secondaryLine: "",
        timeline: "",
        location: ""
    },
    [SectionStrings.Experience]:[
        {
            company: 'Tutorial',
            description: 'This <section> contains some <[helpful] examples>.',
            responsibilities: sampleResponsibilities,
            timeline: '06/2018 - 07/2018'
        }
    ],
    [SectionStrings.Projects]:[],
    [SectionStrings.Skills]: [],
}

export const emptyResume = {
    [SectionStrings.PersonalInformation]: {...PersonalInformationSchema},
    [SectionStrings.Education]: {...EducationSchema},
    [SectionStrings.Experience]:[],
    [SectionStrings.Projects]:[],
    [SectionStrings.Skills]: [],   
}