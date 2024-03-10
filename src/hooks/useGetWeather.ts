import { useEffect, useState } from 'react'
import { IWeatherArray } from '@/types'
import * as Location from 'expo-location'

export const useGetWeather = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [weather, setWeather] = useState<IWeatherArray | null>(null)
  const [lat, setLat] = useState<number | null>(null)
  const [lon, setLon] = useState<number | null>(null)

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=metric`
      )
      const data = await res.json()
      setWeather(data)
    } catch (err) {
      setError('could not fetch weather')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    ;(async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('Permission to access location was denied')
        return
      }
      const loaction = await Location.getCurrentPositionAsync()
      setLon(loaction.coords.longitude)
      setLat(loaction.coords.latitude)
      await fetchWeatherData()
    })()
  }, [lat, lon])
  return { loading, error, weather }
}
