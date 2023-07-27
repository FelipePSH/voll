import {VStack, Image, Text, Box, FormControl, Input, Button, Link} from 'native-base'
import Logo from './assets/Logo.png'
import { TouchableOpacity } from 'react-native';
import { Title } from './components/Title';

export default function Login() {
  return (
      <VStack
       flex={1} 
      alignItems={"center"} 
      padding={5} 
      backgroundColor={'white'} 
      justifyContent={'center'}>

        <Image source={Logo} alt='Logo azul'/>

        <Title>Faça login em sua conta</Title>

          <Box>
            <FormControl marginTop={3}>
              <FormControl.Label>
                Email
              </FormControl.Label>
              <Input
               placeholder='Insira seu email'
               size={'lg'}
               width={"100%"}
               borderRadius={'lg'}
               backgroundColor={'gray.100'}
               shadow={3}
              />
              <FormControl.Label>
                Senha
              </FormControl.Label>
              <Input 
              placeholder='Insira sua senha'
              size={'lg'}
              width={"100%"}
              borderRadius={'lg'}
              backgroundColor={'gray.100'}
              shadow={3}/>
              
            </FormControl>
          </Box>
          <Button
          width={'100%'}
          backgroundColor={'blue.800'}
          marginTop={10}
          borderRadius={"lg"}>
            Entrar
          </Button>

          <Link href='https://google.com' mt={2}>
            Esqueceu a senha?
          </Link>

          <Box width={'100%'} flexDirection={'row'} justifyContent={'center'} mt={8}> 
            <Text>Ainda não tem cadastro? </Text>
            <TouchableOpacity><Text color={'blue.500'}>
             Crie sua conta
              </Text></TouchableOpacity>
          </Box>
      </VStack>
  );
}