import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';

import { Provider} from 'react-redux';
import NavOptions from './components/NavOptions';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import store from './store';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <Provider store={ store}>
    
    <NavigationContainer>
      <KeyboardAvoidingView style={{flex:1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name="MapScreen" 
        component={MapScreen} 
        options={{
          headerShown: false,
        }}
        />
      </Stack.Navigator>
      </KeyboardAvoidingView>
      {/* <HomeScreen/>
       */}
    </NavigationContainer>
      
      
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
