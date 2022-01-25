import React from 'react'
import { View, Text } from 'react-native'

const HeaderText = (props) => {
  return (
    <View>
      <Text style={{color:props.color, fontWeight:"bold"}}>{props.title}</Text>
    </View>
  )
}

export default HeaderText
