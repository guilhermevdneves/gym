import { Heading, HStack, Icon, Image, Text, VStack } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from '@expo/vector-icons';
type Props = TouchableOpacityProps & {



}

function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity style={{ marginBottom: 10 }}>
      <HStack rounded="md" alignItems="center" p={2} pr={4} bg="gray.500">
        <Image
          source={{ uri: "https://i.pinimg.com/736x/34/2e/6c/342e6c1ce59633375988b4eb5a476970--ps-fitness.jpg" }}
          alt="Exercise Image"
          w={16}
          h={16}
          rounded="md"
          mr={4}
        />

        <VStack flex={1}>
          <Heading fontSize="lg" color="white">Dumbbell row</Heading>
          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2} style={{ flexShrink: 1 }}  >
            5 sets X 12 repetitions
          </Text>
        </VStack>

        <Icon
          as={Entypo}
          name="chevron-thin-right"
          color="gray.300"
        />
      </HStack>

    </TouchableOpacity>
  );
}

export default ExerciseCard