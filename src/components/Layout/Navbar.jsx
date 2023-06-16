// import { IconButton } from '@chakra-ui/button';
import {Link} from 'react-router-dom';
import {
    Stack,
    Flex,
    Heading,
    Spacer,
    HStack,
    Text,
    Button,
} from "@chakra-ui/react";
// import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
    return (
        <Stack
            p={5}
            bg={'gray.50'}
            as='header'
            w='full'
        >
            <Flex
                w='full'
                alignItems={'center'}
            >
                {/* <Heading as='h3' ml={{ base: 0, sm: 8 }} size='lg' fontWeight={'thin'} color='purple.500' style={{ fontFamily: "Pacifico" }}><img src="/safari-pinned-tab.svg" alt="Resumer"/></Heading> */}
                <Heading as='h3' ml={{ base: 0, sm: 8 }} size='lg' fontWeight={'thin'} color='purple.500' style={{ fontFamily: "Pacifico" }}>Resumer</Heading>
                <Spacer></Spacer>
                <HStack spacing={10} mr={{ base: 0, sm: 8 }} as='nav' style={{ fontFamily: 'Poppins' }}>
                    <Text fontSize='lg'><Link to='/'>Home</Link></Text>
                    {/* <Text as='a' href='/templates' fontSize='lg'>Templates</Text> */}
                    <Text fontSize='lg'><Link to='about'>About</Link></Text>
                    <Button colorScheme={'purple'} fontWeight={'medium'}><Link to='templates'>Create Resume</Link></Button>
                </HStack>
            </Flex>

        </Stack>
    )
}

export default Navbar
