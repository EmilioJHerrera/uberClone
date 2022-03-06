import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native'
import React, {useState} from 'react'
import tw from 'tailwind-react-native-classnames';

import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTimeTravel } from '../slices/navSlice';

import 'intl';
import 'intl/locale-data/jsonp/en'; // or any other locale you need
const data = [
  {
    id: 'UBER-X-123',
    title: 'Uber X',
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: 'UBER-XL-456',
    title: 'Uber XL',
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: 'UBER-LUX-789',
    title: 'Uber LUX',
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const auxiliarPrice = 1.5;

const RideOptionsCar = () => {
  const [selected, setSelected] = useState(null);
  
  const navigation = useNavigation();

  const travelTimeInfo = useSelector(selectTimeTravel)


  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity 
        style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
        onPress={()=>navigation.navigate("NavigateCard")}>
        <AntDesign name="back" size={24} color="black" />
          </TouchableOpacity>
      <Text style={tw `text-center py-5 text-xl`}>Select a Ride - {travelTimeInfo?.distance.text}</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item})=>{
          const {id,title,multiplier,image} = item;
          return (
          
          <TouchableOpacity 
          onPress={()=>{setSelected(item)}}
          style={tw`flex-row justify-between items-center px-10 ${id=== selected?.id && 'bg-gray-200'}`}>
            {/* <Text>{title}</Text> */}
            <Image
            source={{uri: image}}
            style= {{width: 100, height: 100, resizeMode: 'contain'}}
            />

            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text> 
              <Text>{travelTimeInfo?.duration.text}</Text>

            </View>

            <Text style={tw` text-xl`}>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'EUR',
            }).format(
              (travelTimeInfo?.distance.value * multiplier * auxiliarPrice) /100
            )}
            

             
            </Text>
          </TouchableOpacity>
          )
            
}}

      />

      <View>
        <TouchableOpacity 
        disabled={!selected}
        style={tw`bg-black m-10 py-3 ${!selected && 'bg-gray-300'}`}>
          <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
      

    </SafeAreaView>
  )
}

export default RideOptionsCar

const styles = StyleSheet.create({})