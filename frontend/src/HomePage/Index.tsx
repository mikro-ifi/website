import { VStack, HStack, Heading, Text, Image} from '@chakra-ui/react';

export default function HomePage() {
    return (
        <HStack w="100%">
            <VStack align="start" p={20}>
                <Heading>
                    Velkommen
                </Heading>
                <Text>
                    Hei, og velkommen til Mikro - linjeforeningen for Informatikk: robotikk og intelligente systemer. 
                    Er du interessert i robotikk, kunstig intelligens, programmering eller innebygde systemer? Da er Mikro stedet for deg. Her møter du engasjerte studenter, lærer nye ting og blir en del av et inkluderende fellesskap – sammen med vår maskot Ollie.
                </Text>
            </VStack>

            <Image src="/otter1.png">

            </Image>
        </HStack>
    )
} 