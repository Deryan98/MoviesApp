import { Flex } from '@react-native-material/core'
import React from 'react'
import { ActivityIndicator, View } from 'react-native'

export const LoadingScreen = () => {
  return (
    <Flex justify='center' items='center'>
        <ActivityIndicator size={30} color='red' />
    </Flex>
  )
}
