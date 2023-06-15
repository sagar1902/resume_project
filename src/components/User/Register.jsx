import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Stack } from '@chakra-ui/react'
import {
    Flex,
    Heading,
    Input,
    Button,
    HStack,
    Text,
    // FormControl,
    // FormLabel,
    useToast,
    //   Switch,
    //   useColorMode,
    //   useColorModeValue,
} from '@chakra-ui/react';

const Register = () => {

    const navigate = useNavigate();

    const { isAuthenticated } = useSelector(state => state.user)
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/')
        }
    }, [])
    //   const { toggleColorMode } = useColorMode();
    //   const formBackground = useColorModeValue('gray.100', 'gray.700');


    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    function validatePassword(password) {
        // At least one letter((?=.* [A - Za - z])
        // At least one digit((?=.*\d))
        // A minimum length of eight characters({ 8, })
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordPattern.test(password);
    }

    const toast = useToast();
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
        pin: '',
    });

    const handleLogin = () => {
        console.log(user)
        var err_msg = ''
        if (!validateEmail(user.email)) {
            err_msg = 'check your email'
        }
        if (!validatePassword(user.password)) {
            err_msg = 'check your password'
        }

        // API CALL FOR LOGIN
        toast({
            // title: 'Account created.',
            description: err_msg ? err_msg : "Logged In",
            status: err_msg ? "error" : 'success',
            duration: 4000,
            isClosable: true,
        })
    }

    return (
        <Flex h="100vh" alignItems="center" justifyContent="center" mt={6} mb={6}>
            <Flex
                flexDirection="column"
                // bg={formBackground}
                p={12}
                borderRadius={8}
                boxShadow="lg"
            >
                <Heading mb={4}>Register</Heading>
                {/* <form onSubmit={handleLogin}>
                    <FormControl>
                        <FormLabel>Email</FormLabel> */}
                <HStack spacing={2} mt={5} mb={3}>
                    <Stack>
                        <Text ml={3}>First Name</Text>
                        <Input
                            name='firstName'
                            placeholder="First Name"
                            type="text"
                            variant="filled"
                            isRequired={true}
                            // mb={3}
                            onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }}
                        />
                    </Stack>
                    <Stack>
                        <Text ml={3}>Last Name</Text>
                        <Input
                            name='lastName'
                            placeholder="Last Name"
                            type="text"
                            variant="filled"
                            // isRequired={true}
                            // mb={3}
                            onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }}
                        /></Stack>
                </HStack>
                <Stack mt={3}>
                    <Text ml={3}>Email</Text>
                    <Input
                        name='email'
                        placeholder="johndoe@gmail.com"
                        type="email"
                        variant="filled"
                        isRequired={true}
                        mb={3}
                        onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }}
                    />
                </Stack>
                {/* </FormControl> */}
                {/* <FormControl>
                        <FormLabel>Password</FormLabel> */}
                <Stack mt={3}>
                    <Text ml={3}>Password</Text>
                    <Input
                        name='password'
                        placeholder="**********"
                        type="password"
                        variant="filled"
                        mb={3}
                        onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }}
                    />
                </Stack>

                {/* </FormControl> */}

                <HStack mb={3}>
                    <Stack mt={3}>
                        <Text ml={3}>Address</Text>
                        <Input
                            name='address'
                            placeholder="Address"
                            type="text"
                            variant="filled"
                            onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }}
                        />
                    </Stack>
                    <Stack mt={3}>
                        <Text ml={3}>Pincode</Text>
                        <Input
                            name='pin'
                            placeholder="PINCODE"
                            type="text"
                            variant="filled"
                            onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }}
                        />
                    </Stack>

                </HStack>
                <div>
                    <Button onClick={handleLogin} colorScheme="purple" w='50%' mb={8}>
                        Register
                    </Button>
                </div>
                <Link to='/login'>Login instead</Link>
                {/* </form> */}
            </Flex>
        </Flex>
    );
};

export default Register;
