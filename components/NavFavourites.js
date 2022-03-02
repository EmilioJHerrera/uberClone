import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import { FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import tw from 'tailwind-react-native-classnames';

const data = [
    {
        id: '123',
        icon: "home",
        location: "Home",
        destination: "Code Street, London, UK",
    },
    {
        id: '456',
        icon: "hdd",
        location: "Work",
        destination: "London Eye, London, UK",
},
];


const NavFavourites = () => {
  return (
    <View>
     
      
      
      <FlatList

      data={data}
      ItemSeparatorComponent={() =>(
        <View style={tw`bg-gray-200`, {height: 1}}></View>  
      ) }
      renderItem={({item, index})=>{
       const { icon, location, destination} = item;
       return(
       <TouchableOpacity style={tw` flex-row items-center p-5`}>
                  <AntDesign 
                  style= { tw`mr-4 rounded-full bg-gray-300 p-3`}
                  name={icon} size={24} color="black" />
                  
                  <View>
                  <Text style={ tw`font-semibold text-lg`}>{location}</Text>
                  <Text style={ tw`text-gray-500`}>{destination}</Text>
                  </View>
              </TouchableOpacity>
       )}}
      keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default NavFavourites;

// const styles = StyleSheet.create({})