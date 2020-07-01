
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View, Text,} from 'react-native';
import Home from './screens/home/Home';
import Register from './screens/auth/register'
import Login from './screens/auth/login'
import ForgotPassword from './screens/auth/forgotPassword'
import HomeUser from './screens/home/HomeUser';
import Camera from './screens/camera/camera';
import auth from '@react-native-firebase/auth';
import {Button} from 'react-native-paper';



const Stack = createStackNavigator();

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    console.log("user", user)
    if (initializing) setInitializing(false);
    console.log('init', initializing)
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  if (!user) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" options={{ title: 'Sign In' }} component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Forgot Password" component={ForgotPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home User" options={{ title: 'Home' }} component={HomeUser} />
        <Stack.Screen name="Camera" component={Camera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
