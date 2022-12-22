import { Text, View,StyleSheet, ImageBackground, Image } from 'react-native'
import React, { Component } from 'react'


export default class ContentScreen extends Component {
  render() {
    return (
     <View style={styles.container}>

     <ImageBackground source={require("../contentbg.png")}
     style = {styles.bgstyle}>

     <Text style={styles.textStyle}> Content Screen </Text>

     </ImageBackground>
     </View>
      
     )}
     }

const styles = StyleSheet.create({
  container:{
   flex:1,
   backgroundColor:"black"
  },

  textStyle :{
   justifyContent:"center",
   alignItems: "center",
   fontSize: 50,
   fontFamily: "ComicSans",
   border: "solid",
   borderRadius: 60,
   color:"black",
   backgroundColor: "#fbb13c"
  },

   bgstyle: {
  justifyContent: 'center',
  alignItems: 'center',
  width: 333,
  height: 529
   },
})


