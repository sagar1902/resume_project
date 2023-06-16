
import {
    Box,
    VStack,
    Text,
    HStack,
    Heading,
    Wrap,
    Tag,
    TagLabel,
    UnorderedList,
    ListItem,
} from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { useResume } from "../../context";
import { MdMail, MdLocalPhone, MdLocationPin } from "react-icons/md";
import { RiLinkedinBoxFill } from "react-icons/ri";

export default function CV2() {
    const { theme, about, educationList, skills, workList, projects, certificates, printElem } = useResume();
    const imgStyle = {
        width: "115px",
        height: "115px",
        margin: "15px",
        borderRadius: "50%",
    };
    const componentRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            console.log('innerWidth: ', window.innerWidth, 'initialvpWidth:', 1440)
            const scale = window.innerWidth / 1440;
            console.log(scale)
            componentRef.current.style.transform = `scale(${scale})`;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <Box
                bg={"white"}
                // minW={"210mm"}
                rounded={"md"}
                shadow={"md"}
                // overflow={"hidden"}
                // minH={"297mm"}
                ref={componentRef}
            >
                <div ref={printElem}>
                    <HStack
                        style={{ padding: '10px 15px' }}
                    >
                        {about.picture && (
                            <img
                                style={imgStyle}

                                src={about.picture}
                                alt="avatar"
                            />
                        )}

                        <VStack m={4} alignItems={"flex-start"} spacing={0.5}>
                            <Heading size='lg' fontSize='40px'>
                                {about.name ? about.name : "John Doe"}
                            </Heading>
                            <Text color={"black.500"}>
                                {about.role ? about.role : "Full Stack Web Developer"}
                            </Text>
                        </VStack>
                    </HStack>

                    <HStack
                        bg={theme}
                        color={"white"}
                        p={4}
                        justifyContent={"space-between"}
                    >
                        <HStack spacing={1}>
                            <MdMail />{" "}
                            <Text>{about.email ? about.email : "johndoe@gmail.com"}</Text>
                        </HStack>
                        <HStack spacing={1}>
                            <MdLocalPhone />{" "}
                            <Text>{about.phone ? about.phone : "+919876543210"}</Text>
                        </HStack>
                        <HStack spacing={1}>
                            <MdLocationPin />{" "}
                            <Text>{about.address ? about.address : "Chandigarh, IN"}</Text>
                        </HStack>
                        <HStack spacing={1}>
                            <RiLinkedinBoxFill />{" "}
                            <Text as="a" href={'https://www.linkedin.com/in/' + about.linkedin}>
                                {about.linkedin ? about.linkedin : 'johndoe123'}
                            </Text>
                        </HStack>
                    </HStack>

                    <HStack
                        w={"full"}
                        h={"full"}
                        my={2}
                        mb={6}
                        px={2}
                        justifyContent={"space-between"}
                        alignItems={"flex-start"}
                        spacing={1}
                    >
                        <VStack mx={2} alignItems={"flex-start"} w={"full"} spacing={6}>

                            {educationList.length >= 1 && <VStack alignItems={"flex-start"}>
                                <Heading as="h4" size="md" color={"gray.700"}>
                                    EDUCATION
                                </Heading>

                                {educationList.map((education) => {
                                    const { courseName, institute, startYr, endYr, grade } = education;

                                    return (
                                        <VStack
                                            spacing={0}
                                            alignItems={"flex-start"}
                                            w={"full"}
                                            pb={2}
                                            key={education.courseName}
                                        >
                                            <Text fontWeight={"medium"}>
                                                {courseName ? courseName : "B.Tech Computer Engineering"}
                                            </Text>
                                            <Text fontSize={"sm"}>
                                                {institute ? institute : "College of Engineering Chandigarh"}
                                            </Text>
                                            <HStack
                                                fontSize={"xs"}
                                                fontStyle={"italic"}
                                                justifyContent={"space-between"}
                                                w={"full"}
                                            >
                                                <Text>
                                                    {startYr ? startYr : 2014} - {endYr ? endYr : 2018}
                                                </Text>
                                                <Text>{grade ? grade : "8.7 CGPA"}</Text>
                                            </HStack>
                                        </VStack>
                                    );
                                })}
                            </VStack>}

                            {projects.length >= 1 && <VStack alignItems={"flex-start"}>
                                <Heading as="h4" size="md" color={"gray.700"}>
                                    PROJECTS
                                </Heading>

                                {projects.map((project) => {
                                    const { name, url, description: desc, duration } = project;
                                    return (
                                        <VStack
                                            spacing={0.5}
                                            alignItems={"flex-start"}
                                            lineHeight={1.3}
                                            pb={2}
                                            key={project.name}
                                        >
                                            <HStack as="a" href={url} target="_blank" spacing={0.5}>
                                                <Text fontWeight={"medium"} flex={"row"}>
                                                    {name ? name : "Project Name"}{" "}
                                                </Text>
                                            </HStack>
                                            <Text fontSize={"xs"} fontStyle={"italic"}>
                                                {duration ? duration : "3 weeks"}
                                            </Text>
                                            <UnorderedList pl={5}>
                                                {desc ?
                                                    desc.split("\n").map(point => {
                                                        return (
                                                            <>
                                                                {point ?
                                                                    <ListItem>
                                                                        <Text fontSize={"sm"} as="p">{point}</Text>
                                                                    </ListItem> :
                                                                    <></>}
                                                            </>
                                                        )
                                                    }) :
                                                    <ListItem>
                                                        <Text fontSize={"sm"} as="p">Lorem ipsum dolor sit amet consectetur adipisicing.</Text>
                                                    </ListItem>}
                                            </UnorderedList>
                                        </VStack>
                                    );
                                })}
                            </VStack>}

                            {certificates.length >= 1 && <VStack alignItems={"flex-start"}>
                                <Heading as="h4" size="md" color={"gray.700"}>
                                    CERTIFICATES
                                </Heading>

                                {certificates.map((certificate) => {
                                    const { title, date, url, provider } = certificate;

                                    return (
                                        <VStack
                                            spacing={0.5}
                                            alignItems={"flex-start"}
                                            lineHeight={1.3}
                                            pb={2}
                                            key={certificate.title}
                                        >
                                            <Text fontWeight={"medium"}>
                                                {title ? title : "Certificate Title"}
                                            </Text>
                                            <Text fontSize={"sm"}>
                                                {provider ? provider : "XYZ Services"}
                                            </Text>
                                            <Text fontSize={"xs"} fontStyle={"italic"}>
                                                {date ? date : "2023-06-13"}
                                            </Text>
                                        </VStack>
                                    );
                                })}
                            </VStack>}

                        </VStack>

                        <VStack mx={2} alignItems={"flex-start"} w={"full"} spacing={6}>

                            {workList.length >= 1 && <VStack alignItems={"flex-start"}>
                                <Heading as="h4" size="md" color={"gray.700"}>
                                    WORK EXPERIENCE
                                </Heading>

                                {workList.map((work) => {
                                    const {
                                        position,
                                        type,
                                        company,
                                        startDate,
                                        endDate,
                                        description: desc,
                                    } = work;

                                    return (
                                        <VStack
                                            spacing={0.5}
                                            alignItems={"flex-start"}
                                            lineHeight={1.3}
                                            pb={2}
                                            key={work.company}
                                        >
                                            <Text fontWeight={"medium"}>
                                                {position ? position : "Full Stack Developer"}
                                            </Text>
                                            <Text fontSize={"sm"}>
                                                {company ? company : "XYZ Infotech Services"} -{" "}
                                                {type ? type : "Full-time"}
                                            </Text>
                                            <Text fontSize={"xs"} fontStyle={"italic"}>
                                                {startDate ? startDate : "2018-03"} -{" "}
                                                {endDate ? endDate : "2021-12"}
                                            </Text>
                                            <ul>
                                                {desc
                                                    ? desc.split(/\r?\n/).map((text, index) => {
                                                        if(text){return (<li key={index}><Text fontSize={"sm"} as="p">
                                                            {text}
                                                        </Text></li>)}
                                                    })
                                                    : <li>"Fixed bugs from existing websites and implemented enhancements that significantly improved web functionality and speed."</li>}
                                            </ul>

                                        </VStack>
                                    );
                                })}
                            </VStack>}

                            {skills.length >= 1 && <VStack alignItems={"flex-start"}>
                                <Heading as="h4" size="md" color={"gray.700"}>
                                    SKILLS
                                </Heading>
                                <Wrap>
                                    {skills.map((skill, index) => (
                                        <Tag
                                            size={"md"}
                                            borderRadius="md"
                                            variant="solid"
                                            bg={theme.replace("400", "500")}
                                            key={index}
                                        >
                                            <TagLabel>{skill.name}</TagLabel>
                                        </Tag>
                                    ))}
                                </Wrap>
                            </VStack>}
                        </VStack>
                    </HStack>
                </div>
            </Box>
        </>
    )
}