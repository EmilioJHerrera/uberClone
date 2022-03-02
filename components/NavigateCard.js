import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';


import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';

const NavigateCard = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning</Text>

        {/* <View style={tw`border-t border-gray-200 flex-shrink`}> */}
            {/* <View> */}
            <GooglePlacesAutocomplete
            styles={inputStyles}
            returnKeyType={"search"}
            nearbyPlacesAPI='GooglePlacesSearch'
            fetchDetails={true}
            enablePoweredByContainer={false}
            debounce={400}
            placeholder='Where to?'
                onPress={(data, details = null)  => {
                // 'details' is provided when fetchDetails = true
                    console.log('data:', data);
                    console.log('details', details);
                    dispatch(setDestination({
                        location: details.geometry.location,
                        description: data.description,
                    }))
                    navigation.navigate('RideOptionsCar')
         
                    }}
          query={{
          key: 'AIzaSyCPYXspELOyDiC2avsXxxvH_iIjKk_Vf94',
          language: 'en',
        }}
        />

        <NavFavourites/>
            {/* </View> */}

        {/* </View> */}

    </SafeAreaView>
  )
}

const inputStyles = StyleSheet.create({
container:{
    backgroundColor: 'white',
    paddingTop: 10,
},
textInput:{
    backgroundColor:'#DDDDDF',
    fontSize: 18,
},
textInputContainer:{
    paddingHorizontal: 20,
    paddingBottom: 0,
},
})





export default NavigateCard