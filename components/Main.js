import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { gStyle } from '../styles/style';

export default function Main({ navigation }) {

   const [news, setNews] = useState([
      { name: 'Google', anons: "Google-search", full: 'Google is cool browser' },
      { name: 'Apple', anons: "Apple-phone", full: 'Apple is cool phone' },
      { name: 'FaceBook', anons: "FaceBook-page", full: 'FaceBook is (not)cool' },
   ])

   return (
      <View style={gStyle.main}>
         <Text style={gStyle.title}>Main Page</Text>
         <FlatList data={news} renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('FullInfo', item)}>
               <Text>{item.name}</Text>
               <Text>{item.anons}</Text>
            </TouchableOpacity>
         )} />
      </View>
   );
}

const styles = StyleSheet.create({

});
