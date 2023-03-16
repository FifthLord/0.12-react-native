import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Modal } from 'react-native';
import { gStyle } from '../styles/style';
import { AntDesign } from '@expo/vector-icons';

export default function Main({ navigation }) {

   const [news, setNews] = useState([
      { name: 'Google', anons: "Google-search", full: 'Google is cool browser', key: '1', img: 'https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000' },
      { name: 'Apple', anons: "Apple-phone", full: 'Apple is cool phone', key: '2', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs89gtkwDKMaC-DuvrNMrIndNQO8PMUrSBwXcJZRa-hpjhiZ2mnF6oWAP22I0XN3Z8QY4&usqp=CAU' },
      { name: 'FaceBook', anons: "FaceBook-page", full: 'FaceBook is (not)cool', key: '3', img: 'https://i.pinimg.com/736x/51/36/c6/5136c6170576624611319370a1ddd3a0.jpg' },
   ])

   return (
      <View style={gStyle.main}>
         <Modal visible={false}>
            <AntDesign name="closecircle" size={24} color="teal" />
            <Text style={styles.title}>Modal Window</Text>
         </Modal>
         <AntDesign name="pluscircle" size={24} color="teal" />
         <Text style={[gStyle.title, styles.header]}>Main Page</Text>
         <FlatList data={news} renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)}>
               <Image style={styles.image} source={{ uri: item.img }} />
               <Text style={styles.title}>{item.name}</Text>
               <Text style={styles.anons}>{item.anons}</Text>
            </TouchableOpacity>
         )} />
      </View>
   );
}

const styles = StyleSheet.create({
   image: {
      width: '100%',
      height: 250,
   },
   header: {
      marginBottom: 30
   },
   item: {
      width: '100%',
      marginBottom: 30
   }, title: {
      fontFamily: 'mt-bold',
      fontSize: 22,
      textAlign: 'center',
      marginTop: 20,
      color: '#474747'
   }, anons: {
      fontSize: 16,
      textAlign: 'center',
      marginTop: 5,
      color: '#474747'
   }
});
