import { VStack, Icon, HStack, Heading, Text, Image, Box, ScrollView } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@components/Button';
import BodySvg from '@assets/body.svg'
import SeriesSvg from '@assets/series.svg'
import RepetitionsSvg from '@assets/repetitions.svg'

function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();


  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack flex={1}>
      <VStack px={8} bg="gray.600" pt={12}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={Feather} name="arrow-left" color="green.500" size={6} />
        </TouchableOpacity>

        <HStack justifyContent='space-between' mt={4} mb={8} alignItems="center">
          <Heading flexShrink={1} color="gray.100" fontSize="lg">
            Puxada lateral
          </Heading>
          <HStack>
            <BodySvg />
            <Text color="gray.200" ml={1} textTransform="capitalize">
              Puxada lateral
            </Text>
          </HStack>
        </HStack>
      </VStack>
      <ScrollView>
        <VStack p={8}>
          <Image
            w="full"
            h={80}
            source={{ uri: "https://i.pinimg.com/736x/34/2e/6c/342e6c1ce59633375988b4eb5a476970--ps-fitness.jpg" }}
            alt="Exercise Image"
            mb={3}
            resizeMode="cover"
            rounded="lg"
          />

          <Box bg="gray.600" rounded="md" pb={4} px={4}>
            <HStack alignItems="center" justifyContent="space-around" mb={6} mt={5}>
              <HStack>
                <SeriesSvg />
                <Text color="gray.200" ml="2">
                  3 series
                </Text>
              </HStack>

              <HStack>
                <RepetitionsSvg />
                <Text color="gray.200" ml="2">
                  3 repetitions
                </Text>
              </HStack>
            </HStack>

            <Button title="Mark as done" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}

export default Exercise