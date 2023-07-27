import { ScrollView, VStack, Image, Card, Box, FormControl, Input, Button } from "native-base";
import { Text } from "react-native";
import { Title } from "../components/Title";

const depoimentos = [
    {   
        id: 1,
        depoimento: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.',
        user: 'Júlio, 40 anos, São Paulo/SP.'
    },
    {
        id: 2,
        depoimento: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
        user: 'Felipe, 30 anos, São Paulo/SP.'
    },
    {
        id: 3,
        depoimento: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores.',
        user: 'Claudio, 80 anos, São Paulo/SP.'
    }
]

export default function Depoimentos() {
    return (

        <VStack alignItems={'center'} padding={5} textAlign={"center"}>
            { depoimentos.map((depoimento) => (
            <VStack mt={5} key={depoimento.id}>
                <Text>
                  {depoimento.depoimento}
                </Text>
                <Title fontSize={'md'}>
                    {depoimento.user}
                </Title>
            </VStack>
                    ))
                }
        </VStack>

    );
}