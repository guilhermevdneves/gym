
import Loading from '@components/Loading';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import Signin from '@screens/Signin';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { THEME } from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });



  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar style='light' backgroundColor='transparent' translucent />
      {
        fontsLoaded ?
          <Signin />
          :
          <Loading />
      }

    </NativeBaseProvider>
  );
}

