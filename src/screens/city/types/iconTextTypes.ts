import { StyleProp, TextStyle } from 'react-native'
import { Feather } from '@expo/vector-icons'

export interface IIconTextProps {
  imageType: keyof typeof Feather.glyphMap
  text: string
  style: StyleProp<TextStyle>
  color: string
}
