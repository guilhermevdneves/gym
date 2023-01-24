import { Input as NBInput, IInputProps } from 'native-base';


export const Input = (props: IInputProps) => {
  return (
    <NBInput
      bg="gray.700"
      h={14}
      px={4}
      borderWidth={0}
      fontSize="md"
      color="white"
      fontFamily="body"
      {...props} />
  )
}