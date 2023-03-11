import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { gStyle } from '../styles/style';

export default function Contacts({ navigation }) {
   const loadScene = () => {
      navigation.goBack();
   }
   return (
      <View style={gStyle.main}>
         <Text style={gStyle.title}>About us</Text>
         <Button title='Назад' onPress={loadScene} />
      </View>
   );
}

const styles = StyleSheet.create({

});