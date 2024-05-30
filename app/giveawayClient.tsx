import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const giveawayClient = () => {
  return (
   <ScrollView className='h-full'>
        <View className='w-[100%] justify-center items-center'>
            <View className='flex-row w-[85%] gap-2 items-center mt-[20px]' >
                <Image source={require('../assets/images/Arrow1.png')}/>
                <Text className='text-[30px] font-bold'>Giveaway History</Text>
            </View>
            <View className='flex-row w-[85%] gap-6 items-center mt-[40px]'>
                <Image source={require('../assets/images/profilepics.png')}/>
                <Text className='text-[20px] font-bold'>Bitero Chrismi</Text>
            </View>
            <View className='w-[85%] h-[60px] flex-row justify-between px-3 items-center mt-[30px]' style={styles.border}>
                <Text className='font-bold text-[18px]'>Price</Text>
                <Text className='font-bold text-[18px] text-[#2F3C7E]'>#120,000</Text>
            </View>
            <View className='w-[85%] h-[60px] flex-row justify-between px-3 items-center mt-[30px]' style={styles.border}>
                <Text className='font-bold text-[18px]'>Percentage</Text>
                <Text className='font-bold text-[18px] text-[#2F3C7E]'>20%</Text>
            </View>
            <View className='w-[85%] h-[60px] flex-row justify-between px-3 items-center mt-[30px]' style={styles.border}>
                <Text className='font-bold text-[18px]'>Waitlist</Text>
                <Text className='font-bold text-[18px] text-[#2F3C7E]'>10 people</Text>
            </View>
            <View className='w-[85%] mt-[30px]'>
                <Text className='font-bold text-[18px] mb-[15px]'>Schedule Time To Open</Text>
                <TouchableOpacity className='w-[40%] h-[50px] justify-center items-center' 
                    style={styles.border}>
                    <Text className='text-[#2F3C7E] font-bold text-[20px]'>Send Now</Text>
                </TouchableOpacity>
            </View>
            <View className='w-[85%] mt-[30px]'>
                <Text className='font-bold text-[18px] mb-[15px]'>Schedule Time To Close</Text>
                <View className='w-[40%] h-[50px] justify-center items-center' 
                    style={styles.border}>
                    <Text className='text-[#2F3C7E] font-bold text-[20px]'>2days 22min</Text>
                </View>
            </View>
        </View>

   </ScrollView>
  )
}

export default giveawayClient

const styles = StyleSheet.create({
    border:{
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 10
    }
    
})