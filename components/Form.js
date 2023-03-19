import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { gStyle } from '../styles/style';
import { Formik } from 'formik';

export default function Form() {
   return (
      <View style={gStyle.main}>
         <Formik
            initialValues={{ name: '', anons: '', full: '', img: '' }}
            onSubmit={(values) => {
               console.log(values);
            }}>
            {(props) => (
               <View>
                  <TextInput
                     value={props.values.name}
                     placeholder='Введіть назву'
                     onChangeText={props.handleChange('name')}
                  />
                  <TextInput
                     multiline
                     value={props.values.anons}
                     placeholder='Введіть анонс'
                     onChangeText={props.handleChange('anons')}
                  />
                  <TextInput
                     multiline
                     value={props.values.full}
                     placeholder='Введіть статтю'
                     onChangeText={props.handleChange('full')}
                  />
                  <TextInput
                     value={props.values.img}
                     placeholder='Додайте зображення'
                     onChangeText={props.handleChange('img')}
                  />
                  <Button title='Додати' onPress={props.handleSubmit} />
               </View>
            )}
         </Formik>
      </View>
   );
}

const styles = StyleSheet.create({

});