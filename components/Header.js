import React from 'react'
import { View, Text } from 'react-native'

//IMPORT ICONS
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => {
  return (
    <View style={{ flex: 1,
      paddingHorizontal: 20,
      paddingBottom: 130,
      paddingTop:20,
      backgroundColor:"#1a434e"}}>
        <MaterialCommunityIcons name={"view-dashboard"} size={30} color={"white"} />
      <Text style={{color:"white", fontSize:18, fontWeight:"bold", paddingTop:15}}>IMRoNS</Text>
      <Text style={{color:"white", fontSize:12, paddingTop:15}}>Intelligent Macrobrachium Rosenbergii Nursery System</Text>
      <Text style={{color:"#aaaaaa", fontSize:12, paddingTop:5}}>Section to control operation for each tanks</Text>
    </View>
  )
}

export default Header
