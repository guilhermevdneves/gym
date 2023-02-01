import React from 'react';
import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';

import BackgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();


  const handleNewAccount = () => {
    navigation.navigate('signUp');
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
          <Text color="gray.100" fontSize="sm">Treine sua mente e seu corpo</Text>
        </Center>

        <Center mt={5}>
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

        <Center mt={24} >
          <Heading color="gray.100" fontSize="sm" mb={6} fontFamily="body">
            Ainda não tem acesso?
          </Heading>
          <Button title='Criar conta' variant="outline" onPress={handleNewAccount} />
        </Center>
      </VStack>
    </ScrollView>
  );
}

export default SignIn