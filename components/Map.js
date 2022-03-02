import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import MapView, { Marker } from 'react-native-maps';

import MapViewDirections from 'react-native-maps-directions';


import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { selectOrigin, selectDestination } from '../slices/navSlice';

import {useRef, useEffect} from 'react';

export default function Map() {

    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)

    const mapRef = useRef(null);

useEffect(()=> {
    if (!origin || !destination) {
        return
    }
    mapRef.current.fitToSuppliedMarkers([ 'destination',"origin"],{
        edgePadding: {top:50, right:50, bottom:50, left:50},
    })
},[origin, destination])

    return (
    <View>
      <Text> Map</Text>
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
             apikey='AIzaSyCPYXspELOyDiC2avsXxxvH_iIjKk_Vf94'
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

const styles = StyleSheet.create({
    map: {
      ...StyleSheet.absoluteFillObject,
      minHeight: 400,
    },
});