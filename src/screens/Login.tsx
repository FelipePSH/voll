import {VStack, Image, Text, Box, useToast, Input, Button, Link} from 'native-base'
import Logo from '../assets/Logo.png'
import { TouchableOpacity } from 'react-native';
import { Title } from '../components/Title';
import { EntradaTexto } from '../components/EntradaTexto';
import { useEffect, useState } from 'react';
import { doLogin } from '../services/AuthService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

export default function Login({navigation}: any) {
  
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [loading, setLoading] = useState(true)
  const toast = useToast()

  useEffect(()=> {
    AsyncStorage.removeItem('token')
    async function verifyLogin() {
      const token =  await AsyncStorage.getItem('token')
      if(token){
        navigation.replace('Tabs')
      }
      setLoading(false)
    }
    verifyLogin()
  }, [])

  async function Login() {
    const result = await doLogin(email, senha)
    if(!!result){
      const {token} = result
      console.log(result)
      console.log(token)
      AsyncStorage.setItem('token',token)

      const decodeToken = jwtDecode(token) as any
      const patientId =  decodeToken.id
      AsyncStorage.setItem('patientId', patientId)
      navigation.replace('Tabs')

    } else {
      toast.show({
        title: "Erro no login",
        description: "O email ou senha não conferem :/",
        backgroundColor: "red.500"
      })
    }
  }

  if(loading){
    return null
  }
  
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
              <EntradaTexto
              label="Email"
              placeholder="Insira seu endereço de e-mail"
              value={email}
              onChangeText={setEmail}
            />
            <EntradaTexto
              label="Senha"
              placeholder="Insira sua senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
            />

          </Box>
          <Button
          width={'100%'}
          backgroundColor={'blue.800'}
          marginTop={10}
          borderRadius={"lg"}
          onPress={Login}>
            Entrar
          </Button>

          <Link href='https://google.com' mt={2}>
            Esqueceu a senha?
          </Link>

          <Box width={'100%'} flexDirection={'row'} justifyContent={'center'} mt={8}> 
            <Text>Ainda não tem cadastro? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}><Text color={'blue.500'}>
             Faça seu cadastro
              </Text></TouchableOpacity>
          </Box>
      </VStack>
  );
}