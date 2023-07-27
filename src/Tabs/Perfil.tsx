import { VStack, ScrollView, Avatar, Divider, Center} from "native-base";
import { Text } from "react-native";
import { Title } from "../components/Title";

export default function Perfil (){
    return(
        <ScrollView flex={1}>
            <VStack flex={1} alignItems={"center"} p={5}>
                <Title color={"blue.500"}>
                    Meu Perfil
                </Title>
                    <Avatar source={{ uri: "https://github.com/felipePSH.png"}} mt={5}  size="xl"/>

                <Title color={"blue.500"}>
                    Informações Pessoais
                </Title> 
                <Title fontSize="lg" mb={1}>
                    Felipe Pereira
                </Title> 
                <Text>
                    07/12/1999
                </Text> 
                <Text>
                    São Paulo
                </Text>

                <Divider mt={5} />
            
                <Title color={"blue.500"} mb={1}>
                    Historico Medico
                </Title>
                <Text>
                    Bronquite
                </Text>
                <Text>
                    Sinusite
                </Text>
            </VStack>
            

        </ScrollView>
    )
}