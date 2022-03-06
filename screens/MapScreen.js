import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import MapView from 'react-native-maps';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCar from '../components/RideOptionsCar';

import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
 
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <View>
  
  <TouchableOpacity 
  onPress={()=>navigation.navigate("Home")}
  style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}>
  <Entypo name="menu" size={24} color="black" />
  </TouchableOpacity>
  
       <View style={[tw`h-1/2`, styles.mapContainer]}>
         <Map/> 
       </View>
       <View style={[tw`h-1/2`, styles.prueba]} >
         <Stack.Navigator>
          
            <Stack.Screen
              name="NavigateCard"
              component={NavigateCard}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="RideOptionsCar"
              component={RideOptionsCar}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
       </View>
    </View>
  );
}
          

const styles = StyleSheet.create({
 mapContainer: {
   backgroundColor: 'transparent',
   
    ...StyleSheet.absoluteFillObject,
 },
 prueba:{
    backgroundColor: 'transparent',
    marginTop: 500,
 }
});
export default MapScreen