
const section =[
    {
      id: 1,
      title: 'Insira alguns dados básicos',
      inputText: [
        {
         id: 1,
         label: 'Name',
        placeholder: 'Digite seu nome completo'
        },
        {
          id: 2,
          label: 'Email',
         placeholder: 'Digite seu Email'
         }
      ],
      checkbox: [],
    },
    {
      id: 2,
      title: 'Agora, mais alguns dados sobre você:',
      inputText: [
        {
          id: 1,
          label: 'CEP',
         placeholder: 'Digite seu CEP'
         },
      ],
      checkbox: [],
    },
    {
      id: 3,
      title: "Para finalizar, qual seu plano de saúde?",
      inputText: [],
      checkbox: [
        {
          id: 1,
          value: 'Sulamerica'
        },
        {
          id: 2,
          value: 'Unimed'
        },

        {
            id: 3,
            value: 'Bradesco'
          },
        {
            id: 4,
            value: 'Amil'
        },
        {
            id: 5,
            value: 'Biosaúde'
          },
        {
            id: 6,
            value: 'Biovida'
        },
        {
            id: 7,
            value: 'Outros'
          },
        {
            id: 8,
            value: 'Não tem Plano'
          },
      ]
    }
]

export {section}