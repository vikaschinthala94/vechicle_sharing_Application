import React,{useRef,useContext,useState} from 'react';
//import React,{useRef,useContext,useState} from 'react'
import { View } from 'react-native';
//import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { colors } from 'react-native-elements';
import{ GOOGLE_MAPS_APIKEY } from '@env';
const GoogleAutocomplete = () => {
    const textInput1 = useRef(4);
    const textInput2 = useRef(5);
  return (
    <View>
      <GooglePlacesAutocomplete
      placeholder='Search'
      styles = {autoComplete}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyADfMf3ozAjr7XtyuZ52WG5O8YoM9Akp-w',
        language: 'en',
      }}
    />
    </View>
  );
};

export default GoogleAutocomplete;
const autoComplete = {
    
    textInput:{
        backgroundColor: colors.grey6,
        height: 50,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontSize: 16,
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

