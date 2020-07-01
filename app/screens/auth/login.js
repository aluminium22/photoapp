import React from 'react';
import {Text, View,TouchableOpacity} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  handleSubmit = () => {
    auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      alert(error.message)
    });
  };

  handleChange(value, key)  {
    this.setState({
      [key]: value
    })
  }
  render() {
    return (
      <View style={{flex: 1,flexDirection:'column'}}>
        <TextInput
          label="email"
          placeholder={'Jane@gmail.com'}
          value={this.state.email}
          onChangeText={(value) => this.handleChange(value, 'email')}
        />
        <TextInput
          secureTextEntry={true}
          label="password"
          placeholder={'*********'}
          value={this.state.password}
          onChangeText={(value) => this.handleChange(value, 'password')}
        />
        <View>
          <Button onPress={() =>this.props.navigation.navigate('Forgot Password')}>Forgot Password?</Button>
        </View>
        <Button mode={'contained'} onPress={this.handleSubmit}>Sign In</Button>
      </View>
    );
  }
}
