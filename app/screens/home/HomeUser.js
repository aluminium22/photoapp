import React from 'react';
import {Text, View,TouchableOpacity} from 'react-native';
import {Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import styles from './styles'

export default function HomeUser({navigation}) {
  function logout() {
    auth().signOut()
    .then(() => console.log('User signed out!'));
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerLo}>
        <Button  mode={'contained'}  onPress={() =>navigation.navigate('Camera')}>Use Camera </Button>
      </View>
      <Button style={{marginVertical: 40}} onPress={logout}>logout</Button>
    </View>
  );
}
