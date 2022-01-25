import React, {useEffect, useState} from 'react';
import {Button, View, Text} from 'react-native';

//IMPORT ICONS
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

//FOR ANIMATION
import Animated, { useAnimatedStyle,withRepeat, withSequence, withTiming, Easing, useSharedValue } from 'react-native-reanimated';

function WaterDischarge(props) {
  const position = useSharedValue(0);
  useEffect(() => {
    position.value = withRepeat(
      withTiming(3, {
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
          <FontAwesome5 name={"water"} size={25} color={"#229954"} style={{padding:10}}/>
        </Animated.View>
          :
          <View style={{justifyContent: 'center', alignItems: 'center' }}>
          {/* <Text>{props.detail}</Text> */}
          <FontAwesome5 name={"water"} size={25} color={"#E74C3C"} style={{padding:10}}/>
      </View>
        }
        
    </View>
  );
}

export default WaterDischarge