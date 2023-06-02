import { Text, StyleSheet, View,Dimensions } from 'react-native'
import React, { Component } from 'react'
import { useState ,useRef, useEffect} from 'react';
import MapView from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import { mapStyle } from '../global/mapStyle';
import { parameters } from '../global/styles';
import { Directions } from 'react-native-gesture-handler';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').width;

export default class MapComponent extends Component {
  
  
  render() {
    
    return (
      <View>
        <MapView
          ref={this._map}
          provider ={PROVIDER_GOOGLE}
          style={styles.map}
          customMapStyle ={mapStyle}
          showsUserLocation ={true}
          followsUserLocation = {true}
          //initialRegion = {{...carsAround[0],latitudeDelta:0.008,longitudeDelta:0.008}}
          >
            
          </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:parameters.statusBarHeight},
    map:{
      height: 950,
      
      width:SCREEN_WIDTH*0.99
      },
})