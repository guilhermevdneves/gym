
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { VStack, Text, ScrollView, Center, Skeleton, Heading } from 'native-base';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import ScreenHeader from '@components/ScreenHeader';
import UserPhoto from '@components/UserPhoto';
import * as ImagePicker from 'expo-image-picker';
const PHOTO_SIZE = 33;

function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  const [userPhoto, setUserPhoto] = useState('https://github.com/guilhermevdneves.png');

  async function handleUserPhotoSelection() {
    setPhotoIsLoading(true);
    try {
      const selectedPhoto = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
        selectionLimit: 1
      });

      if (selectedPhoto.canceled) {
        return;
      }

      setUserPhoto(selectedPhoto.assets[0].uri)
      setPhotoIsLoading(false)
    } catch (e) {
      setPhotoIsLoading(false)
    }
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title='Profile' />

      <ScrollView>
        <Center mt={6} px={10}>
          {photoIsLoading ?
            <Skeleton
              startColor="gray.500"
              endColor="gray.400"
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full" />
            :
            <UserPhoto
              source={{ uri: userPhoto }}
              alt='Profile photo'
              size={PHOTO_SIZE}
            />
          }

          <TouchableOpacity onPress={handleUserPhotoSelection}>
            <Text color="green.500" fontWeight="bold" mt={5} mb={8} >
              Change photo
            </Text>
          </TouchableOpacity>

          <Input
            bg="gray.600"
            placeholder='Name'
            mb={5}
          />

          <Input
            bg="gray.600"
            placeholder='youremail@email.com'
            isDisabled
          />
        </Center>

        <VStack px={10} mt={12} mb={9}>
          <Heading color="gray.200" fontSize="md" mb={4}>
            Change password
          </Heading>

          <Input
            mb={5}
            bg="gray.600"
            placeholder='Old password'
            secureTextEntry
          />

          <Input
            mb={5}
            bg="gray.600"
            placeholder='New password'
            secureTextEntry
          />

          <Input
            mb={5}
            bg="gray.600"
            placeholder='Confirm password'
            secureTextEntry
          />


          <Button title='Save' />

        </VStack>


      </ScrollView>

    </VStack>
  );
}

export default Profile