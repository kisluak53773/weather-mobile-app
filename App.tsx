import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Tabs } from './src/components'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { useGetWeather } from '@/hooks'
import { ErrorComponent } from './src/components'

export default function App() {
  const { loading, error, weather } = useGetWeather()

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      {error ? (
        <ErrorComponent />
      ) : (
        <ActivityIndicator size={'large'} color={'blue'} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})
