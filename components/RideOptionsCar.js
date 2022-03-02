import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';

const RideOptionsCar = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <Text style={tw `text-center py-5 text-xl`}>Select a Ride</Text>
    </SafeAreaView>
  )
}

export default RideOptionsCar

const styles = StyleSheet.create({})