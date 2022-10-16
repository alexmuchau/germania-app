import { StatusBar } from 'expo-status-bar';
import { Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter'
import { useFonts, Raleway_700Bold, Raleway_900Black, Raleway_500Medium } from '@expo-google-fonts/raleway'

import { Background } from './src/components/Background';
import { Home } from './src/home';
import { Loading } from './src/components/Loading';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Raleway_500Medium,
    Raleway_700Bold,
    Raleway_900Black, 
    Inter_500Medium,
    Inter_700Bold
  })
  
  return (
    <Background>
      <StatusBar
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Home/> : <Loading />}
    </Background>
  );
}