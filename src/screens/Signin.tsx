import React from 'react';
import { VStack, Image, Text, Center, Heading } from 'native-base';

import BackgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

function Signin() {
  return (
    <VStack flex={1} bg="gray.700" px={5} >
      <Image
        alt="Background image"
        source={BackgroundImg}
        resizeMode="contain"
        position="absolute"
      />

      <Center my={24}>
        <LogoSvg />
        <Text color="gray.100" fontSize="sm">Treine sua mente e seu corpo</Text>
      </Center>

      <Center my={24}>
        <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
          Acesse sua conta
        </Heading>

        <Input
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
        <Input
          mb={4}
          placeholder="Senha"
          placeholderTextColor="gray.300"
          secureTextEntry
          autoCapitalize='none'
          _focus={{
            bg: "gray.700",
            borderWidth: 1,
            borderColor: "green.500"
          }}
        />

        <Button title='Acessar' />
      </Center>

    </VStack>
  );
}

export default Signin