import React from 'react';
import {Text, View,TouchableOpacity} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      error: '',
    }
  }
  handleSubmit = () => {
    auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((result) => {
      return result.user.updateProfile({
        displayName: this.state.name
      });
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
          label="name"
          placeholder={'John Doe'}
          value={this.state.name}
          onChangeText={(value) => this.handleChange(value, 'name')}
        />
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
        <Button mode={'contained'} onPress={this.handleSubmit}>Submit</Button>
      </View>
    );
  }
}
