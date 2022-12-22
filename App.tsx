
import Loading from '@components/Loading';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import SignUp from '@screens/SignUp';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { THEME } from './src/theme';
import { Routes } from '@routes/index';
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
          <Routes />
          :
          <Loading />
      }

    </NativeBaseProvider>
  );
}

