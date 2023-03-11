import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { gStyle } from '../styles/style';

export default function Main({ navigation }) {
   const loadScene = () => {
      navigation.navigate('Contacts');
   }

   return (
      <View style={gStyle.main}>
         <Text style={gStyle.title}>Main Page</Text>
         <Button title='Контакти' onPress={loadScene} />
      </View>
   );
}

const styles = StyleSheet.create({

});
