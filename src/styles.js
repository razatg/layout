import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    mainContainer:{
       flex:1,
       flexDirection:"row",
       alignItems:"center",
       justifyContent:"center",
       backgroundColor:"white",
    },
    leftSq:{
        flex:1,
        aspectRatio:1/1,
    },
    rightSq:{
        flex:1,
        aspectRatio:1/1,
        backgroundColor:"green"
    },
});