import { useState } from 'react';

import HistoryCard from '@components/HistoryCard';
import ScreenHeader from '@components/ScreenHeader';
import { Center, Heading, SectionList, Text, VStack } from 'native-base';

function History() {
  const [exercises, setExercises] = useState([
    {
      title: '02/01/2023',
      data: ['Dumbbell row']
    }

  ])
  return (
    <VStack flex={1}>
      <ScreenHeader title='History' />
      <SectionList
        sections={exercises}
        keyExtractor={item => item}
        renderSectionHeader={({ section }) => (
          <Heading color="gray.200" fontSize="md" mt={10} mb={3}>
            {section.title}
          </Heading>
        )}
        contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: 'center' }}
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center">
            No registered history
          </Text>
        )}
        renderItem={({ item }) =>
          <HistoryCard />
        }
      />
    </VStack>
  );
}

export default History