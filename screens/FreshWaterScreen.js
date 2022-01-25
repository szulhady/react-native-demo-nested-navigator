import React, {useState} from 'react';
import { Text, View, Switch, Alert, ScrollView } from 'react-native';

// IMPORT COMPONENTS
import HeaderText from '../components/HeaderText';
import FreshWater from '../components/Control/Single/FreshWater';

const FreshWaterScreen = () => {

  const [freshWaterA,setFreshWaterA] = useState(false)
  const [freshWaterB,setFreshWaterB] = useState(false)
  const [freshWaterC,setFreshWaterC] = useState(false)
  const [freshWaterD,setFreshWaterD] = useState(false)
  const [freshWaterE,setFreshWaterE] = useState(false)

  const [isOnFreshWaterA, setIsOnFreshWaterA] = useState(false);
  const [isOnFreshWaterB, setIsOnFreshWaterB] = useState(false);
  const [isOnFreshWaterC, setIsOnFreshWaterC] = useState(false);
  const [isOnFreshWaterD, setIsOnFreshWaterD] = useState(false);
  const [isOnFreshWaterE, setIsOnFreshWaterE] = useState(false);

  
  const toggleSwitchFreshWaterA = () => {
    setIsOnFreshWaterA(previousState => !previousState);
    setFreshWaterA(previousState => !previousState)
  }
  const toggleSwitchFreshWaterB = () => {
    setIsOnFreshWaterB(previousState => !previousState);
    setFreshWaterB(previousState => !previousState)
  }
  const toggleSwitchFreshWaterC = () => {
    setIsOnFreshWaterC(previousState => !previousState);
    setFreshWaterC(previousState => !previousState)
  }
  const toggleSwitchFreshWaterD = () => {
    setIsOnFreshWaterD(previousState => !previousState);
    setFreshWaterD(previousState => !previousState)
  }
  const toggleSwitchFreshWaterE = () => {
    setIsOnFreshWaterE(previousState => !previousState);
    setFreshWaterE(previousState => !previousState)
  }

  
  //Set confirmation
  const ask = (toggle, text) =>  {
    Alert.alert(
      "Action",
      `Do you want to switch on/off the ${text}?`,
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
    <View>
      <Text>Fresh Water Screen</Text>
      <View style={{alignItems:"center", paddingVertical:10, backgroundColor:'#283747', borderRadius:15, marginBottom:20, width:"90%"}}>
          <View>
            <HeaderText title="Fresh Water" color="white"/>
          </View>
          <View  style={{flexDirection:"row", justifyContent:'space-around', alignItems:"center", width:"100%", paddingVertical:10, backgroundColor:'#283747', borderRadius:15}}>
          <View style={{alignItems:'center'}}>
            <FreshWater detail='Tank A' currentState={freshWaterA}/>
            <Switch
              trackColor={{ false: "red", true: "green" }}
              thumbColor={isOnFreshWaterA ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={()=> ask(toggleSwitchFreshWaterA, "fresh water A") }
              value={isOnFreshWaterA}
            />
          </View>
          <View style={{alignItems:'center'}}>
            <FreshWater detail='Tank B' currentState={freshWaterB}/>
            <Switch
              trackColor={{ false: "red", true: "green" }}
              thumbColor={isOnFreshWaterB ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={()=> ask(toggleSwitchFreshWaterB, "fresh water B") }
              value={isOnFreshWaterB}
            />
          </View>
          <View style={{alignItems:'center'}}>
            <FreshWater detail='Tank C' currentState={freshWaterC}/>
            <Switch
              trackColor={{ false: "red", true: "green" }}
              thumbColor={isOnFreshWaterC ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={()=> ask(toggleSwitchFreshWaterC, "fresh water C") }
              value={isOnFreshWaterC}
            />
          </View>
          <View style={{alignItems:'center'}}>
            <FreshWater detail='Tank D' currentState={freshWaterD}/>
            <Switch
              trackColor={{ false: "red", true: "green" }}
              thumbColor={isOnFreshWaterD ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={()=> ask(toggleSwitchFreshWaterD, "fresh water D") }
              value={isOnFreshWaterD}
            />
          </View>
          <View style={{alignItems:'center'}}>
            <FreshWater detail='Tank E' currentState={freshWaterE}/>
            <Switch
              trackColor={{ false: "red", true: "green" }}
              thumbColor={isOnFreshWaterE ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={()=> ask(toggleSwitchFreshWaterE, "fresh water E") }
              value={isOnFreshWaterE}
            />
          </View>
        </View>
        </View>

    </View>
  )
}

export default FreshWaterScreen
