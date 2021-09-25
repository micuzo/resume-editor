import { StyleSheet, Font } from '@react-pdf/renderer';
import fontLight from '../../assets/fonts/Roboto-Light.ttf';
import fontNormal from '../../assets/fonts/Roboto-Regular.ttf';
import fontBold from '../../assets/fonts/Roboto-Medium.ttf';

Font.register({
    family: "Roboto", 
    src: fontLight,
    fontWeight: 'light'
});

Font.register({
    family: "Roboto", 
    src: fontNormal,
    fontWeight: 'normal'
});

Font.register({
    family: "Roboto", 
    src: fontBold,
    fontWeight: 'bold'
});


//Colors
const black = '#000000';
const white = '#ffffff';
const darkBlue = '#314871';
const beige = "#DDDDD5";
const headingGrey = '#F3F3F3';
const darkGreen = "#484B36";
const highlightBlue = '#e4f1fb';
const grey = '#737373';

//font sizes
const nameFS = 36;
const infoFS = 9;
const headingTitleFS = 12;
const large = 10;
const regular = 9.5;
const small = 8;
const bulletSize = 14;
const descriptionSize = 10;

//other
const sectionPadding = '10pt';
const sectionMargin = '10pt';

//Word -> PDF font size
// Word * 1.39 = PDF font size

//styles
const styles = StyleSheet.create({
    Meta:{
        pdfViewer: {
            width: '100%',
            height: '100%'
        },
        page:{
            display: 'flex',
            flexDirection: 'column',
            padding: '30pt',
            alignItems: 'center',
            fontFamily: "Roboto",
        }
    },
    Section:{
        titledSection:{
            display: 'flex',
            width: '100%',
            marginBottom: sectionMargin,
        },
        heading:{
            width: '100%',
            backgroundColor: headingGrey,
            padding: '5pt 0pt 5pt 5pt',
            borderRadius: '5pt'
        },
        headingTitle:{
            color: darkBlue,
            fontWeight: 'bold',
            fontSize: headingTitleFS,
            marginRight: '10pt'
        },
    },
    PersonalInformation:{
        personalInformationView:{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'end',
            marginBottom: sectionPadding
        },
        left:{
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: '0pt'
        },
        links:{
            display: 'flex',
            flexDirection: 'row',
            marginLeft: 5.5
        },
        linkText:{
            fontSize: regular,
            fontWeight: 'light',
            color: grey,
            textDecoration: 'none',
        },
        linkBox:{
            display: 'flex',
            flexDirection: 'row',
            marginRight: 15,
        },
        icon:{
            width: 11,
            height: 11,
            marginRight: 5
        },
        name:{ 
            fontSize: nameFS,
            color: darkBlue,
            marginBottom: 5,
            fontWeight: 'light',
            marginLeft: 2.5
        },
        infoBox:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'end',
            backgroundColor: beige,
            fontSize: infoFS,
            color: darkGreen,
            border: 'none',
            padding: '10pt 10pt 8pt 10pt',
            borderRadius: '10pt'
        },
        infoBoxText:{
            display: 'block',
            fontWeight: 'bold',
            marginBottom: '2pt'
        }

    },
    Education:{
        degree:{
            color: darkBlue,
            fontSize: large,
            fontWeight: 'normal'
        },
        school:{
            color: black,
            fontSize: large,
            fontWeight: 'normal'
        },
        timeline:{
            color: grey,
            fontSize: small,
            fontWeight: 'normal'
        },
        location:{
            color: grey,
            fontSize: small,
            fontWeight: 'normal'
        },
        secondaryLine:{
            color: grey,
            fontSize: regular,
            fontWeight: 'normal'
        },
        educationView:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 12,
            paddingHorizontal: '5pt'
        },
        educationLeft:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
        },
        degreeSchoolBox:{
            display: 'flex',
            flexDirection: 'row'
        },
        educationRight:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end'
        }
    },
    ShortProjExp:{
        view:{
            paddingTop: sectionPadding,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            paddingHorizontal: '5pt'
        },
        left:{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        },
        right:{
            justifyContent: 'flex-end'
        },
        title:{
            color: darkBlue,
            fontWeight: 'normal',
            fontSize: regular
        },
        timeline:{
            color: grey,
            fontSize: small,
            fontWeight: 'normal'
        }
    },
    ProjExp:{
        view:{
            paddingTop: sectionPadding,
            display: 'flex',
            flexDirection: 'column',
            paddingHorizontal: '5pt'
        },
        header:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
            marginBottom: '0pt',
            paddingBottom: '0pt',
        },
        titleDesc:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginBottom: '3pt'
        },
        title:{
            color: darkBlue,
            fontWeight: 'normal',
            fontSize: regular,
        },
        description:{
            color: black,
            fontSize: descriptionSize,
            fontWeight: 'normal',
        },
        responsibilitiesView:{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '2pt',
            flexWrap: 'wrap',
            width: '100%'
        },
        responsibilities:{
            color: black,
            fontSize: regular
        },
        timelineView:{
            display: 'flex',
            flexDirection: 'row',
        },
        timeline:{
            color: grey,
            fontSize: small,
            fontWeight: 'normal'
        },
        tags:{
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'row',
            margin: 0,
            marginLeft: '5pt',
            padding: 0,
        },
        tag:{
            fontSize: regular,
            paddingHorizontal: '5pt',
            color: grey,
            marginHorizontal: '1pt',
            fontWeight: 'bold'
        },
        comma:{
            color: white
        }
    },
    Skills: {
        view:{
            display: 'flex',
            flexDirection: 'column',
            padding: '0pt 5pt 0pt 5pt',
            marginTop: 5,
        },
        labelAndLineView:{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '4pt',
        },
        lineView:{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            height: '18pt',
            backgroundColor: beige,
            borderRadius: '5pt',
        },
        skill:{
            paddingHorizontal: '8pt',
            color: darkGreen,
            fontSize: regular,
            fontWeight: 'bold',
            border: 'none',
            backgroundColor: beige,
            borderRadius: '5pt'
        },
        fill:{
            width:'100%'
        },
        label:{
            fontSize: regular,
            fontWeight: 'normal',
            color: darkBlue,
            width: '70pt'
        },
        invisiComma:{
            color: beige
        }
    },
    GeneralText: {
        highlightedBold:{
            fontWeight: 'normal',
            fontSize:  regular,
            backgroundColor: highlightBlue,
            margin: 0,
            padding: 0,
        },
        bold:{
            fontWeight: 'normal',
            fontSize:  regular,
            paddingBottom: '0pt',
            margin: 0,
            padding: 0,
        },
        highlighted:{
            fontSize: regular,
            backgroundColor: highlightBlue,
            margin: 0,
            padding: 0
        },
        regular:{
            color: black,
            fontWeight: 'light',
            fontSize: regular,
            margin: 0,
            padding: 0,
        },
        whiteRegular: {
            color: white,
            fontSize: regular,
            margin: 0,
            padding: 0
        },
        boldSmall:{
            fontWeight: 'normal',
            fontSize:  small,
        },
        lineView:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            alignItems: 'center',
            marginBottom: '4pt'
        },
        lineViewDesc:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            alignItems: 'center',
        },
        bulletPoint:{
            fontWeight: 'light',
            fontSize: regular,
            color: black,
            width: bulletSize / 2,
            margin: 0,
            height: '100%',
            //paddingTop: 0.5
        },
        indent:{
            fontWeight: 'normal',
            fontSize: bulletSize,
            width: bulletSize / 2,
            margin: 0,
            height: '100%',
            whiteSpace: 'pre'
        },
    }
});

export default styles;