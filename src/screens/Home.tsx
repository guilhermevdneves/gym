import { FlatList, Heading, HStack, Text, VStack } from 'native-base';
import HomeHeader from '@components/HomeHeader';
import Group from '@components/Group';
import { useState } from 'react';
import ExerciseCard from '@components/ExerciseCard';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';

function Home() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const [groups, setGroups] = useState(['Back', 'Shoulders', 'Triceps', 'Biceps']);
  const [groupSelected, setGroupSelected] = useState('Back');
  const [exercises, setExercises] = useState(['Back', 'Shoulders', 'Triceps', 'Biceps']);


  const handleOpenExerciseDetails = () => {
    navigation.navigate('exercise');
  }

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={groups}
        keyExtractor={item => item}
        horizontal
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
        renderItem={({ item }) =>
          <Group
            name={item}
            isActive={item === groupSelected}
            onPress={() => setGroupSelected(item)}
          />
        }
      />
      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md">
            Exercices
          </Heading>
          <Text color="gray.200" fontSize="sm">
            4
          </Text>
        </HStack>


        <FlatList
          data={exercises}
          keyExtractor={item => item}
          _contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) =>
            <ExerciseCard onPress={handleOpenExerciseDetails} />
          }
        />

      </VStack>
    </VStack>
  );
}

export default Home