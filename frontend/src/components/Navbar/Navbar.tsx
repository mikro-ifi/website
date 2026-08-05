import {VStack, HStack, Heading, Text, Spacer, Icon} from '@chakra-ui/react';
import { List } from 'react-feather';

export default function NavBar() {
    return (
        <HStack gap={10} pl={10} pr={10} bg="green" w="100%" h="70px">

            <Heading fontSize={40}>Mikro</Heading>

            <Spacer></Spacer>

            <Text fontSize={25} cursor="pointer">Om oss</Text>
            <Text fontSize={25} cursor="pointer">Intern</Text>
            <Text fontSize={25} cursor="pointer">Arrangementer</Text>
            <Text fontSize={25} cursor="pointer">Vedtekter</Text>
            <Text fontSize={25} cursor="pointer">Kontakt</Text>
            <Icon as={List} cursor="pointer"></Icon>
            
        </HStack>
    )
}