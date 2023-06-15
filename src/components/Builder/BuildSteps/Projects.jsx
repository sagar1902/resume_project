import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Input, Button, 
    // Select, FormControl, FormLabel, HStack, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, 
    VStack, Textarea, Text } from '@chakra-ui/react'
import { useResume } from '../../../context';
import { v4 as uuidv4 } from 'uuid';
import { MdDelete } from 'react-icons/md';

const Projects = () => {

    const { projects, setProjects } = useResume();

    const addMore = () => {
        setProjects([...projects, {
            id: uuidv4(),
            name: "",
            description: "",
            url: "",
            duration: "",
        }]);
    }

    const handleChange = (e, id) => {
        const { name, value } = e.target;
        const updatedProject = projects.map((project) => (
            project.id === id ? Object.assign(project, { id: uuidv4(), [name]: value }) : project
        ));
        setProjects(updatedProject);
    }

    const deleteProject = (id) => {
        setProjects(projects.filter((elem) => elem.id !== id))
    }

    return (
        <>
            <Accordion allowToggle defaultIndex={[0]}>
                {
                    projects.map((project, index) => (
                        <AccordionItem key={index}>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <Text fontWeight={'medium'}>{project.name ? project.name : "Project Name"}</Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>

                                <VStack spacing={3} alignItems={'flex-end'}>
                                    <Input value={project.name} onChange={(e) => handleChange(e, project.id)} name='name' id='name' type='text' variant='filled' placeholder='Project Name' />

                                    <Input value={project.url} onChange={(e) => handleChange(e, project.id)} name='url' id='url' type='url' variant='filled' placeholder='Project URL (optional)' />

                                    <Textarea value={project.description} onChange={(e) => handleChange(e, project.id)} name='description' id='description' variant='filled' placeholder='Description...' />

                                    <Input value={project.duration} onChange={(e) => handleChange(e, project.id)} name='duration' id='duration' variant='filled' placeholder='Project Duration' />

                                    <Button rightIcon={<MdDelete />} onClick={() => deleteProject(project.id)} colorScheme={'red'}>Delete</Button>
                                </VStack>

                            </AccordionPanel>
                        </AccordionItem>
                    ))
                }
            </Accordion>
            <Button colorScheme={'purple'} my={5} onClick={addMore}>Add More</Button>
        </>
    )
}

export default Projects
