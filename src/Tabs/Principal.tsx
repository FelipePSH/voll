import { ScrollView, VStack, Image, Card, Box, FormControl, Input, Button } from "native-base";
import { Text } from "react-native";
import Logo from '../assets/Logo.png'
import { Title } from "../components/Title";
import Depoimentos from "../components/Depoimentos";
import SearchBar from "../components/SearchBar";

export default function Principal() {
    return (
        <ScrollView flex={1} p={2}>
            <VStack
                flex={1}
                padding={5}
            >
                <Image source={Logo} alt='Logo azul' />
                <Title color="blue.500">
                    Boas-vindas!
                </Title>
            </VStack>
            <SearchBar />
            <VStack alignItems={'center'} padding={5} textAlign={"center"}>
                <Title color={"blue.800"}>
                    Depoimentos
                </Title>
                <Depoimentos />
            </VStack>
        </ScrollView>
    )
}