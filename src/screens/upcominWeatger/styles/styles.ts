import { StyleSheet } from 'react-native'

export const stylesUpcomingWeather = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 0,
    backgroundColor: '#b0e0e6'
  },
  image: {
    flex: 1
  },
  list: { marginTop: 55 }
})

export const stylesUpcomingWeatherItem = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'pink'
  },
  temp: {
    color: 'white',
    fontSize: 20
  },
  date: {
    color: 'white',
    fontSize: 15
  },
  dateWrapper: {
    flexDirection: 'column'
  }
})
