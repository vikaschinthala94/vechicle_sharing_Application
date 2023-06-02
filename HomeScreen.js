import React ,{useState,useRef,useEffect}from 'react';
import { StyleSheet, View,Dimensions,TouchableOpacity,Text,FlatList} from 'react-native'
import { TouchableHighlight, Platform } from 'react-native';
import { parameters, colors  } from '../global/styles'
import { useNavigation } from '@react-navigation/native';
import { filterData,filterData1, filterData2 } from '../global/data'
//import { Icon } from 'react-native-vectors'
import { Image } from 'react-native-elements'
import { ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements'
//import MapView,{PROVIDER_GOOGLE} from 'react-native-map'
import MapView  from 'react-native-maps';
import * as Location from 'expo-location';
import * as NavigationBar from 'expo-navigation-bar';
import { StatusBar } from 'expo-status-bar'
import tw from 'tailwind-react-native-classnames'
import { ScrollView } from 'react-native'
import { mapStyle,carsAround } from '../global/mapStyle'
import { PROVIDER_GOOGLE } from 'react-native-maps';



const SCREEN_WIDTH = Dimensions.get('window').width;


const HomeScreen = () => {
  const navigation = useNavigation();

  const [latlng,setLatLng] = useState({})

const checkPermission =async()=>{
    const hasPermission = await Location.requestForegroundPermissionsAsync();
    if(hasPermission.status === 'granted') {
        const permission = await askPermission();
        return permission
    }
    return true
};


const askPermission = async()=>{
    const permission = await Location.requestForegroundPermissionsAsync()
    return permission.status === 'granted';
};


const getLocation = async()=>{
    try{
        const {granted} =await Location.requestForegroundPermissionsAsync();
        if(!granted)return;
        const {
            coords:{latitude,longitude},
        } = await Location.getCurrentPositionAsync();
        setLatLng({latitude:latitude,longitude:longitude})
    }catch(err){

    }
}

const _map = useRef(1);


useEffect(()=>{
    checkPermission();
    getLocation()
   // console.log(latlng)
,[]})



  return (
    <View style={styles.container}>
        <View style ={styles.home}>
        <FlatList
          data={filterData1}
          vertical={true}
          keyExtractor = {(item)=>item.id}
          renderItem = {({item})=>(
            <View >
              <View style={tw` p-2 pl-6 pb-8 pt-4 bg-gray-200 m-0 w-40 mb-0 rounded-lg border border-gray-100 p-5 `}>
                <View >
                  <Image onPress ={()=>{navigation.navigate('DriverScreen')}}
                    style={{width:140,height:140,resizeMode:"contain"}} 
                    source={item.image}
                  />
                    <Text style={tw`mt-0 text-lg font-semibold`}>{item.name}</Text>             
                    <TouchableOpacity onPress ={()=>{navigation.navigate('DriverScreen')}}>
                      <View style ={styles.button1}>
                        <Text style = {styles.button1Text}>Ride with me</Text>
                      </View>
                    </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
        <Text style={{fontSize:15,color:colors.grey3,marginTop:1}}>  Choose your ride</Text>
        <FlatList
            numRows={5}
            horizontal ={true}
            showsHorizontalScrollIndicator ={false}
            data ={filterData}
            keyExtractor = {(item)=>item.id}
            renderItem = {({item})=>(
              <TouchableOpacity style ={styles.card}>
                <TouchableOpacity onPress ={()=>{navigation.navigate('DriverScreen')}}>
                <View style ={ styles.view2}>
                  <Image style={styles.image2} source={item.image}/>
                </View>
                </TouchableOpacity>
                <View>
                  <Text style ={styles.title}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />

        <View style ={styles.view3}>
                        <Text style ={styles.text3}>Search here</Text>  
                        <View style ={styles.view4}>
                            <Icon type = "material-community"
                                name ="clock-time-four"
                                color = {colors.grey1}
                                size = {26}
                             /> 
                             <Text style ={{marginLeft:5}}>!</Text> 
                             <Icon type = "material-community"
                                name ="chevron-down"
                                color = {colors.grey1}
                                size = {26}
                             />  
                        </View>     
                    </View>
             
          
          </View>
        
        <View style ={{alignItems:"center",justifyContent:"center"}}>
          <MapView
          ref={_map}
          provider ={PROVIDER_GOOGLE}
          style={styles.map}
          customMapStyle ={mapStyle}
          showsUserLocation ={true}
          followsUserLocation = {true}
          //initialRegion = {{...carsAround[0],latitudeDelta:0.008,longitudeDelta:0.008}}
          >
            
          </MapView>

        </View>

      <StatusBar style ="light" backgroundColor='#000000' translucent ={true}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:colors.white,
      paddingBottom:30,
      paddingTop:parameters.statusBarHeight
  },
  header:{
    backgroundColor:colors.white,
      height:parameters.headerHeight,
      alignItems:"flex-start"
   
  },
  
  image1:{
   
    height:100,
    width:100,
  
  },
  
  image2:{height:60,width:60,
          borderRadius:30,
        },
  
        home:{
          backgroundColor:colors.white,
          
          borderBottomEndRadius:20,
          borderBottomStartRadius:20,
     
          //borderRadius:25,
          paddingLeft:20,
          
          
         },
  
  text1:{
   color:colors.white,
   fontSize:21,
   paddingBottom:20,
   paddingTop:20
  },
  
  text2:{
   color:colors.white,
   fontSize:16
  },
  
  view1:{
   flexDirection:"row",
   flex:1,
   paddingTop:30
  },
  
  button1:{
    height:30,
    width:80,
    backgroundColor:colors.black,
    borderRadius:8,
    alignItems:"center",
    justifyContent:"center",
    marginTop:5
  },
  
  button1Text:{
   color:colors.white,
   fontSize:10,
   marginTop:-2
  
  },
  card:{
   alignItems:"center",
   marginLeft:5,
   margin:SCREEN_WIDTH/30
  
  },
  
  view2:{marginBottom:2,
        borderRadius:15,
        backgroundColor:colors.white
      },
  
      title:{
        color:colors.black,
        fontSize:16
      },
  view3:{flexDirection:"row",
           marginTop :5,
           height:50,
           backgroundColor:colors.grey6,
           alignItems:"center",
           marginRight:10,
           marginLeft:2,
           justifyContent:"space-between",
          marginHorizontal:15,
          borderRadius:20,
          marginBottom:10
          
           },
  text3:{marginLeft:15,
          fontSize:20,
          color:colors.black
    },
  
  view4:{ flexDirection:"row",
          alignItems:"center",
          marginRight:15,
          backgroundColor:"white",
          paddingHorizontal:10,
          paddingVertical:2,
          borderRadius:20
          },
  
  view5:{ flexDirection:"row",
  alignItems:"center",
  backgroundColor:"white",
  paddingVertical:10,
  justifyContent:"space-between",
  marginHorizontal:15,
  //borderBottomColor:colors.grey4,
  //borderBottomWidth:1,
  marginTop:0,
  flex:1
  },
  
  view6:{
  
  
  alignItems:"center",
  flex:5,
  flexDirection:"row"
  },
  view7:{
  //backgroundColor:colors.grey6,
  height:45,
  width:40,
  //borderRadius:20,
  alignItems:"center",
  justifyContent:"center",
  marginRight:10
  
  
  },
  
  map:{
     
  height: 250,
   marginVertical: 0,
   width:SCREEN_WIDTH*0.99
  },
  
  text4:{ fontSize:15,
        color:colors.black,
        marginLeft:20,
        marginBottom:10,
        marginTop:10
      },
  
  icon1:  {marginLeft:100,
         marginTop:10
        },

  view8: {flex:4,
        marginTop:-25
      } ,
  carsAround: {
  width: 25,
  height: 14,
  
  }, 
  
  location: {
    width: 16,
    height: 16,
    borderRadius:8,
    backgroundColor:colors.blue,
    alignItems:"center",
    justifyContent:"center"
    
    }, 
    
  view9:{width:4,
  height:4,
  borderRadius:2,
  backgroundColor:"white"
  }


})