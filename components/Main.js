import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { gStyle } from '../styles/style';

export default function Main({ navigation }) {

   const [news, setNews] = useState([
      { name: 'Google', anons: "Google-search", full: 'Google is cool browser', key: '1', img: 'https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000' },
      { name: 'Apple', anons: "Apple-phone", full: 'Apple is cool phone', key: '2', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs89gtkwDKMaC-DuvrNMrIndNQO8PMUrSBwXcJZRa-hpjhiZ2mnF6oWAP22I0XN3Z8QY4&usqp=CAU' },
      { name: 'FaceBook', anons: "FaceBook-page", full: 'FaceBook is (not)cool', key: '3', img: 'https://i.pinimg.com/736x/51/36/c6/5136c6170576624611319370a1ddd3a0.jpg' },
   ])

   return (
      <View style={gStyle.main}>
         <Text style={gStyle.title}>Main Page</Text>
         <FlatList data={news} renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('FullInfo', item)}>
               <Image source={{
                  width: '100%',
                  height: 250,
                  uri: item.img
               }} />
               <Text>{item.name}</Text>
               <Text>{item.anons}</Text>
            </TouchableOpacity>
         )} />
      </View>
   );
}

const styles = StyleSheet.create({

});
