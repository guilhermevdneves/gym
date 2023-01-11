import { HStack, Icon, Text, VStack } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons'
import UserPhoto from './UserPhoto';
import { TouchableOpacity } from 'react-native';

function HomeHeader() {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        source={{ uri: 'https://github.com/guilhermevdneves.png' }}
        alt="Profile photo"
        size={16}
        mr={4}
      />

      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Hello
        </Text>
        <Text color="gray.100" fontSize="md">
          Guilherme
        </Text>
      </VStack>

      <TouchableOpacity>
        <Icon
          as={MaterialIcons}
          name="logout"
          color="gray.200"
          size={7}
        />
      </TouchableOpacity>

    </HStack >
  );
}

export default HomeHeader