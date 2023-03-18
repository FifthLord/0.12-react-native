import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { gStyle } from '../styles/style';
import { Formik } from 'formik';

export default function Form() {
   return (
      <View style={gStyle.main}>
         <Formik initialValues={{ name: '', anons: '', full: '', img: '' }} onSubmit={(values) => {
            console.log(values);
         }}>

         </Formik>
      </View>
   );
}

const styles = StyleSheet.create({

});