import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { useDispatch } from 'react-redux';
import {setDestination, setOrigin} from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';

import { apiKey } from '../apiKey';

const HomeScreen = () => {

const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>

    
    <View style={tw`p-5`}>
            <Image
            style={{width: 100, height: 100, resizeMode: 'contain'}}
            source={{
                uri: "https://links.papareact.com/gzs",
                
            }}
            />
            <NavOptions/>





    </View>





                      <GooglePlacesAutocomplete
                      styles={{fontSize: 18, flex: 0, backgroundColor: 'red'}}
                      returnKeyType={"search"}
                      nearbyPlacesAPI='GooglePlacesSearch'
                      fetchDetails={true}
                      enablePoweredByContainer={false}
                        debounce={200}
                        placeholder='Search'
                        onPress={(data, details = null)  => {
                            // 'details' is provided when fetchDetails = true
                            console.log('data:', data);
                            console.log('details', details);
                            dispatch(setOrigin({
                              location: details.geometry.location,
                              description: data.description
                            }))

                            dispatch(setDestination(null))
                          
                          }}

                        query={{
                            key: apiKey,
                            language: 'es',
                          }}
                          />

<View>
                          <NavFavourites/>
  
</View>
     
    </SafeAreaView>
  )
}

// const styles = StyleSheet.create({

// });
export default HomeScreen