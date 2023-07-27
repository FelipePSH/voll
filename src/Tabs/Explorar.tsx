import { ScrollView, VStack } from "native-base";
import { Text } from "react-native";
import SearchBar from "../components/SearchBar";
import { Title } from "../components/Title";
import { CardConsulta } from "../components/CardConsulta";

export default function Explorar() {
    return (
        <ScrollView flex={1} bgColor="white">
            <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
                <SearchBar />
                <Title color="blue.500" alignSelf="center">Resultado da Busca</Title>
                {[1, 2, 3].map((_, index) => (
                <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white" key={index}>
                    <CardConsulta 
                    especialidade="Cardiologia"
                    foto="https://github.com/felipePSH.png"
                    nome="Dr. Felipe"
                    />
          </VStack>
        ))}
            </VStack>
        </ScrollView>
    )
}