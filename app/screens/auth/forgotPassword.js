import React from 'react';
import {Text, View,TouchableOpacity} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

export default class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleForgot = () => {
   auth().sendPasswordResetEmail(Email)
    .then(function (user) {
      alert('Please check your email...')
    }).catch(function (e) {
      console.log(e)
    })
  }

  handleChange(value, key)  {
    this.setState({
      [key]: value
    })
  }
  render() {
    return (
      <View style={{flex: 1,flexDirection:'column'}}>
        <Text>Sign In</Text>
        <TextInput
          label="email"
          placeholder={'Jane@gmail.com'}
          value={this.state.email}
          onChangeText={(value) => this.handleChange(value, 'email')}
        />
        <Button mode={'contained'} onPress={this.handleSubmit}>Recover Password</Button>
      </View>
    );
  }
}
