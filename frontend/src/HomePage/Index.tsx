import { VStack, HStack, Heading, Text, Image, Button, Span, Icon} from '@chakra-ui/react';
import { Play } from 'react-feather';

export default function HomePage() {
    return (
        <HStack w="100%" pl={10} pr={10} bg="#172C26">
            <VStack align="start" p={20}>
                <Heading fontSize={40} lineHeight="1">
                    <Span color="#CA8F54">Mikro</Span> – linjeforeningen for robotikk og intelligente systemer. 
                </Heading>
                
                <Text pt={5} pb={5}>
                    Er du interessert i robotikk, kunstig intelligens, programmering eller innebygde systemer? Da er Mikro stedet for deg. Her møter du engasjerte studenter, lærer nye ting og blir en del av et inkluderende fellesskap – sammen med vår maskot Ollie.                                    
                </Text>

                <Button w={200} h={45} borderRadius={18} bg="#8BDBBB">
                    
                    Bli kjent med oss

                    <Icon as={Play} color="#172C26"></Icon>
                </Button>
            </VStack>

            <Image src="/otter_with_speech.png" boxSize={500}/>
        </HStack>
    )
} 