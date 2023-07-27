import { VStack, Divider, ScrollView } from 'native-base'
import { Botao } from '../components/Botao'
import { CardConsulta } from '../components/CardConsulta'
import { Title } from '../components/Title'

export default function Consultas(){
  return(
    <ScrollView p="5">
      <Title color="blue.500">Minhas consultas</Title>
      <Botao mt={5} mb={5}>Agendar nova consulta</Botao>

      <Title color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Próximas consultas</Title>
      <CardConsulta 
        nome='Dr. Andre'
        especialidade='Cardiologista'
        foto='https://github.com/felipePSH.png'
        data='20/04/2023'
        foiAgendado
      />

      <Divider mt={5} />

      <Title color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Consultas passadas</Title>
      <CardConsulta 
        nome='Dr. Andre'
        especialidade='Cardiologista'
        foto='https://github.com/felipePSH.png'
        data='20/04/2023'
        foiAtendido
        />
        <CardConsulta 
          nome='Dr. Andre'
          especialidade='Cardiologista'
          foto='https://github.com/felipePSH.png'
          data='20/04/2023'
          foiAtendido
        />
        <CardConsulta 
          nome='Dr. Andre'
          especialidade='Cardiologista'
          foto='https://github.com/felipePSH.png'
          data='20/04/2023'
          foiAtendido
        />
      </ScrollView>
    )
  }