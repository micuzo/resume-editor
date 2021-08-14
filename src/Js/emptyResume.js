let sampleResponsibilities = `-This line has a bullet point.
[This text is in bold.]
[<This text is highlighted and in bold.>]
<[So is this text]>
[The styling <can be] overlapped like this.>
Use \\\\ to escape like this \\[ \\< \\-
Manual text wrapping
is required.`

const emptyResume  = {
    PersonalInformation:{
        name: 'John Doe',
        phoneNumber: '',
        location: '',
        email: ''
    },
    Education:{
        degree: "",
        school: "",
        secondaryLine: "",
        timeline: "",
        location: ""
    },
    Experience:[
        {
            company: 'Tutorial',
            description: 'This <section> contains some <[helpful] examples>.',
            responsibilities: sampleResponsibilities,
            timeline: '06/2018 - 07/2018'
        }
    ],
    Projects:[],
    Skills: [],
}

export default emptyResume;