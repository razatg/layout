import React from 'react';
import {Text, View} from 'react-native';
import {Camera, Permissions} from 'expo';


export default class Fcamera extends React.Component {
    camera = null;
    state = {
      hasCameraPermission:null,
      type: Camera.Constants.Type.front,
  
    }
  
    async requestPermission(){ 
      const camera = await Permissions.askAsync(Permissions.CAMERA);
      const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
      const hasCameraPermission = (camera.status == "granted" && audio.status == "granted");
      this.setState({hasCameraPermission});
  
  
    }
  
    async componentDidMount(){
      this.requestPermission();
    }

    render (){
      if (this.state.hasCameraPermission){
        return (
          <View>
            <Text> Loading Camera ... </Text>
            <Camera 
             type={this.state.type}
             ref={camera => this.camera = camera}
             ratio = '1:1'
            />
                    </View>
            
          );
      }
      else {
        return(
          <Text>Permission not granted</Text>
        );
      }
    }
}