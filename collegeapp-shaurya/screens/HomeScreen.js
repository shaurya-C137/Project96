import { Text, View, ImageBackground, StyleSheet , TouchableOpacity, Image} from 'react-native'
import React, { Component } from 'react'

export default class HomeScreen extends Component {
  render() {
    return (
      <View >
      
      <ImageBackground source={require('../homebg2.png')} style={styles.backgroundImage}>



       <Text style = {styles.textStyle}> FIND YOUR UNIVERSITY </Text>  
       <Image source={require('../logo.png')}
       style = {styles.logostyle}></Image>

       


       <Text style = {styles.textStyle2}> 

       Welcome Candidate !

        On our app you will find the information about various courses
            </Text> 
    
       <TouchableOpacity onPress={() => this.props.navigation.navigate('Information')}   >
      
        <Text style = {styles.textStyle3}> ENTER </Text>
      </TouchableOpacity>
    

      
      
     
        </ImageBackground>
        
      </View>
    )
  }
}

//create a stylesheet
const styles = StyleSheet.create({
  logostyle :{
   justifyContent: 'center',
   alignItems: 'center',
   width: 250,
   height: 250
  },


  textStyle :{
   flex: 1,
   justifyContent:"center",
   alignItems: "center",
   fontSize: 50,
   fontFamily: "ComicSans",
   color: "black",
   backgroundColor:"#C39BD3",
   border: "solid",
   borderRadius: 60,
   marginTop: 10
  },

 textStyle2 :{
   marginTop: 0,
   flex: 1,
   justifyContent:"center",
   alignItems: "center",
   fontSize: 30,
   fontFamily: "ComicSans",
   color: "black",
   backgroundColor:"white",
   border: "solid",
   
  },

  textStyle3 :{
   marginTop: 50,
   flex: 1,
   justifyContent:"center",
   aligItems: "center",
   fontSize: 20,
   fontFamily: "ComicSans",
   color: "black",
   backgroundColor:"#DAF7A6",
   border: "solid",
   borderWidth:10,

   
  },

  backgroundImage: {
  justifyContent: 'center',
  alignItems: 'center',
  width: 316,
  height: 650
  
  

}
})