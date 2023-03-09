import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button, TouchableWithoutFeedback } from 'react-native';

export default function App() {
   return (
      <SafeAreaView style={styles.container}>
         <Text>Open up App.js to start working on your app!</Text>
         <Button title={'Натисни'} />
         <StatusBar style="auto" />
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
});