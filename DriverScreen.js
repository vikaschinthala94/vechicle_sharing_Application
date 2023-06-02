import { StyleSheet, Text, View,Dimensions ,TouchableOpacity} from 'react-native'
import React from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { parameters ,colors } from '../global/styles'
import { Image } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { useState ,useRef, useEffect} from 'react';
import MapView from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import { mapStyle } from '../global/mapStyle';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames'
import MapComponent from '../components/MapComponent';
import { GOOGLE_MAPS_APIKEY } from "@env";
import GoogleAutocomplete from '../global/GoogleAuto';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').width;

export default function DriverScreen() {
  const navigation = useNavigation();
 
  const textInput1 = useRef(4);
  const textInput2 = useRef(5);



  return (
    <View style={styles.container}>
        <View>
          <View style={styles.view1}>
          <Icon onPress ={()=>{navigation.navigate('HomeScreen')}} type = "material-community"
           name ="arrow-left"
           color = {colors.black}
           size = {30}
           />

          </View>
          </View>
          <View>
          <MapView
          ref={this._map}
          provider ={PROVIDER_GOOGLE}
          style={styles.map1}
          customMapStyle ={mapStyle}
          showsUserLocation ={true}
          followsUserLocation = {true}
          //initialRegion = {{...carsAround[0],latitudeDelta:0.008,longitudeDelta:0.008}}
          >
          </MapView>
          </View>
          
            <GoogleAutocomplete/>
          
          <View>
            <GoogleAutocomplete/>
          </View>

          
      </View>
      
      
    
  )
}

const styles = StyleSheet.create({
  
  container1:{flex:1,
    paddingTop:parameters.statusBarHeight,
    
},

container: {
    flex: 1,
    paddingTop:parameters.statusBarHeight
   
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
   
  },

  view1:{
    position:"absolute",
    top:10,
    left:13,
    backgroundColor:colors.white,
    height:40,
    width:40,
    borderRadius:20,
    justifyContent:"center",
    alignItems:"center",
    marginTop:3, 
    zIndex: 8
    
  },
  view33:{flexDirection:"row",
           marginTop :5,
           height:50,
           backgroundColor:colors.grey6,
           alignItems:"center",
           marginRight:10,
           marginLeft:2,
           justifyContent:"space-between",
          marginHorizontal:15,
          borderRadius:20,
          marginBottom:10,
          //backgroundColor: colors.grey6,
           //height: 50,
      //borderRadius: 5,
          
          
           },

  view2:{
    height:SCREEN_HEIGHT*0.21,
    alignItems:"center",
    zIndex: 5,
    backgroundColor:colors.white
  },
  
  view3:{
      flexDirection:"row",
      alignItems:"center",
      marginTop:2,   
      marginBottom:10,
      backgroundColor: colors.white,
      //height:30,
      zIndex:10,
       
    
  },
  view4:{
        flexDirection:"row",
        alignItems:"center",
        
  },
  view5:{
      backgroundColor:colors.grey7,
      width:SCREEN_WIDTH*0.70,
      height:40,
      justifyContent:"center",
      marginTop:10,
      
  },
  view6:{
    backgroundColor:colors.grey6,
    width:SCREEN_WIDTH*0.70,
    height:40,
    justifyContent:"center",
    marginTop:10,
    paddingLeft:0
},
  text1:{
      marginLeft:10,
      fontSize:16,
      color:colors.grey1
  },
  

  image1:{  height:70,
            width:30,
            marginRight:10,
            marginTop:10
        },
 view7:{
     flexDirection:"row",
     alignItems:"center"
 },
 view8:{
     marginLeft:10
 },
 view10:{
    alignItems:"center",
    flex:5,
    flexDirection:"row",
    paddingVertical:10,
    borderBottomColor:colors.grey5,
    borderBottomWidth:1,
    paddingHorizontal:15
 },
 map1:{
     
  height:500,
   width:SCREEN_WIDTH*0.99},
 view11:{
    backgroundColor:colors.grey,
    height:30,
    width:30,
    borderRadius:15,
    alignItems:"center",
    justifyContent:"center",
    marginRight:15,
    marginTop:15,
 },

 contentContainer: {
    backgroundColor: 'white',
  },

view12:{
    alignItems:"center",
    paddingVertical:10,
    borderBottomWidth:1,
    borderBottomColor:colors.grey4
},

text2:{
    fontSize:18,
    color:colors.grey1
},
text3:{
    fontSize:16,
    color:colors.black,
    fontWeight:"bold",
    marginRight:5,
 
},

text4:{color:colors.grey2,
    marginTop:4
            },

view13:{
    flexDirection:"row",
    alignItems:"flex-start",
    justifyContent:"space-between",
    paddingHorizontal:15,
    paddingVertical:5
},

button1:{
    height:40,
    width:100,
    backgroundColor:colors.grey6,
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20
 },

button2:{
    height:50,
    backgroundColor:colors.grey10,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    marginHorizontal:30
 },



 button1Text:{
   
   fontSize:17,
   marginTop:-2,
   color:colors.black

 },

 button2Text:{
    color:colors.white,
    fontSize:23,
    marginTop:-2,
   

  },

  
view14:{
 

  alignItems:"center",
  flex:5,
  flexDirection:"row"
},
view15:{
  backgroundColor:colors.grey6,
  height:40,
  width:40,
  borderRadius:20,
  alignItems:"center",
  justifyContent:"center",
  marginRight:20
  
},

view16:{
    flexDirection:"row",
    alignItems:"baseline"
},

text5:{
    fontSize:12,
    color:colors.black,
    marginLeft:3,
    fontWeight:"bold",
    paddingBottom:1
    
},

view17:{
    
  },

view18:{
  


  },

view19:{flex:1.7,
    alignItems:"flex-end",
  
},

icon:{paddingBottom:2},

image2:{height:60,width:60 },

view20:{marginRight:10 },

text6:{
    fontSize:15,
    color:colors.black,
    fontWeight:"bold", 
},

view21:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginHorizontal:30,
    marginTop:15
},

view22:{
    alignItems:"center",
    marginBottom:-20
},

sectionHeaderContainer: {
backgroundColor: "white",
marginTop:30,
paddingLeft:15
},

text7 : {
fontSize:28,
color:colors.black,
marginRight:5,

},

text8:{
fontSize:15,
color:colors.grey2,
textDecorationLine:"line-through"


},

button3:{

height:60,
backgroundColor:colors.black,
alignItems:"center",
justifyContent:"center",
width:SCREEN_WIDTH-110,
marginBottom:10
},

view23:{
flexDirection:"row", 
backgroundColor:colors.cardbackground,
// elevation:10,
justifyContent:"space-between",
alignItems:"flex-end",
paddingHorizontal:20,
height:80,

},

button2Image:{
height:55,
width:55,
alignItems:"center",
justifyContent:"center",
backgroundColor:colors.grey6,
marginBottom:10,

}
,
text9:{fontSize:15,
   color:colors.grey1
},


map:{
    marginVertical: 0,
    width:SCREEN_WIDTH,
    zIndex: -1
  }, 
  
  centeredView: {
    zIndex:14
  },
  modalView: {
    marginHorizontal: 20,
    marginVertical:60,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    zIndex:16
  }, 
  
  view24:{
    flexDirection:"row",
    justifyContent:"space-between",
   marginVertical:15,
    paddingHorizontal:20   
}, 

view25:{
    flexDirection:'row',
   alignItems:"baseline"
},

flatlist:{
    marginTop:20
},

text10:{color:colors.grey2,
       paddingLeft:10
    }

});
const autoComplete = {
    
  textInput:{
      backgroundColor: colors.grey6,
      height: 50,
      borderRadius: 5,
      paddingVertical: 5,
      paddingHorizontal: 10,
      fontSize: 15,
      flex: 1,
      borderWidth:1,
      marginHorizontal:15,
  },
  container: {
     paddingTop:20,
    flex: 1,
    backgroundColor:colors.white
        },

  textInputContainer: {
    flexDirection: 'row',
  },

}

