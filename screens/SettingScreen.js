import React from 'react'
import { View, Text } from 'react-native'

//IMPORT COMPONENTS
import HeaderText from '../components/HeaderText'

const Setting = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Setting Screen
        </Text>
        <HeaderText title="Setting"/>
    </View>
  );
}

export default function SettingScreen() {
  return (
      <Setting/>
  );
}
