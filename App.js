import { StyleSheet, Text, View, } from 'react-native';
import { gStyle } from './styles/style';
import * as Font from 'expo-font'
import { useState } from 'react';
import AppLoading from 'expo-app-loading';


const fonts = () => Font.loadAsync({
   'mt-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
   'mt-bold': require('./assets/fonts/Montserrat-Bold.ttf')
})

export default function App() {
   const [font, setFont] = useState(false)

   if (font) {
      return (
         <View style={gStyle.main}>
            <Text style={gStyle.title}>Open up App.js to start working on your app!</Text>
         </View>
      );
   } else {
      return (
         <AppLoading startAsync={fonts} onFinish={() => setFont(true)} onError={err => console.warn(err)} />
      )
   }
}

const styles = StyleSheet.create({

});
