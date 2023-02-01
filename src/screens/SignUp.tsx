import React from 'react';
import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import BackgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { useNavigation } from '@react-navigation/native';

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function SignUp() {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm<FormDataProps>();

  const handleGoBack = () => {
    navigation.goBack();
  }

  const handleSignUp = (data: FormDataProps) => {
    console.log(data);
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
      <VStack flex={1} bg="gray.700" px={5} >
        <Image
          alt="Background image"
          defaultSource={BackgroundImg}
          source={BackgroundImg}
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">Train your body and mind</Text>
        </Center>

        <Center mt={5}>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Create your account
          </Heading>

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                mb={4}
                placeholder="Name"
                placeholderTextColor="gray.300"
                autoCapitalize='words'
                _focus={{
                  bg: "gray.700",
                  borderWidth: 1,
                  borderColor: "green.500"
                }}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                mb={4}
                placeholder="E-mail"
                placeholderTextColor="gray.300"
                keyboardType='email-address'
                autoCapitalize='none'
                _focus={{
                  bg: "gray.700",
                  borderWidth: 1,
                  borderColor: "green.500"
                }}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                mb={4}
                placeholder="Password"
                placeholderTextColor="gray.300"
                secureTextEntry
                autoCapitalize='none'
                _focus={{
                  bg: "gray.700",
                  borderWidth: 1,
                  borderColor: "green.500"
                }}
              />
            )}
          />


          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                mb={4}
                placeholder="Confirm password"
                placeholderTextColor="gray.300"
                secureTextEntry
                autoCapitalize='none'
                returnKeyType='send'
                _focus={{
                  bg: "gray.700",
                  borderWidth: 1,
                  borderColor: "green.500"
                }}
              />
            )}
          />

          <Button title='Create' onPress={handleSubmit(handleSignUp)} />
        </Center>

        <Center mt={24} >
          <Button title='Voltar para o login' variant="outline" onPress={handleGoBack} />
        </Center>
      </VStack>
    </ScrollView>
  );
}

export default SignUp