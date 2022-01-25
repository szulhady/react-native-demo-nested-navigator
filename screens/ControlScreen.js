import React, {useState} from 'react';
import { Text, View, Switch, Alert, ScrollView, TouchableOpacity, StatusBar, SafeAreaView, Platform} from 'react-native';

import { ListItem, Icon } from 'react-native-elements';

//IMPORT COMPONENTS
import Header from '../components/Header';
import HeaderText from '../components/HeaderText'
import ExhaustFan from '../components/Control/Single/ExhaustFan';
import Aeration from '../components/Control/Single/Aeration';
import FreshWater from '../components/Control/Single/FreshWater'
import WaterDischarge from '../components/Control/Single/WaterDischarge';
import Feeding from '../components/Control/Single/Feeding';

function Control() {

  // Set inital value
  const [expandedTank1, setExpandedTank1] = useState(false);
  const [expandedTank2, setExpandedTank2] = useState(false);
  const [expandedTank3, setExpandedTank3] = useState(false);
  const [expandedTank4, setExpandedTank4] = useState(false);
  const [expandedTank5, setExpandedTank5] = useState(false);

  const [exhaustFan1,setExhaustFan1] = useState(false)
  const [exhaustFan2,setExhaustFan2] = useState(false)
  const [exhaustFan3,setExhaustFan3] = useState(false)
  const [exhaustFan4,setExhaustFan4] = useState(false)
  
  const [freshWaterA,setFreshWaterA] = useState(false)
  const [freshWaterB,setFreshWaterB] = useState(false)
  const [freshWaterC,setFreshWaterC] = useState(false)
  const [freshWaterD,setFreshWaterD] = useState(false)
  const [freshWaterE,setFreshWaterE] = useState(false)

  const [aerationA,setAerationA] = useState(false)
  const [aerationB,setAerationB] = useState(false)
  const [aerationC,setAerationC] = useState(false)
  const [aerationD,setAerationD] = useState(false)
  const [aerationE,setAerationE] = useState(false)

  const [limeWaterA,setLimeWaterA] = useState(false)
  const [limeWaterB,setLimeWaterB] = useState(false)
  const [limeWaterC,setLimeWaterC] = useState(false)
  const [limeWaterD,setLimeWaterD] = useState(false)
  const [limeWaterE,setLimeWaterE] = useState(false)
  
  const [feedingA,setFeedingA] = useState(false)
  const [feedingB,setFeedingB] = useState(false)
  
  const [waterDischargeA,setWaterDischargeA] = useState(false)
  const [waterDischargeB,setWaterDischargeB] = useState(false)
  const [waterDischargeC,setWaterDischargeC] = useState(false)
  const [waterDischargeD,setWaterDischargeD] = useState(false)
  const [waterDischargeE,setWaterDischargeE] = useState(false)


  const [isOnExhaustFan1, setIsOnExhaustFan1] = useState(false);
  const [isOnExhaustFan2, setIsOnExhaustFan2] = useState(false);
  const [isOnExhaustFan3, setIsOnExhaustFan3] = useState(false);
  const [isOnExhaustFan4, setIsOnExhaustFan4] = useState(false);
  
  const [isOnFreshWaterA, setIsOnFreshWaterA] = useState(false);
  const [isOnFreshWaterB, setIsOnFreshWaterB] = useState(false);
  const [isOnFreshWaterC, setIsOnFreshWaterC] = useState(false);
  const [isOnFreshWaterD, setIsOnFreshWaterD] = useState(false);
  const [isOnFreshWaterE, setIsOnFreshWaterE] = useState(false);

  const [isOnAerationA, setIsOnAerationA] = useState(false);
  const [isOnAerationB, setIsOnAerationB] = useState(false);
  const [isOnAerationC, setIsOnAerationC] = useState(false);
  const [isOnAerationD, setIsOnAerationD] = useState(false);
  const [isOnAerationE, setIsOnAerationE] = useState(false);

  const [isOnLimeWaterA, setIsOnLimeWaterA] = useState(false);
  const [isOnLimeWaterB, setIsOnLimeWaterB] = useState(false);
  const [isOnLimeWaterC, setIsOnLimeWaterC] = useState(false);
  const [isOnLimeWaterD, setIsOnLimeWaterD] = useState(false);
  const [isOnLimeWaterE, setIsOnLimeWaterE] = useState(false);
  
  const [isOnFeedingA, setIsOnFeedingA] = useState(false);
  const [isOnFeedingB, setIsOnFeedingB] = useState(false);

  const [isOnWaterDischargeA, setIsOnWaterDischargeA] = useState(false);
  const [isOnWaterDischargeB, setIsOnWaterDischargeB] = useState(false);
  const [isOnWaterDischargeC, setIsOnWaterDischargeC] = useState(false);
  const [isOnWaterDischargeD, setIsOnWaterDischargeD] = useState(false);
  const [isOnWaterDischargeE, setIsOnWaterDischargeE] = useState(false);
  
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

  const toggleSwitchAerationA = () => {
    setIsOnAerationA(previousState => !previousState);
    setAerationA(previousState => !previousState)
  }
  const toggleSwitchAerationB = () => {
    setIsOnAerationB(previousState => !previousState);
    setAerationB(previousState => !previousState)
  }
  const toggleSwitchAerationC = () => {
    setIsOnAerationC(previousState => !previousState);
    setAerationC(previousState => !previousState)
  }
  const toggleSwitchAerationD = () => {
    setIsOnAerationD(previousState => !previousState);
    setAerationD(previousState => !previousState)
  }
  const toggleSwitchAerationE = () => {
    setIsOnAerationE(previousState => !previousState);
    setAerationE(previousState => !previousState)
  }

  const toggleSwitchLimeWaterA = () => {
    setIsOnLimeWaterA(previousState => !previousState);
    setLimeWaterA(previousState => !previousState)
  }
  const toggleSwitchLimeWaterB = () => {
    setIsOnLimeWaterB(previousState => !previousState);
    setLimeWaterB(previousState => !previousState)
  }
  const toggleSwitchLimeWaterC = () => {
    setIsOnLimeWaterC(previousState => !previousState);
    setLimeWaterC(previousState => !previousState)
  }
  const toggleSwitchLimeWaterD = () => {
    setIsOnLimeWaterD(previousState => !previousState);
    setLimeWaterD(previousState => !previousState)
  }
  const toggleSwitchLimeWaterE = () => {
    setIsOnLimeWaterE(previousState => !previousState);
    setLimeWaterE(previousState => !previousState)
  }

  const toggleSwitchFeedingA = () => {
    setIsOnFeedingA(previousState => !previousState);
    setFeedingA(previousState => !previousState)
  }
  const toggleSwitchFeedingB = () => {
    setIsOnFeedingB(previousState => !previousState);
    setFeedingB(previousState => !previousState)
  }

  const toggleSwitchWaterDischargeA = () => {
    setIsOnWaterDischargeA(previousState => !previousState);
    setWaterDischargeA(previousState => !previousState)
  }
  const toggleSwitchWaterDischargeB = () => {
    setIsOnWaterDischargeB(previousState => !previousState);
    setWaterDischargeB(previousState => !previousState)
  }
  const toggleSwitchWaterDischargeC = () => {
    setIsOnWaterDischargeC(previousState => !previousState);
    setWaterDischargeC(previousState => !previousState)
  }
  const toggleSwitchWaterDischargeD = () => {
    setIsOnWaterDischargeD(previousState => !previousState);
    setWaterDischargeD(previousState => !previousState)
  }
  const toggleSwitchWaterDischargeE = () => {
    setIsOnWaterDischargeE(previousState => !previousState);
    setWaterDischargeE(previousState => !previousState)
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
    <ScrollView containerStyle={{ flex: 1}} style={{backgroundColor:"#fff"}}>
      {/* <StatusBar backgroundColor={"#1a434e"}/> */}
      <View
  style={{
    backgroundColor: '#1a434e',
    height: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight,
  }}>
  <StatusBar
    translucent
    backgroundColor="#1a434e"
    barStyle="light-content"
  />
</View>
      <SafeAreaView>
      <Header/>
      <View style={{        flex: 7,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        // paddingHorizontal: 20,
        paddingTop: 30,
        position:'relative',
        top:-90
        }}>
          <View style={{paddingHorizontal: 20, paddingBottom:15}}>
          <HeaderText  title="Control"/>
          </View>
          <View style={{paddingHorizontal:20}}>
            <Text style={{color:"gray"}}>
              Tank
            </Text>
            <Text style={{fontSize:12,color:"gray"}}>
              Click button in the drop down below to switch on/off the operation for each tank.
            </Text>
          </View>
          {/* topDivider */}
      <ListItem.Accordion 
        containerStyle={{backgroundColor: 'white', paddingVertical:15}}
        content={
          <>
                   <Icon name='grid' type='entypo' size={20} color="white" style={{padding:3, marginRight:15, borderRadius:10, backgroundColor:"#1a434e"}}/>
          <ListItem.Content >
            <ListItem.Title style={{color:'black'}}>Tank 1</ListItem.Title>
          </ListItem.Content >
        </>
      }
        isExpanded={expandedTank1}
        onPress={() => {
          setExpandedTank1(!expandedTank1);
        }}
      >
        {
          expandedTank1 ?
          <View>
          <View style={{flexDirection:"row",alignItems:'center', width:"100%" , justifyContent:'space-evenly', marginBottom:20}}>
            <TouchableOpacity style={{backgroundColor:"#1a434e", width:"40%", height:80, justifyContent:"center", borderRadius:15}} onPress={() => ask(toggleSwitchFreshWaterA, "Fresh Water A")}>
              <View style={{padding:5,alignItems:'center'}}>
                <FreshWater currentState={freshWaterA} detail="Fresh Water"/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:"#1a434e", width:"40%", height:80, justifyContent:"center", borderRadius:15 }} onPress={() => ask(toggleSwitchLimeWaterA, "Lime Water")}>
              <View style={{padding:5, alignItems:'center'}}>
                <FreshWater currentState={limeWaterA} detail="Lime Water"/>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:"row",alignItems:'center', width:"100%" , justifyContent:'space-evenly', marginBottom:20}}>
            <TouchableOpacity style={{backgroundColor:"#1a434e", width:"40%", height:80, justifyContent:"center", borderRadius:15}} onPress={() => ask(toggleSwitchAerationA, "Aeration")}>
              <View style={{padding:5,alignItems:'center'}}>
                <Aeration currentState={aerationA} detail="Aeration"/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:"#1a434e", width:"40%", height:80, justifyContent:"center", borderRadius:15 }} onPress={() => ask(toggleSwitchWaterDischargeA, "Water Discharge")}>
              <View style={{padding:5, alignItems:'center'}}>
                <WaterDischarge currentState={waterDischargeA} detail="Water Discharge"/>
              </View>
            </TouchableOpacity>
          </View>
        </View>
          :
          <View>

          </View>
        }

        </ListItem.Accordion>
        <ListItem.Accordion  
          containerStyle={{backgroundColor: 'white', paddingVertical:15}}
          content={
            <>
          <Icon name='grid' type='entypo' size={20} color="white" style={{padding:3, marginRight:15, borderRadius:10, backgroundColor:"#1a434e"}}/>
            <ListItem.Content >
              <ListItem.Title style={{color:'black'}}>Tank 2</ListItem.Title>
            </ListItem.Content >
          </>
        }
          isExpanded={expandedTank2}
          onPress={() => {
            setExpandedTank2(!expandedTank2);
          }}
        >
          {
            expandedTank2 ?
            <View>
            <View style={{flexDirection:"row",alignItems:'center', width:"100%" , justifyContent:'space-evenly', marginBottom:20}}>
              <TouchableOpacity style={{backgroundColor:"#1a434e", width:"40%", height:80, justifyContent:"center", borderRadius:15}} onPress={() => ask(toggleSwitchFreshWaterB, "Fresh Water")}>
                <View style={{padding:5,alignItems:'center'}}>
                  <FreshWater currentState={freshWaterB} detail="Fresh Water"/>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:"#1a434e", width:"40%", height:80, justifyContent:"center", borderRadius:15 }} onPress={() => ask(toggleSwitchLimeWaterB, "Lime Water")}>
                <View style={{padding:5, alignItems:'center'}}>
                  <FreshWater currentState={limeWaterB} detail="Lime Water"/>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row",alignItems:'center', width:"100%" , justifyContent:'space-evenly', marginBottom:20}}>
              <TouchableOpacity style={{backgroundColor:"#1a434e", width:"40%", height:80, justifyContent:"center", borderRadius:15}} onPress={() => ask(toggleSwitchAerationB, "Aeration")}>
                <View style={{padding:5,alignItems:'center'}}>
                  <Aeration currentState={aerationB} detail="Aeration"/>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:"#1a434e", width:"40%", height:80, justifyContent:"center", borderRadius:15 }} onPress={() => ask(toggleSwitchWaterDischargeB, "Water Discharge")}>
                <View style={{padding:5, alignItems:'center'}}>
                  <WaterDischarge currentState={waterDischargeB} detail="Water Discharge"/>
                </View>
            </TouchableOpacity>
            </View>
          </View>
            :
            <View>

            </View>
          }

        </ListItem.Accordion>
        <ListItem.Accordion  
          containerStyle={{backgroundColor: 'white', paddingVertical:15}}
          content={
            <>
           <Icon name='grid' type='entypo' size={20} color="white" style={{padding:3, marginRight:15, borderRadius:10, backgroundColor:"#1a434e"}}/>
            <ListItem.Content >
              <ListItem.Title style={{color:'black'}}>Tank 3</ListItem.Title>
            </ListItem.Content >
          </>
        }
          isExpanded={expandedTank3}
          onPress={() => {
            setExpandedTank3(!expandedTank3);
          }}
        >
          {
            expandedTank3
            ?
            <View>
            <View style={{flexDirection:"row",alignItems:'center', width:"100%" , justifyContent:'space-evenly', marginBottom:20}}>
              <TouchableOpacity style={{backgroundColor:"#1a434e", width:"40%", height:80, justifyContent:"center", borderRadius:15}} onPress={() => ask(toggleSwitchFreshWaterC, "Fresh Water")}>
                <View style={{padding:5,alignItems:'center'}}>
                  <FreshWater currentState={freshWaterC} detail="Fresh Water"/>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:"#1a434e", width:"40%", height:80, justifyContent:"center", borderRadius:15 }} onPress={() => ask(toggleSwitchLimeWaterC, "Lime Water")}>
                <View style={{padding:5, alignItems:'center'}}>
                  <FreshWater currentState={limeWaterC} detail="Lime Water"/>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row",alignItems:'center', width:"100%" , justifyContent:'space-evenly', marginBottom:20}}>
              <TouchableOpacity style={{backgroundColor:"#1a434e", width:"40%", height:80, justifyContent:"center", borderRadius:15}} onPress={() => ask(toggleSwitchAerationC, "Aeration")}>
                <View style={{padding:5,alignItems:'center'}}>
                  <Aeration currentState={aerationC} detail="Aeration"/>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:"#3c4466", width:"40%", height:80, justifyContent:"center", borderRadius:15 }} onPress={() => ask(toggleSwitchWaterDischargeC, "Water Discharge")}>
                <View style={{padding:5, alignItems:'center'}}>
                  <WaterDischarge currentState={waterDischargeC} detail="Water Discharge"/>
                </View>
              </TouchableOpacity>
            </View>
          </View>
            :
            <View>

            </View>
          }

        </ListItem.Accordion>
        <ListItem.Accordion 
          containerStyle={{backgroundColor: 'white', paddingVertical:15}}
          content={
            <>
          <Icon name='grid' type='entypo' size={20} color="white" style={{padding:3, marginRight:15, borderRadius:10, backgroundColor:"#1a434e"}}/>
            <ListItem.Content >
              <ListItem.Title style={{color:'black'}}>Tank 4</ListItem.Title>
            </ListItem.Content >
          </>
        }
          isExpanded={expandedTank4}
          onPress={() => {
            setExpandedTank4(!expandedTank4);
          }}
        >
          {
            expandedTank4
            ?
            <View>
            <View style={{flexDirection:"row",alignItems:'center', width:"100%" , justifyContent:'space-evenly', marginBottom:20}}>
              <TouchableOpacity style={{backgroundColor:"#1a434e", width:"40%", height:80, justifyContent:"center", borderRadius:15}} onPress={() => ask(toggleSwitchFreshWaterD, "Fresh Water")}>
                <View style={{padding:5,alignItems:'center'}}>
                  <FreshWater currentState={freshWaterD} detail="Fresh Water"/>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:"#1a434e", width:"40%", height:80, justifyContent:"center", borderRadius:15 }} onPress={() => ask(toggleSwitchLimeWaterD, "Lime Water")}>
                <View style={{padding:5, alignItems:'center'}}>
                  <FreshWater currentState={limeWaterD} detail="Lime Water"/>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row",alignItems:'center', width:"100%" , justifyContent:'space-evenly', marginBottom:20}}>
              <TouchableOpacity style={{backgroundColor:"#1a434e", width:"40%", height:80, justifyContent:"center", borderRadius:15}} onPress={() => ask(toggleSwitchAerationD, "Aeration")}>
                <View style={{padding:5,alignItems:'center'}}>
                  <Aeration currentState={aerationD} detail="Aeration"/>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:"#1a434e", width:"40%", height:80, justifyContent:"center", borderRadius:15 }} onPress={() => ask(toggleSwitchWaterDischargeD, "Water Discharge")}>
                <View style={{padding:5, alignItems:'center'}}>
                  <WaterDischarge currentState={waterDischargeD} detail="Water Discharge"/>
                </View>
            </TouchableOpacity>
            </View>
          </View>
            :
            <View>

            </View>
          }

        </ListItem.Accordion>
        <ListItem.Accordion  
          containerStyle={{backgroundColor: 'white', paddingVertical:15}}
          content={
            <>
          <Icon name='grid' type='entypo' size={20} color="white" style={{padding:3, marginRight:15, borderRadius:10, backgroundColor:"#1a434e"}}/>
            <ListItem.Content >
              <ListItem.Title style={{color:'black'}}>Tank 5</ListItem.Title>
            </ListItem.Content >
          </>
        }
          isExpanded={expandedTank5}
          onPress={() => {
            setExpandedTank5(!expandedTank5);
          }}
        >
          {
            expandedTank5
            ?
            <View>
            <View style={{flexDirection:"row",alignItems:'center', width:"100%" , justifyContent:'space-evenly', marginBottom:20}}>
              <TouchableOpacity style={{backgroundColor:"#1a434e", width:"40%", height:80, justifyContent:"center", borderRadius:15}} onPress={() => ask(toggleSwitchFreshWaterE, "Fresh Water")}>
                <View style={{padding:5,alignItems:'center'}}>
                  <FreshWater currentState={freshWaterE} detail="Fresh Water"/>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:"#1a434e", width:"40%", height:80, justifyContent:"center", borderRadius:15 }} onPress={() => ask(toggleSwitchLimeWaterE, "Lime Water")}>
                <View style={{padding:5, alignItems:'center'}}>
                  <FreshWater currentState={limeWaterE} detail="Lime Water"/>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row",alignItems:'center', width:"100%" , justifyContent:'space-evenly', marginBottom:20}}>
              <TouchableOpacity style={{backgroundColor:"#1a434e", width:"40%", height:80, justifyContent:"center", borderRadius:15}} onPress={() => ask(toggleSwitchAerationE, "Aeration")}>
                <View style={{padding:5,alignItems:'center'}}>
                  <Aeration currentState={aerationE} detail="Aeration"/>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:"#1a434e", width:"40%", height:80, justifyContent:"center", borderRadius:15 }} onPress={() => ask(toggleSwitchWaterDischargeE, "Water Discharge")}>
                <View style={{padding:5, alignItems:'center'}}>
                  <WaterDischarge currentState={waterDischargeE} detail="Water Discharge"/>
                </View>
            </TouchableOpacity>
            </View>
          </View>
            :
            <View>

            </View>
          }

        </ListItem.Accordion>
      </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default function ControlScreen() {
  return (
      <Control/>
  );
}