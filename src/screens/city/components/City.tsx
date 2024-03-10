import React, { FC } from 'react'
import { SafeAreaView, View, Text, ImageBackground } from 'react-native'
import { cityStyles } from '../styles'
import { type ICity } from '@/types'
import { IconText } from './IconText'
import moment from 'moment'

interface IProps {
  weatherData: ICity
}

export const City: FC<IProps> = ({ weatherData }) => {
  const {
    wrapper,
    image,
    cityName,
    countryName,
    cityText,
    populationWrapper,
    populationText,
    raiseSetText,
    raiseSetWrapper
  } = cityStyles
  const { name, country, population, sunrise, sunset } = weatherData

  return (
    <SafeAreaView style={wrapper}>
      <ImageBackground
        source={require('../../../../assets/city.jpg')}
        style={image}
      >
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>
        <View style={populationWrapper}>
          <IconText
            imageType={'user'}
            style={populationText}
            text={`Population: ${population}`}
            color={'red'}
          />
        </View>
        <View style={raiseSetWrapper}>
          <IconText
            imageType={'sunrise'}
            style={raiseSetText}
            text={moment(sunrise).format('h:mm:ss a')}
            color={'white'}
          />
          <IconText
            imageType={'sunset'}
            style={raiseSetText}
            text={moment(sunset).format('h:mm:ss a')}
            color={'white'}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}
