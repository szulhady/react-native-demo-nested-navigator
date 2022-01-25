import React , {useEffect, useState} from 'react';
import { Text, View } from 'react-native';

//FOR ANIMATION
import Animated, { useAnimatedStyle,withRepeat, withSequence, withTiming, Easing, useSharedValue } from 'react-native-reanimated';

//IMPORT ICONS
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function ExhaustFan(props) {
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
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize:13, color:'white'}}>{props.detail}</Text>
        {
          props.currentState === true ?
        <Animated.View style={[style]}>
          <FontAwesome5 name={"fan"} size={60} color={"#229954"} style={{padding:10}}/>
        </Animated.View>
          :
          <View style={{justifyContent: 'center', alignItems: 'center' }}>
          {/* <Text>{props.detail}</Text> */}
          <FontAwesome5 name={"fan"} size={60} color={"#b95151"} style={{padding:10}}/>
      </View>
        }
        
    </View>
  );
}

export default ExhaustFan