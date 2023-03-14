import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { gStyle } from '../styles/style';

export default function FullInfo({ route }) {
   // const loadScene = () => {
   //    navigation.goBack();
   // }
   return (
      <View style={gStyle.main}>
         <Image source={{
            width: '100%',
            height: 250,
            uri: route.params.img
         }} />
         <Text style={gStyle.title}>{route.params.name}</Text>
         <Text style={styles.full} >{route.params.full}</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   full: {
      fontSize: 16,
      textAlign: 'center',
      marginTop: 15,
      color: '#474747'
   }
});