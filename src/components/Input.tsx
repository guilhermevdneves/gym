import { Input as NBInput, IInputProps, Text, FormControl } from 'native-base';

type Props = IInputProps & {
  errorMessage?: string | null
}

export const Input = ({ errorMessage, isInvalid, ...rest }: Props) => {
  const invalid = !!errorMessage || isInvalid;
  return (
    <FormControl isInvalid={invalid}>
      <NBInput
        bg="gray.700"
        h={14}
        px={4}
        borderWidth={0}
        fontSize="md"
        color="white"
        isInvalid={invalid}
        fontFamily="body"
        _invalid={{
          borderWidth: 1,
          borderColor: "red.500"
        }}
        _focus={{
          bg: "gray.700",
          borderWidth: 1,
          borderColor: "green.500"
        }}
        {...rest} />

      <FormControl.ErrorMessage _text={{ color: 'red.500' }} > {errorMessage}</FormControl.ErrorMessage>
    </FormControl >
  )
}