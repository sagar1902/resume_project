import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { } from '@chakra-ui/react'
import {
    Flex,
    Heading,
    Input,
    Button,
    // FormControl,
    // FormLabel,
    useToast,
    //   Switch,
    //   useColorMode,
    //   useColorModeValue,
} from '@chakra-ui/react';

const Login = () => {

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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        var err_msg = ''
        if (!validateEmail(email)) {
            err_msg ='check your email'
        }
        if (!validatePassword(password)) {
            err_msg = 'check your password'
        }

        // API CALL FOR LOGIN
        toast({
            // title: 'Account created.',
            description: err_msg?err_msg:"Logged In",
            status: err_msg?"error":'success',
            duration: 4000,
            isClosable: true,
        })
    }

    return (
        <Flex h="100vh" alignItems="center" justifyContent="center">
            <Flex
                flexDirection="column"
                // bg={formBackground}
                p={12}
                borderRadius={8}
                boxShadow="lg"
            >
                <Heading mb={6}>Login</Heading>
                {/* <form onSubmit={handleLogin}>
                    <FormControl>
                        <FormLabel>Email</FormLabel> */}
                <Input
                    placeholder="johndoe@gmail.com"
                    type="email"
                    variant="filled"
                    isRequired={true}
                    mb={3}
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                {/* </FormControl> */}
                {/* <FormControl>
                        <FormLabel>Password</FormLabel> */}
                <Input
                    placeholder="**********"
                    type="password"
                    variant="filled"
                    mb={6}
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                {/* </FormControl> */}

                <Button onClick={handleLogin} colorScheme="purple" mb={8}>
                    Login
                </Button>
                <Link to='/register'>Create Account</Link>
                {/* </form> */}
            </Flex>
        </Flex>
    );
};

export default Login;
