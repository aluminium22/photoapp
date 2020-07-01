import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, PixelRatio} from 'react-native';
import {Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import styles from './styles'

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() =>navigation.navigate('Register')} style={styles.container}>
        <Text style={styles.font}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>navigation.navigate('Login')} style={styles.containerLo}>
        <Text style={styles.font}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
