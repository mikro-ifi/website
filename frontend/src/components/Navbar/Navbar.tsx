import {VStack, HStack, Heading, Text, Spacer, Icon, Image} from '@chakra-ui/react';
import { List } from 'react-feather';
import NavItem from './NavItem'
import {navItems} from './navbar.config'

export default function NavBar() {
    return (
        <HStack gap={10} pl={10} pr={10} bg="#0E1A17" w="100%" h="80px" justify="space-between">

            <Image 
                src="mikro_logo.png"
                boxSize={12}
            />

            <HStack gap={12}>
                {navItems.map((nav) => (
                    <NavItem text={nav.text} path={nav.path}/>
                ))}

                <Icon as={List} cursor="pointer" color="#CA8F54" boxSize={8}></Icon>

            </HStack>

        </HStack>
    )
}