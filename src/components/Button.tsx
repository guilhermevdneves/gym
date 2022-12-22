import { Button as NBButton, Text, IButtonProps } from 'native-base';
import { Colors } from 'react-native/Libraries/NewAppScreen';


type ButtonProps = IButtonProps & {
  title: string;
  variant?: 'solid' | 'outline'
}

export const Button = ({ title, variant, ...rest }: ButtonProps) => {
  if (variant === "outline") {
    return (

      <NBButton
        w="full"
        h={14}
        rounded="sm"
        bg="transparent"
        borderWidth={1}
        borderColor="green.500"
        _pressed={{
          bg: "gray.500"
        }}
        {...rest}

      >
        <Text color="green.500" fontFamily="heading" fontSize="sm">{title}</Text>
      </NBButton>
    )
  }

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
