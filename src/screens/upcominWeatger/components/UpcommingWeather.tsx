import React, { FC } from 'react'
import { SafeAreaView, ImageBackground, FlatList } from 'react-native'
import { stylesUpcomingWeather } from '../styles'
import { ItemUpcomingWeather } from './ItemUpcomingWeather'
import { IWeatherItem } from '@/types'

interface IProps {
  weatherData: IWeatherItem[]
}

export const UpcommingWeather: FC<IProps> = ({ weatherData }) => {
  const { image, wrapper, list } = stylesUpcomingWeather

  return (
    <SafeAreaView style={wrapper}>
      <ImageBackground
        style={image}
        source={require('../../../../assets/sunset.jpg')}
      >
        <FlatList
          style={list}
          data={weatherData}
          renderItem={({ item }) => (
            <ItemUpcomingWeather
              dt_txt={item.dt_txt}
              min={item.main.temp_min}
              max={item.main.temp_max}
              condition={item.weather[0].main}
            />
          )}
          keyExtractor={(item) => String(item.dt)}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}
