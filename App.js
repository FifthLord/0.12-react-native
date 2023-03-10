import React from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font'
import { useState } from 'react';
import AppLoading from 'expo-app-loading';
import MainStack from './navigate';


const fonts = () => Font.loadAsync({
   'mt-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
   'mt-bold': require('./assets/fonts/Montserrat-Bold.ttf')
})

export default function App() {
   const [font, setFont] = useState(false)

   if (font) {
      return (
         <MainStack />
      );
   } else {
      return (
         <AppLoading startAsync={fonts} onFinish={() => setFont(true)} onError={err => console.warn(err)} />
      )
   }
}

const styles = StyleSheet.create({

});
