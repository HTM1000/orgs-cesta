import { SafeAreaView, StatusBar, View } from 'react-native';
import { Cesta } from './src/pages/Cesta';
import { cesta } from './src/mocks/cesta'

import { useFonts, Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoading] = useFonts({
    "regular": Montserrat_400Regular,
    "italic": Montserrat_400Regular_Italic,
    "bold": Montserrat_700Bold
  })

  if(!fontsLoading){
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent/>
      <Cesta {...cesta}/>
    </SafeAreaView>
  );
}
