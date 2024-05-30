import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const giveawayclientTwo = () => {
  return (
    <ScrollView className='h-full'>
    <View className='w-[100%] justify-center items-center'>
        <View className='flex-row w-[85%] items-center mt-[20px] justify-between'>
            <View className='flex-row gap-2 items-center ' >
                <Image source={require('../assets/images/Arrow1.png')}/>
                <Text className='text-[27px] font-bold'>Giveaway History</Text>
            </View>
            <Image source={require('../assets/images/location.png')}/>
        </View>
        <View className='flex-row w-[85%] gap-4 items-center mt-[40px]'>
            <Image source={require('../assets/images/profilepics.png')}/>
            <View>
                <Text className='text-[20px] font-bold'>Bitero Chrismi</Text>
                <View className='flex-row gap-x-4'>
                    <Text className='text-[11px] font-bold'>Price: <Text className='text-[#2F3C7E]'>#200,000</Text></Text>
                    <Text className='text-[11px] font-bold'>Waitlist: <Text className='text-[#2F3C7E]'>20 people</Text></Text>
                    <Text className='text-[11px] font-bold'>Time: <Text className='text-[#2F3C7E]' >2 days</Text></Text>
                </View>
            </View>
        </View>
        <View className='w-[85%] items-end mt-[400px]'>
            <Image source={require('../assets/images/plus.png')}/>
        </View>
       
    </View>

</ScrollView>
  )
}

export default giveawayclientTwo

const styles = StyleSheet.create({})