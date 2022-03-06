import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import MapView, { Marker } from 'react-native-maps';

import MapViewDirections from 'react-native-maps-directions';


import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { selectOrigin, selectDestination, setTraveLtime } from '../slices/navSlice';

import {useRef, useEffect} from 'react';

import { useDispatch } from 'react-redux';

import { apiKey } from '../apiKey';

import { Dimensions } from 'react-native';

export default function Map() {

    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)

    const dispatch = useDispatch()

    const mapRef = useRef(null);



    useEffect(()=> {
    if (!origin || !destination) {
        return
    }
    mapRef.current.fitToSuppliedMarkers([ 'origin','destination'],{
        edgePadding: {top:50, right:50, bottom:50, left:50},
    })
},[origin, destination]);

useEffect(()=>{
  if (!origin || !destination) return

  const getTravelTime= async () =>{
    const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${origin.description}&destinations=${destination.description}&key=${apiKey}`

    try {
      const respuesta = await fetch(URL);
      const respuestaJSON = await respuesta.json();
      // console.log(respuestaJSON)
      dispatch(setTraveLtime(respuestaJSON.rows[0].elements[0]))
    } catch (error) {
      console.log('error travelTime:',error)
    }

  }
  getTravelTime();

},[origin, destination]);

    return (
    <View>
      {/* <Text> Map</Text> */}
      <MapView
        ref={mapRef}
      mapType='mutedStandard'
      style={[styles.map, tw`flex-1`]}
    initialRegion={{
      latitude: origin.location.lat,
      longitude: origin.location.lng,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    }}
  >

        {origin && destination && (
             <MapViewDirections
             origin={origin.description}
             destination={destination.description}
             apikey={apiKey}
             strokeWidth={3}
             strokeColor='black'
           />
        )}


      {origin?.location && (
        <Marker 
        coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,

        }}
        title="Origin"
        description="This is where you are "
        identifier="origin"
        />


      )}

{destination?.location && (
        <Marker 
        coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,

        }}
        title="Destination"
        description="This is where you are going"
        identifier="destination"
        />


      )}
      
      
      
      </MapView>
    </View>
  )
}
const halfWindowHeight = (Dimensions.get('window').height) / 2;

const styles = StyleSheet.create({
    map: {
      ...StyleSheet.absoluteFillObject,
      // minHeight: 400,
      height: halfWindowHeight,
    },
});