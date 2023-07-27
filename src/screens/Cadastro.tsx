import {VStack, Image, Text, Box, FormControl, Input, Button, Link, Checkbox, ScrollView} from 'native-base'
import Logo from '../assets/Logo.png'
import { TouchableOpacity } from 'react-native';
import { Title } from '../components/Title';
import { EntradaTexto } from '../components/EntradaTexto';
import { useState } from 'react';
import { section } from '../utils/CadastroEntradaTexto';

export default function Cadastro() {

  const [numSection, setNumSection] = useState(0);

  

  function avancarSecao(){
    if(numSection < section.length - 1){
      setNumSection(numSection + 1)
    }
  }

  function voltarSecao(){
    if(numSection > 0){
      setNumSection(numSection - 1)
    }
  }
  
  
  return (
      <ScrollView
       flex={1} 
      padding={5} 
      backgroundColor={'white'}>

        <Image alignSelf={'center'} source={Logo} alt='Logo azul'/>

        <Title>{section[numSection].title}</Title>

          <Box>
            {
              section[numSection]?.inputText?.map(entrada => {
                return <EntradaTexto label={entrada.placeholder} placeholder={entrada.placeholder} key={entrada.id}/>
              })
            }
          </Box>

          <Box>
            <Text color={'blue.800'} fontWeight="bold" fontSize='md' mt={2} mb={2} >
            </Text>
            {
              section[numSection].checkbox.map(checkbox => {
                return <Checkbox   key={checkbox.id} value={checkbox.value}>{checkbox.value}</Checkbox>
              })
            }
          </Box>


          { numSection > 0 && 
            <Button
          width={'100%'}
          backgroundColor={'gray.400'}
          marginTop={10}
          borderRadius={"lg"} 
          onPress={() => voltarSecao()}>
            Voltar
          </Button>}
          


          <Button
          width={'100%'}
          backgroundColor={'blue.800'}
          marginTop={4}
          mb={15}
          borderRadius={"lg"} 
          onPress={() => avancarSecao()}>
            Avançar
          </Button>
          
      </ScrollView>
  );
}