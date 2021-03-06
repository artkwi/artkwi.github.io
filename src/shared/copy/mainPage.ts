interface ICopy {
    [key: string]: any;
}

const copy: ICopy = {
  EN: {
    welcome: 'Hello!',
    aboutMe: 'About me',
    aboutMeDescription:
            `My name is Artur Kwiatkowski. I have graduated in Computer Science at Adam Mickiewicz University in Poznań. I moved to Kraków in April 2019. I have been working in Dev and Deliver as front-end developer for over a year. In my work I mainly use Vue.js and React.js.
I appreciate the nice atmosphere, teamwork and good coffee `,
    education: 'Education',
    experience: 'Experience',
    skills: 'Skills',
    contact: 'Contact',
    education1:
            'Adam Mickiewicz University in Poznań - IT Engineer at Faculty of Mathematics and Computer Science - Bachelor of Engineering',
    education2:
            'Università della Calabria - Erasmus+ exchange programme in Italy',
    education3:
            'Stanisław Staszic secondary technical school of information technology in Nowy Tomyśl - IT Technician degree and Golden Student honour',

    educationDate1: '10.2015 – 03.2019',
    educationDate2: '10.2017 – 03.2018',
    educationDate3: '09.2011 – 04.2015',

    experience0: 'Dev and Deliver - front-end developer (Vue, React, TypeScript)',
    experience1: 'Internship in Żabka Polska - first line of support',
    experience2: 'Internship in Phoenix Contact - .NET programmer',
    experience3:
            'Europass Mobility international intership of information technology in „BBS1” in German',

    experienceDate0: '05.2019 – present',
    experienceDate1: '07.2018 – 09.2018',
    experienceDate2: '08.2017',
    experienceDate3: '02.2014 – 03.2014',

    htmlSkills: [
      'HTML', 'CSS/SASS', 'Styled Components', 'Flex', 'Bootstrap', 'BEM', 'RWD'
    ],
    jsSkills: ['JavaScript/ES6', 'React/Redux', ' Vue/Vuex', 'TypeScript'],
    databaseSkills: ['GraphQL', 'SQL'],
    terminalSkills: ['Git', 'terminal'],
    OOPSkill: 'Object-oriented programming',
    otherSkills: ['SCRUM', 'Jira', 'teamwork'],
    languageSkill: 'English B2'
  },
  PL: {
    welcome: 'Witaj!',
    aboutMe: 'O mnie',
    aboutMeDescription:
            'Nazywam się Artur Kwiatkowski. Jestem inżynierem informatyki Uniwersytetu im. Adama Mickiewicza w Poznaniu. W kwietniu 2019 roku przeprowadziłem się do Krakowa. Od ponad roku pracuję jako front-end developer w Dev and Deliver. W mojej pracy głównie wykorzystuję Vue.js i React.js. Doceniam miłą atmosferę, pracę zespołową i dobrą kawę ',
    education: 'Wykształcenie',
    experience: 'Doświadczenie',
    skills: 'Umiejętności',
    contact: 'Kontakt',
    education1:
            'Uniwersytet im. Adama Mickiewicza w Poznaniu na Wydziale Matematyki i Informatyki - tytuł inżyniera',
    education2:
            'Università della Calabria - studia z programu Erasmus+ we Włoszech',
    education3:
            'Technikum informatyczne w Zespole Szkół nr 2 im. Stanisława Staszica w Nowym Tomyślu - tytuł technika informatyka oraz złotego absolwenta',

    educationDate1: '10.2015 – 03.2019',
    educationDate2: '10.2017 – 03.2018',
    educationDate3: '09.2011 – 04.2015',

    experience0: 'Dev and Deliver - programista front-end (Vue, React, TypeScript)',
    experience1: 'Żabka Polska – stażysta w zespole wsparcia IT',
    experience2:
            'Phoenix Contact – praktyki w dziale IT (programista .NET)',
    experience3:
            'Międzynarodowe praktyki zawodowe odbyte w ramach projektu europejskiego w Niemczech w placówce „BBS1” (Europass Mobilität)',

    experienceDate0: '05.2019 – present',
    experienceDate1: '07.2018 – 09.2018',
    experienceDate2: '08.2017',
    experienceDate3: '02.2014 – 03.2014',

    htmlSkills: [
      'HTML', 'CSS/SASS', 'Styled Components', 'Flex', 'Bootstrap', 'BEM', 'RWD'
    ],
    jsSkills: ['JavaScript/ES6', 'React/Redux', ' Vue/Vuex', 'TypeScript'],
    databaseSkills: ['GraphQL', 'SQL'],
    terminalSkills: ['Git', 'terminal'],
    OOPSkill: 'Programowanie obiektowe',
    otherSkills: ['SCRUM', 'Jira', 'praca zespołowa'],
    languageSkill: 'Angielski B2'
  }
};

export default copy;
