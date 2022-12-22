import { Text, View, Image,TextInput, Button,ImageBackground,Platform, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import React, { Component } from 'react';
import DropDownPicker from "react-native-dropdown-picker";
import { RFValue } from "react-native-responsive-fontsize";



export class InformationScreen extends Component {

   constructor(props) {
    super(props);
    this.state = {
      previewImage: "poster",
      dropdownHeight: 40
    };

 
  }
    render() {
   
      let preview_images = {
        graduate: require("../assets/graduate.png"),
        postgraduate: require("../assets/postgraduate.jpg"),
        undergraduate: require("../assets/clg.jpg"),
        poster:require("../assets/clg.jpg")
       
      };
    return (
      <View>

       <ImageBackground source={require('../infobg.png')}>
       <Text style = {styles.textStyle}> Choose your level of Education : </Text>
      


              <Image style = {styles.previewImage}
                source={preview_images[this.state.previewImage]}
              
              ></Image>

              <View style={{ height: RFValue(this.state.dropdownHeight) }}>

                <DropDownPicker
                  items={[
                    { label: "Graduate", value: "graduate" },
                    { label: "Post Graduate", value: "postgraduate" },
                    { label: "Under Graduate", value: "undergraduate" },
                   
                  ]}

                  defaultValue={this.state.previewImage}

                  containerStyle={{
                    height: 40,
                    borderRadius: RFValue(20),
                    marginBottom: RFValue(20),
                    marginHorizontal: RFValue(10)
                  }}
                  onOpen={() => {
                    this.setState({ dropdownHeight: 170 });
                  }}
                  onClose={() => {
                    this.setState({ dropdownHeight: 50 });
                  }}

                  style={{ backgroundColor: "black" }}

                  itemStyle={{
                    justifyContent: "flex-start",

                  }}
                  dropDownStyle={{
                  backgroundColor: "black"
                  }}
                  labelStyle={
                    {color:"white"}
                  }
                  arrowStyle={
                       styles.dropdownLabelLight                    
                  }
                  onChangeItem={item =>
                    this.setState({
                      previewImage: item.value()
                    })
                  }
                />
              </View>

              <View>
              <Text style = {styles.textStyle}> Choose your field of interest : </Text>

              <DropDownPicker
                  items={[
                    { label: "Science", value: "graduate" },
                    { label: "Humanities", value: "postgraduate" },
                    { label: "Commerce", value: "undergraduate" },
                   
                  ]}

                  defaultValue={this.state.previewImage}

                  containerStyle={{
                    height: 40,
                    borderRadius: RFValue(20),
                    marginBottom: RFValue(20),
                    marginHorizontal: RFValue(10)
                  }}
                  onOpen={() => {
                    this.setState({ dropdownHeight: 170 });
                  }}
                  onClose={() => {
                    this.setState({ dropdownHeight: 50 });
                  }}

                  style={{ backgroundColor: "black" }}

                  itemStyle={{
                    justifyContent: "flex-start",

                  }}
                  dropDownStyle={{
                  backgroundColor: "black"
                  }}
                  labelStyle={
                    {color:"white"}
                  }
                  arrowStyle={
                       styles.dropdownLabelLight                    
                  }
                  onChangeItem={item =>
                    this.setState({
                      previewImage: item.value()
                    })
                  }
                />

              </View>
      
              <View style={styles.submitButton}>
                <Button
                  onPress={() => this.props.navigation.navigate("Content")}
                  title="Submit"
                  color="#E74C3C"
                />
              </View>

               
      
      </ImageBackground>
      </View>
    )
  }
}
const styles = StyleSheet.create({

  textStyle:{
   marginTop: 50,
   flex: 1,
   justifyContent:"center",
   aligItems: "center",
   fontSize: 20,
   fontFamily: "ComicSans",
   color: "black",
   backgroundColor:"white",
  
  
  },

  previewImage: {
    width: 1000,
    height: RFValue(100),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain"
  },

  submitButton: {
    borderRadius: 40,
    alignItems: 'CENTER',
    justifyContent: 'CENTER',
    marginTop: 300,
    height: 50,
    backgroundColor: "purple",
  },



  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  containerLight: {
    flex: 1,
    backgroundColor: "white"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain"
  },
  inputFont: {
    height: RFValue(40),
    borderColor: "white",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    fontFamily: "Bubblegum-Sans"
  },
  inputFontLight: {
    height: RFValue(40),
    borderColor: "black",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "black",
    fontFamily: "Bubblegum-Sans"
  },
  dropdownLabel: {
    color: "white",
    fontFamily: "Bubblegum-Sans"
  },
  dropdownLabelLight: {
    color: "black",
    fontFamily: "Bubblegum-Sans"
  },
  inputFontExtra: {
    marginTop: RFValue(15)
  },
  inputTextBig: {
    textAlignVertical: "top",
    padding: RFValue(5)
  },
  submitButton: {
    marginTop: RFValue(20),
    alignItems: "center",
    justifyContent: "center"
  }
})

export default InformationScreen