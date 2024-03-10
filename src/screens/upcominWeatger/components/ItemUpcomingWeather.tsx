import React, { FC } from 'react'
import { type IUpcomingWeather } from '../types'
import { View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { stylesUpcomingWeatherItem } from '../styles'
import { WEATHER_TYPES } from '@/constants'
import moment from 'moment'

export const ItemUpcomingWeather: FC<IUpcomingWeather> = ({
  dt_txt,
  min,
  max,
  condition
}) => {
  const { date, temp, item, dateWrapper } = stylesUpcomingWeatherItem

  return (
    <View style={item}>
      <Feather
        name={
          WEATHER_TYPES[condition as keyof typeof WEATHER_TYPES]
            .icon as keyof typeof Feather.glyphMap
        }
        size={50}
        color="black"
      />
      <View style={dateWrapper}>
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
      </View>
      <Text style={temp}>{`${Math.ceil(Number(max))}°`}C</Text>
      <Text style={temp}>{`${Math.ceil(Number(min))}°`}C</Text>
    </View>
  )
}
