
import {
    Flex,
    Heading,
    Image,
    Text,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import templateConfig from './Templates/templateConfig'

export default function TemplateSelection() {

    // const { loading } = useSelector(state => state.template);

    // const templateConfig = [
    //     { file: 'cv2', url: '' },
    //     { file: 'cv4', url: '' },
    //     { file: 'cv5', url: '' },
    //     { file: 'cv9', url: '' },
    //     { file: 'cv11', url: '' },
    //     { file: 'cv13', url: '' },
    // ]

    // const handleTemplate = () => {}

        
    return (
        // <Container
        // w='full'
        // >
        //     {templateConfig.map((e)=>{
        //         return(
        //             <img src={`${e.file}.jpg`} alt={e.file} key={e.file} />
        //         )
        //     })}
        // </Container>
        <>
            <Heading size={'lg'} align="center" m={8}>Select a Template</Heading>
            <Flex justify="center" align="center" wrap="wrap">
                {templateConfig.map((e) => {
                    return (
                        <Link to={`/builder/${e.file}`} key={e.file}>
                            <Text as='b'>{e.file}</Text>
                            <Image
                                src={`${e.file}.jpg`}
                                alt={e.file}
                                m={'2'}
                                mb={5}
                                boxShadow={'0px 0px 11px 1px'}
                                sx={{
                                    ':hover': {
                                        transform: 'scale(1.2)',
                                    },
                                }}
                                // onClick={handleTemplate}
                            />
                        </Link>
                    )
                })}
            </Flex>
        </>
    )
}