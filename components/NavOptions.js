import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

const data = [
    {
        id:"123",
        title: "get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id:"456",
        title: "order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    }
]

const NavOptions = () => {

    const navigation = useNavigation();
    const origin = useSelector(selectOrigin)
  return (
    <View>
        
        <FlatList
        data={data}
        horizontal={true}
        renderItem= {({item})=>{
            return (
                <TouchableOpacity 
                disabled={!origin}
                onPress={()=> navigation.navigate(item.screen)}
                style={tw`p-2 pl-6 pb-6 pt-4 bg-gray-200 m-2 w-40`}>
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <View style={tw`${!origin && "opacity-20" } `}>
                        <Image
                        style={{width: 120, height: 120, resizeMode: 'contain'}}
                        source={{
                            uri: item.image
                        }}
                        />
                    </View>
                    <AntDesign 
                    style={tw`p-2 bg-black rounded-full w-10 mt-4`} 
                    name="arrowright" size={24} color="white" />
                </TouchableOpacity>
            )
        }}
        />
        </View>
  )
    }

export default NavOptions