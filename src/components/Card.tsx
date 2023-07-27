import {ITextProps, VStack} from 'native-base'
import { ReactNode } from 'react'

interface CardProps extends ITextProps {
    children: ReactNode
}

export function Card({children, ...rest}: CardProps){
    return(
        <VStack
        w={'100%'} bg={'white'} p={5} borderRadius={'lg'} shadow={0}
        {...rest}>
          {children}
          </VStack>
    )
}