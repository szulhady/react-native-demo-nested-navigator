
import * as React from 'react';
import { Text, View, Button, Dimensions, ScrollView ,StatusBar } from 'react-native';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

//IMPORT COMPONENTS
import Header from '../components/Header';
import HeaderText from '../components/HeaderText'


const windowHeight = Dimensions.get('window').height;

export default function HomeScreen() {
  return (
    <ScrollView containerStyle={{ flex: 1}} style={{backgroundColor:"#fff"}}>
      <StatusBar backgroundColor={"#1a434e"}/>
      <View style={{ flex: 1}}>
      <Header/>
      <View style={{        flex: 7,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 20,
        position:'relative',
        top:-90
        }}>
      {/* <Text>
        Home Screen
        </Text> */}
        <HeaderText title="Home"/>
        <HeaderText title="Home"/>
        <HeaderText title="Home"/>
        <HeaderText title="Home"/>
        <HeaderText title="Home"/>
        <HeaderText title="Home"/>
        <HeaderText title="Home"/>
        <HeaderText title="Home"/>
        <HeaderText title="Home"/>
        </View>
        </View>
    </ScrollView>
  );
}

// export default function HomeScreen() {
//   return (
//       <Home/>
//   );
// }