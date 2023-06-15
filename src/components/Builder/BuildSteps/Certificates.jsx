import {
    Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, FormControl, FormLabel, HStack, Input,
    // NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, VStack, 
    Textarea, Select, Text
} from '@chakra-ui/react'
// import React, { useState } from 'react'
import { useResume } from '../../../context';
import { v4 as uuidv4 } from 'uuid';
import { MdDelete } from 'react-icons/md';

const Certificate = () => {

    const { certificates, setCertificates } = useResume();

    const addMore = () => {
        setCertificates([...certificates, {
            id: uuidv4(),
            title: "",
            date: "",
            url: "",
            provider: "",
        }]);
    }

    const handleChange = (e, id) => {
        const { name, value } = e.target;
        const updatedCertificates = certificates.map((certificate) => (
            certificate.id === id ? Object.assign(certificate, { id: uuidv4(), [name]: value }) : certificate
        ));
        setCertificates(updatedCertificates);
    }

    const deleteCertificate = (id) => {
        setCertificates(certificates.filter((elem) => elem.id !== id))
    }

    return (
        <>
            <Accordion allowToggle defaultIndex={[0]}>
                {
                    certificates.map((certificate, index) => (
                        <AccordionItem key={index}>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <Text fontWeight={'medium'}>{certificate.title ? certificate.title : "Title"}</Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>

                                <Input value={certificate.title} onChange={(e) => handleChange(e, certificate.id)} name='title' type='text' variant='filled' placeholder='Certificate Title' mb={3} />

                                <Input value={certificate.url} onChange={(e) => handleChange(e, certificate.id)} name='url' type='url' variant='filled' placeholder='Certificate URL' mb={3} />

                                <FormControl>
                                    <FormLabel htmlFor='date'>Issue Date</FormLabel>
                                    <Input value={certificate.date} onChange={(e) => handleChange(e, certificate.id)} name='date' id='date' type='date' variant='filled' placeholder='Date' mb={3}  />
                                </FormControl>

                                <Input value={certificate.provider} onChange={(e) => handleChange(e, certificate.id)} name='provider' type='text' variant='filled' placeholder='provider organization' mb={3} />

                                {/* <HStack spacing={3}>
                                    <Input value={certificate.company} onChange={(e) => handleChange(e, certificate.id)} name='company' type='text' variant='filled' placeholder='Company' />
                                    <Select value={certificate.type} onChange={(e) => handleChange(e, certificate.id)} name='type' variant='filled' placeholder='Employment Type'>
                                        <option value='Full-time'>Full-time</option>
                                        <option value='Part-time'>Part-time</option>
                                        <option value='Internship'>Internship</option>
                                        <option value='Freelance'>Freelance</option>
                                    </Select>
                                </HStack>

                                <HStack spacing={3} mt={4}>
                                    <FormControl>
                                        <FormLabel htmlFor='startDate'>Start Date</FormLabel>
                                        <Input value={certificate.startDate} onChange={(e) => handleChange(e, certificate.id)} name='startDate' id='startDate' type='month' variant='filled' placeholder='Start Date' />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel htmlFor='endDate'>End Date</FormLabel>
                                        <Input value={certificate.endDate} onChange={(e) => handleChange(e, certificate.id)} name='endDate' id='endDate' type='month' variant='filled' placeholder='Start Date' />
                                    </FormControl>

                                </HStack>

                                <FormControl mt={3}>
                                    <FormLabel htmlFor='description'>Description</FormLabel>
                                    <Textarea value={certificate.description} onChange={(e) => handleChange(e, certificate.id)} name='description' id='description' variant='filled' placeholder='Description...' />
                                </FormControl> */}

                                <Button rightIcon={<MdDelete />} onClick={() => deleteCertificate(certificate.id)} mt={3} colorScheme={'red'}>Delete</Button>

                            </AccordionPanel>
                        </AccordionItem>
                    ))
                }
            </Accordion>
            <Button colorScheme={'purple'} my={5} onClick={addMore}>Add Certificate</Button>
        </>
    )
}

export default Certificate
