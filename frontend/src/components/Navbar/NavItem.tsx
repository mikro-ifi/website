import type { Icon as IconType} from 'react-feather'
import { Text, HStack, VStack } from '@chakra-ui/react'

type NavItemProps = {
    text: string;
    path: string
}

export default function NavItem({
    text, 
    path
} : NavItemProps) {
    return (
        <Text fontSize={19} cursor="pointer">
            {text}
        </Text>
    );
}