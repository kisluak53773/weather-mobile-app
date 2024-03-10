import React, { FC } from 'react'
import { View, Text } from 'react-native'
import { type IRowTextProps } from '../types'

export const RowText: FC<IRowTextProps> = ({
  messageOne,
  messageTwo,
  containerStyles,
  messageOneStyles,
  messageTwoStyles
}) => {
  return (
    <View style={containerStyles}>
      <Text style={messageOneStyles}>{messageOne}</Text>
      <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  )
}
