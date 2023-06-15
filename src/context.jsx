import { createContext, useContext, useRef, useState } from "react";

const ResumeContext = createContext();

export const useResume = () => useContext(ResumeContext);

export const ResumeProvider = ({ children }) => {

    const printElem = useRef();

    const [theme, setTheme] = useState('purple.400');
    const [template, setTemplate] = useState(0);

    const [about, setAbout] = useState({
        name: "",
        role: "",
        email: "",
        phone: "",
        address: "",
        linkedin: "",
        picture:"",
    });

    const [educationList, setEducationList] = useState([
        {
            // id: "",
            courseName: "",
            institute: "",
            startYr: 0,
            endYr: 0,
            grade: "",
        },
    ]);

    const [skills, setSkills] = useState([
        {
            id: 1,
            name: "JavaScript",
        },
        {
            id: 2,
            name: "ReactJS",
        },
        {
            id: 3,
            name: "NodeJS",
        },
        {
            id: 4,
            name: "MongoDB",
        },
        {
            id: 5,
            name: "ExpressJS",
        },
        {
            id: 6,
            name: "RestAPI",
        },
        {
            id: 7,
            name: "jQuery",
        },
        {
            id: 8,
            name: "MySQL",
        },
        {
            id: 9,
            name: "Ajax",
        },
        {
            id: 10,
            name: "GitHub",
        },
        {
            id: 11,
            name: "HTML",
        },
        {
            id: 12,
            name: "CSS",
        },
        {
            id: 13,
            name: "Bootstrap",
        },
    ]);

    const [workList, setWorkList] = useState([
        {
            id: 0,
            position: "Frontend Developer",
            company: "ABC",
            type: "IT",
            startDate: "2020-05",
            endDate: "2021-04",
            description: "work description",
        },
    ]);

    const [projects, setProjects] = useState([
        {
            id: 0,
            name: "",
            description: "",
            url: "",
            duration: "",
        },
    ]);

    const [certificates, setCertificates] = useState([
        {
            id: 0,
            title: "",
            date: "",
            url: "",
            provider: "",
        }
    ])


    // useEffect(() => {
    //     toast({
    //         title: `${theme.split(".", 1)} selected`,
    //         status: 'success',
    //         isClosable: true,
    //       })
    // }, [theme]);

    const value = { about, setAbout, educationList, setEducationList, skills, setSkills, workList, setWorkList, projects, setProjects, printElem, theme, setTheme, certificates, setCertificates, template, setTemplate };

    return (
        <ResumeContext.Provider value={value}>
            {children}
        </ResumeContext.Provider>
    )
}