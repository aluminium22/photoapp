import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {Surface} from 'react-native-paper';
import styles from '../home/styles';

export default class App extends React.Component {
  state = {
    avatarSource: null,
    videoSource: null,
  };

  constructor(props) {
    super(props);


  }

  selectPhotoTapped = () => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  }

  selectVideoTapped = () => {
    const options = {
      title: 'Video Picker',
      takePhotoButtonTitle: 'Take Video...',
      mediaType: 'video',
      videoQuality: 'medium',
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled video picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.setState({
          videoSource: response.uri,
        });
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.container} onPress={this.selectPhotoTapped}>
            {this.state.avatarSource === null ? (
              <Text style={styles.font}>Select a Photo</Text>
            ) : (
              <Surface>
                <Image style={styles.avatar} source={this.state.avatarSource} />
              </Surface>
            )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.containerLo} onPress={this.selectVideoTapped}>
            <Text style={styles.font}>Select a Video</Text>
        </TouchableOpacity>

        {this.state.videoSource && (
          <Text style={{margin: 8, textAlign: 'center'}}>
            {this.state.videoSource}
          </Text>
        )}
      </View>
    );
  }
}
