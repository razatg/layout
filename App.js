import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';
import Fcamera from './src/fcamera';

import styles from './src/styles';

export default function App() {

  return (
    <View  style={styles.mainContainer}>
      <View style= {styles.leftSq}>
        <Fcamera/>
      </View>
      <View style={styles.rightSq}>
        <WebView
          javaScriptEnabled = {true}
          //source = {{uri:'https://www.youtube.com/watch?v=1xRX1MuoImw&'}}
          source={{ html: '<html><meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" /><iframe src="https://www.youtube.com/embed/DOiskpJq_QA' + '?modestbranding=0&playsinline=0&showinfo=0&rel=0" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe></html>'}} 
        />
      </View>
    </View> 
  );
}


