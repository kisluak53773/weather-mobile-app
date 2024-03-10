import React, { FC } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { stylesMain } from '../styles'
import { Feather } from '@expo/vector-icons'
import { WEATHER_TYPES } from '@/constants/weatherType'
import { RowText } from './RowText'
import { type IWeatherItem } from '@/types'

interface IProps {
  weatherData: IWeatherItem
}

export const CurrentWeather: FC<IProps> = ({ weatherData }) => {
  const {
    wrapper,
    container,
    temperature,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message
  } = stylesMain
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData
  const weatherCondition = weather[0].main

  return (
    <SafeAreaView
      style={[
        wrapper,
        {
          backgroundColor:
            WEATHER_TYPES[weatherCondition as keyof typeof WEATHER_TYPES]
              .backgroundColor
        }
      ]}
    >
      <View style={container}>
        <Feather
          name={
            WEATHER_TYPES[weatherCondition as keyof typeof WEATHER_TYPES]
              .icon as keyof typeof Feather.glyphMap
          }
          size={100}
          color="black"
        />
        <Text style={temperature}>{`${Math.ceil(temp)}°`}</Text>
        <Text style={feels}>{`Feels like: ${Math.ceil(feels_like)}°`}</Text>
        <RowText
          messageOne={`High: ${Math.ceil(temp_max)}° `}
          messageTwo={`Low: ${Math.floor(temp_min)}°`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={weather[0]?.description}
        messageTwo={
          WEATHER_TYPES[weatherCondition as keyof typeof WEATHER_TYPES].message
        }
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}
