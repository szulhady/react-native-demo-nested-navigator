import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { getHeaderTitle } from '@react-navigation/elements';

import {Button, View, Text, Dimensions, ScrollView} from 'react-native';

//IMPORT NAVIGATOR PACKAGES
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Tab = createBottomTabNavigator();

// IMPORT SCREENS
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import ControlScreen from '../screens/ControlScreen';
import ControlScreen2 from '../screens/ControlScreen2';

//IMPORT ICONS
import Ionicons from 'react-native-vector-icons/Ionicons';

function MyHeader(){
  return(
    <SafeAreaView >
      <ScrollView style={{height:windowHeight/3, backgroundColor: "#1a434e"}}>
        <View>
        <Text style={{color:'white', fontSize:18, fontWeight:"bold"}}>Dashboard</Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const TabNavigator = () => {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route})=>({
        tabBarStyle: {
          backgroundColor: '#1a434e',
          // backgroundColor: '#393E46',
      },
        tabBarIcon:({focused,color, size})=>{
         let iconName;
         if (route.name=='Home') { 
          iconName='ios-home' 
         }else if(route.name=='Trends'){
          // iconName='heart'
          iconName='ios-trending-up'
         }else if(route.name=="Controls"){
           iconName="ios-apps"
         }
         else if(route.name=="Controls2"){
          iconName="ios-apps"
        }
         else if(route.name=="Dripping"){
          iconName="ios-water"
        }
         else if(route.name=="Settings"){
          iconName="ios-beaker"
        }
    
        return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor:'#1a434e',
        // tabBarActiveTintColor:'#00ADB5',
        tabBarInactiveTintColor:'white',
        // tabBarInactiveTintColor:'#A0A0A0',
        tabBarActiveBackgroundColor:"white",
        header: ({ navigation, route, options }) => {
          const title = getHeaderTitle(options, route.name);
          return <MyHeader title={title} style={options.headerStyle} />;
        }
       }
       )}
   >
        {/* <Tab.Screen name="Home" component={HomeScreen} 
        options={{headerShown:false, tabBarLabel: 'Home' }}
        /> */}
        {/* <Tab.Screen name="Settings" component={SettingScreen} 
         options={{headerShown:false}}
        /> */}
        <Tab.Screen name="Controls" component={ControlScreen} 
         options={{headerShown:false}}
        />
        <Tab.Screen name="Controls2" component={ControlScreen2} 
        options={{headerShown:false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default TabNavigator
