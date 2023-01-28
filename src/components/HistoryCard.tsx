import { Heading, HStack, Text, VStack } from "native-base";

function HistoryCard(props) {
  return (
    <HStack w="full" px={5} py={4} mb={3} bg="gray.600" alignItems="center" rounded="md" justifyContent="space-between" >
      <VStack mr={5} flex={1}>
        <Heading color="white" fontSize="md" textTransform="capitalize">
          Back
        </Heading>
        <Text color="gray.100" fontSize="lg" numberOfLines={1}>
          Dumbbell row
        </Text>
      </VStack>

      <Text fontSize="md" color="gray.300" numberOfLines={1}>
        08:45
      </Text>

    </HStack>
  );
}

export default HistoryCard