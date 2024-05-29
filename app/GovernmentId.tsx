import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const GovernmentId = () => {
  return (
    <ScrollView className='h-full'>
        <View className='w-[100%]'>
          <Link href="/Onboarding2">
            <Text className=" text-white font-bold text-lg text-right">Back</Text>
          </Link>
        </View>
    </ScrollView>
  )
}

export default GovernmentId

const styles = StyleSheet.create({})