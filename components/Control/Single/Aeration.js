import React, {useEffect, useState} from 'react';
import {Button, View, Text} from 'react-native';

//IMPORT ICONS
import Entypo from 'react-native-vector-icons/Entypo';


//FOR ANIMATION
import Animated, { useAnimatedStyle,withRepeat, withSequence, withTiming, Easing, useSharedValue } from 'react-native-reanimated';


function Aeration(props) {
  const position = useSharedValue(0);
  useEffect(() => {
    position.value = withRepeat(
      withTiming(1, {
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
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize:13, color:'white'}}>{props.detail}</Text>
        {
          props.currentState === true ?
        <Animated.View style={[animatedStyle]}>
          <Entypo name={"air"} size={25} color={"#229954"} style={{padding:10}}/>
        </Animated.View>
          :
          <View style={{justifyContent: 'center', alignItems: 'center' }}>
          {/* <Text>{props.detail}</Text> */}
          <Entypo name={"air"} size={25} color={"#b95151"} style={{padding:10}}/>
      </View>
        }
        
    </View>
  );
}

export default Aeration