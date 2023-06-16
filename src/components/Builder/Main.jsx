import {
    Box,
    Container,
    Stack,
    Text,
    HStack,
    Heading,
    Button,
} from '@chakra-ui/react';
// import { useEffect, useRef } from 'react';
import Builder from './Builder';
import ResumePreview from './ResumePreview';
// import { useParams } from 'react-router-dom';
import ThemeSelect from './Theme/ThemeSelect';
import { useReactToPrint } from 'react-to-print';
import { useResume } from '../../context';
import { MdOutlineFileDownload, MdOutlineSave } from 'react-icons/md';

const Main = () => {

    const state = useResume();
    const { about, educationList, skills, workList, projects, theme, certificates, template, printElem } = useResume();

    const handlePrint = useReactToPrint({
        content: () => printElem.current,
    });

    const handleSave  = () =>{
        console.log("CALL API to Save",{about, educationList, skills, workList, projects, theme, certificates, template})
    }

    return (
        <Container
            bg={'gray.50'}
            minW={'full'}
            py={10}
            id='builder'
        >

            <Heading as='h4' size='lg' textAlign={'center'} color={'gray.700'} style={{ fontFamily: 'Poppins' }} fontWeight={'medium'}>Resume Builder</Heading>

            <Container maxW={'7xl'} px={8} my={3}>

                <Stack justifyContent={'space-between'} pt={4} direction={{ base: 'column', sm: 'row' }}>
                    <ThemeSelect />
                    <HStack>
                        <Button rightIcon={<MdOutlineSave />} onClick={handleSave} colorScheme={'purple'}>Save</Button>
                        <Button rightIcon={<MdOutlineFileDownload />} onClick={handlePrint} colorScheme={'purple'}>Download</Button>
                    </HStack>
                </Stack>

            </Container>

            <Stack
                direction={{ base: 'column', md: 'row' }}
                // mt={16}
                gap={4}
                mx={{ base: 2, md: 12 }}
                my={8}
                alignItems={'flex-start'}
                justifyContent={'space-between'}
                // style = {{transform}}
            >
                <Builder />
                <div style={{width:'49vw', height:'70vw'}}>
                    <ResumePreview />
                </div>
               
            </Stack>

        </Container>
    )
}

export default Main
