import React , {useEffect, useState} from 'react';
import { Button, ScrollView, View, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// IMPORT SCREENS
import ExhaustScreen from '../screens/ExhaustScreen'
import AerationScreen from '../screens/AerationScreen';
import FreshWaterScreen from '../screens/FreshWaterScreen';
import LimeWaterScreen from '../screens/LimeWaterScreen';
import FeedingScreen from '../screens/FeedingScreen';

//IMPORT ICONS
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

//FOR ANIMATION
import Animated, { useAnimatedStyle,withRepeat, withSequence, withTiming, Easing, useSharedValue } from 'react-native-reanimated';

function ExhaustFan(){
  const position = useSharedValue("0deg");
  useEffect(() => {
    position.value = withRepeat(
      withSequence(
        withTiming(360 + 'deg', { duration: 0, easing: Easing.linear }), 
        withTiming(0 + 'deg', { duration: 1500, easing: Easing.linear }),   
      ),
    -1,
    false,
    );
  },[value]);

  const [value, setValue] = useState(0);

  const style = useAnimatedStyle(() => {
    return {
       transform: [
         {
           rotate:position.value,
        },
       ],
     };
   });
  return(
    <Animated.View style={[style]}>
      <FontAwesome5 name={"fan"} size={60} color={"#FF4466"} style={{padding:10}}/>
    </Animated.View>
  )
}

function Water (props){
  const position = useSharedValue(0);
  useEffect(() => {
    position.value = withRepeat(
      withTiming(5, {
        duration: 150,
      }),
      -1,
      true,
    );
  },[]);

  const [value, setValue] = useState(0);

  const animatedStyle = useAnimatedStyle(() => {
    // console.log(position.value);
    return {
      top: position.value,
    };
  });
  return(
    <Animated.View style={[animatedStyle]}>
      <Entypo name={"water"} size={60} color={props.color} style={{padding:10}}/>
    </Animated.View>
  )
}

function Air(){
  const position = useSharedValue(0);
  useEffect(() => {
    position.value = withRepeat(
      withTiming(5, {
        duration: 150,
      }),
      -1,
      true,
    );
  },[]);

  const [value, setValue] = useState(0);

  const animatedStyle = useAnimatedStyle(() => {
    // console.log(position.value);
    return {
      left: position.value,
    };
  });
  return(
    <Animated.View style={[animatedStyle]}>
      <Entypo name={"air"} size={60} color={"#ffffff"} style={{padding:10}}/>
    </Animated.View>
  )
}

function Feed(){
  const position = useSharedValue(0);
  useEffect(() => {
    position.value = withRepeat(
      withTiming(5, {
        duration: 150,
      }),
      -1,
      true,
    );
  },[]);

  const [value, setValue] = useState(0);

  const animatedStyle = useAnimatedStyle(() => {
    // console.log(position.value);
    return {
      top: position.value,
    };
  });
  return(
    <Animated.View style={[animatedStyle]}>
     <Ionicons name={"water"} size={60} color={"#783f04"} style={{padding:10}}/>
    </Animated.View>
  )
}

function HomeScreen({ navigation }) {
  return (
    <ScrollView style={{flex: 1, backgroundColor:"#29324e"}}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{flexDirection:"row",alignItems:'center', width:"100%" , justifyContent:'space-evenly', marginBottom:20, marginTop:20}}>
        <TouchableOpacity style={{backgroundColor:"#3c4466", width:"40%", height:160, justifyContent:"center", borderRadius:15 }} onPress={() => navigation.navigate('ExhaustScreen')}>
          <View style={{padding:15,alignItems:'center'}}>
            <Text style={{textAlign:"center", color:'white'}}>Exhaust Fan</Text>
            <ExhaustFan/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:"#3c4466", width:"40%", height:160, justifyContent:'center', borderRadius:15}} onPress={() => navigation.navigate('AerationScreen')}>
          <View style={{padding:15,alignItems:'center'}}>
            <Text style={{textAlign:"center", color:'white'}}>Aeration</Text>
            <Air/>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:"row",alignItems:'center', width:"100%" , justifyContent:'space-evenly', marginBottom:20}}>
        <TouchableOpacity style={{backgroundColor:"#3c4466", width:"40%", height:160, justifyContent:"center", borderRadius:15}} onPress={() => navigation.navigate('FreshWaterScreen')}>
          <View style={{padding:15,alignItems:'center'}}>
            <Text style={{textAlign:"center", color:'white'}}>Fresh Water</Text>
            <Water color="#B1D0E0"/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:"#3c4466", width:"40%", height:160, justifyContent:"center", borderRadius:15 }} onPress={() => navigation.navigate('LimeWaterScreen')}>
          <View style={{padding:15, alignItems:'center'}}>
            <Text style={{textAlign:"center", color:'white'}}>Lime Water</Text>
            <Water color="#BFFF00"/>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:"row",alignItems:'center', width:"100%" , justifyContent:'space-evenly', marginBottom:20}}>
        <TouchableOpacity style={{backgroundColor:"#3c4466", width:"40%", height:160, justifyContent:'center', borderRadius:15}} onPress={() => navigation.navigate('FeedingScreen')}>
          <View style={{padding:15,alignItems:'center'}}>
            <Text style={{textAlign:"center", color:'white'}}>Feeding</Text>
            <Feed/>
          </View>
        </TouchableOpacity>

      </View>

    </View>
          
    </ScrollView>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Controls" component={HomeScreen} />
      <Stack.Screen name="ExhaustScreen" component={ExhaustScreen} />
      <Stack.Screen name="AerationScreen" component={AerationScreen} />
      <Stack.Screen name="FreshWaterScreen" component={FreshWaterScreen} />
      <Stack.Screen name="LimeWaterScreen" component={LimeWaterScreen} />
      <Stack.Screen name="FeedingScreen" component={FeedingScreen} />
    </Stack.Navigator>
  );
}

export default function StackNavigator() {
  return (
    <NavigationContainer independent={true}>
      <MyStack />
    </NavigationContainer>
  );
}
