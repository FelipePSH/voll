import { VStack, Image, Card, Box, FormControl, Input, Button } from "native-base";
import { Text } from "react-native";
import Logo from '../assets/Logo.png'
import { Title } from "../components/Title";

export default function SearchBar() {
    return (
        <Box w="100%" borderRadius="lg" p={3} mt={5} shadow="1" borderRightRadius="md" backgroundColor={'white'}>
                <FormControl>
                    <Input
                        placeholder='Digite a especialidade'
                        size={'lg'}
                        width={"100%"}
                        borderRadius={'lg'}
                        backgroundColor={'gray.100'}
                    />
                    <Input
                        placeholder='Digite a localização'
                        size={'lg'}
                        width={"100%"}
                        mt={3}
                        borderRadius={'lg'}
                        backgroundColor={'gray.100'}
                    />
                    <Button
                        width={'100%'}
                        backgroundColor={'blue.800'}
                        marginTop={3}
                        borderRadius={"lg"}
                        alignItems={"center"}
                    >
                        Buscar
                    </Button>
                </FormControl>
            </Box>

    );
}