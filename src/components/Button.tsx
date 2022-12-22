import { Button as NBButton, Text, IButtonProps } from 'native-base';
import { Colors } from 'react-native/Libraries/NewAppScreen';


interface ButtonProps {
  title: string
}

export const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <NBButton
      w="full"
      h={14}
      rounded="sm"
      bg="green.700"
      _pressed={{
        bg: "green.500"
      }}
      {...rest}

    >
      <Text color="white" fontFamily="heading" fontSize="sm">{title}</Text>
    </NBButton>
  )
}
