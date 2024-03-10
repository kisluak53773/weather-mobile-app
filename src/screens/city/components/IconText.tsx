import React, { FC } from 'react'
import { type IIconTextProps } from '../types'
import { Feather } from '@expo/vector-icons'
import { Text } from 'react-native'

export const IconText: FC<IIconTextProps> = ({
  style,
  text,
  imageType,
  color
}) => {
  return (
    <>
      <Feather name={imageType} size={50} color={color} />
      <Text style={style}>{text}</Text>
    </>
  )
}
