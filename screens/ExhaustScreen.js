import React , {useEffect, useState} from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native'

//IMPORT COMPONENTS
import ExhaustFan from '../components/Control/Single/ExhaustFan';

//IMPORT ICONS
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

//FOR ANIMATION
import Animated, { useAnimatedStyle,withRepeat, withSequence, withTiming, Easing, useSharedValue } from 'react-native-reanimated';



const ExhaustScreen = () => {

  // Set inital value
  const [exhaustFan1,setExhaustFan1] = useState(false)
  const [exhaustFan2,setExhaustFan2] = useState(false)
  const [exhaustFan3,setExhaustFan3] = useState(false)
  const [exhaustFan4,setExhaustFan4] = useState(false)

  const [isOnExhaustFan1, setIsOnExhaustFan1] = useState(false);
  const [isOnExhaustFan2, setIsOnExhaustFan2] = useState(false);
  const [isOnExhaustFan3, setIsOnExhaustFan3] = useState(false);
  const [isOnExhaustFan4, setIsOnExhaustFan4] = useState(false);
  
  const toggleSwitchExhaustFan1 = () => {
    setIsOnExhaustFan1(previousState => !previousState);
    setExhaustFan1(previousState => !previousState)
  }
  const toggleSwitchExhaustFan2 = () => {
    setIsOnExhaustFan2(previousState => !previousState);
    setExhaustFan2(previousState => !previousState)
  }
  const toggleSwitchExhaustFan3 = () => {
    setIsOnExhaustFan3(previousState => !previousState);
    setExhaustFan3(previousState => !previousState)
  }
  const toggleSwitchExhaustFan4 = () => {
    setIsOnExhaustFan4(previousState => !previousState);
    setExhaustFan4(previousState => !previousState)
  }

  // function ExhaustFan(){
//   const position = useSharedValue("0deg");
//   useEffect(() => {
//     position.value = withRepeat(
//       withSequence(
//         withTiming(360 + 'deg', { duration: 0, easing: Easing.linear }), 
//         withTiming(0 + 'deg', { duration: 1500, easing: Easing.linear }),   
//       ),
//     -1,
//     false,
//     );
//   },[value]);

//   const [value, setValue] = useState(0);

//   const style = useAnimatedStyle(() => {
//     return {
//        transform: [
//          {
//            rotate:position.value,
//         },
//        ],
//      };
//    });
//   return(
//     <Animated.View style={[style]}>
//       <FontAwesome5 name={"fan"} size={60} color={"#FF4466"} style={{padding:10}}/>
//     </Animated.View>
//   )
// }

  //Set confirmation
  const ask = (toggle, text) =>  {
    let currentState
    let action
    if(text === "Exhaust fan 1"){
      if (exhaustFan1===true){
        action="turn off"
      }else{
        action = "turn on"
      }
    }

    if(text === "Exhaust fan 2"){
      if (exhaustFan2===true){
        action="turn off"
      }else{
        action = "turn on"
      }
    }

    if(text === "Exhaust fan 3"){
      if (exhaustFan3===true){
        action="turn off"
      }else{
        action = "turn on"
      }
    }

    if(text === "Exhaust fan 4"){
      if (exhaustFan4===true){
        action="turn off"
      }else{
        action = "turn on"
      }
    }
    Alert.alert(
      "Action",
      `Do you want to ${action} the ${text}?`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => toggle() }
      ]
    );
  }

  return (
    <ScrollView style={{flex: 1, backgroundColor:"#29324e"}}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ flexDirection:"row",alignItems:'center', width:"100%" , justifyContent:'space-evenly', marginBottom:20, marginTop:20}}>
        <TouchableOpacity style={{backgroundColor:"#3c4466", width:"40%", height:160, justifyContent:"center", borderRadius:15, borderWidth:4, borderColor:"#303954" }} onPress={() => ask(toggleSwitchExhaustFan1, "Exhaust fan 1")}>
          <View style={{padding:15,alignItems:'center'}}>
            {/* <Text style={{textAlign:"center", color:'white'}}>Exhaust Fan 1</Text> */}
            <ExhaustFan currentState={exhaustFan1} detail="Exhaust Fan 1"/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:"#3c4466", width:"40%", height:160, justifyContent:'center', borderRadius:15}} onPress={() => ask(toggleSwitchExhaustFan2, "Exhaust fan 2")}>
          <View style={{padding:15,alignItems:'center'}}>
            {/* <Text style={{textAlign:"center", color:'white'}}>Exhaust Fan 2</Text> */}
            <ExhaustFan currentState={exhaustFan2} detail="Exhaust Fan 2"/>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:"row",alignItems:'center', width:"100%" , justifyContent:'space-evenly', marginBottom:20}}>
        <TouchableOpacity style={{backgroundColor:"#3c4466", width:"40%", height:160, justifyContent:"center", borderRadius:15}} onPress={() => ask(toggleSwitchExhaustFan3, "Exhaust fan 3")}>
          <View style={{padding:15,alignItems:'center'}}>
            {/* <Text style={{textAlign:"center", color:'white'}}>Exhaust Fan 3</Text> */}
            <ExhaustFan currentState={exhaustFan3} detail="Exhaust Fan 3"/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:"#3c4466", width:"40%", height:160, justifyContent:"center", borderRadius:15 }} onPress={() => ask(toggleSwitchExhaustFan4, "Exhaust fan 4")}>
          <View style={{padding:15, alignItems:'center'}}>
            {/* <Text style={{textAlign:"center", color:'white'}}>Exhaust Fan 4</Text> */}
            <ExhaustFan currentState={exhaustFan4} detail="Exhaust Fan 4"/>
          </View>
        </TouchableOpacity>
      </View>

      {/* <View style={{flexDirection:"row",alignItems:'center', width:"100%" , justifyContent:'space-evenly', marginBottom:20}}>
        <TouchableOpacity style={{backgroundColor:"#3c4466", width:"40%", height:160, justifyContent:'center', borderRadius:15}} onPress={() => navigation.navigate('FeedingScreen')}>
          <View style={{padding:15,alignItems:'center'}}>
            <Text style={{textAlign:"center", color:'white'}}>Feeding</Text>
            <ExhaustFan/>
          </View>
        </TouchableOpacity>

      </View> */}

    </View>
          
    </ScrollView>
  )
}

export default ExhaustScreen
