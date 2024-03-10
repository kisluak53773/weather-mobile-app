import { StyleProp, TextStyle, ViewStyle } from 'react-native'

export interface IRowTextProps {
  messageOne: string
  messageTwo: string
  containerStyles: StyleProp<ViewStyle>
  messageOneStyles: StyleProp<TextStyle>
  messageTwoStyles: StyleProp<TextStyle>
}
