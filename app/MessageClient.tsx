import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'


const MessageClient = () => {
  return (
    <ScrollView className='h-full '>
        <View className='w-[100%] justify-center items-center '>
            <View className='w-[85%] justify-between flex-row mt-[30px] mb-6'>
                <Text className='text-[22px] font-bold'>All Messages</Text>
                <View>
                    <Image source={require('../assets/images/filter.png')}/>
                </View>
            </View>
            <View className='w-[85%] h-[80px] py-[20px] px-3 items-center justify-around mt-[20px] flex-row' style={styles.border}>
                <View className='w-[20%] items-center'>
                    <Image source={require('../assets/images/profilepics.png')}/>
                </View>
                <View className='flex-row w-[70%] justify-between'>
                    <View>
                        <Text className='font-bold text-[18px]'>Bitero Chrismi</Text>
                        <Text className='text-[16px] text-[#00000080] font-semibold'>how far na my guy</Text>
                    </View>
                    <View className='flex gap-y-4'>
                        <Text className='font-bold text-[15px] color-[#00000080] '>7: 00am</Text>
                        <View>
                            <Image source={require('../assets/images/double mark.png')}/>
                        </View>
                    </View>
                </View>
            </View>
            <View className='w-[85%] h-[80px] py-[20px] px-3 items-center justify-around mt-[20px] flex-row' style={styles.border}>
                <View className='w-[20%] items-center'>
                    <Image source={require('../assets/images/profilepics.png')}/>
                </View>
                <View className='flex-row w-[70%] justify-between'>
                    <View>
                        <Text className='font-bold text-[18px]'>Bitero Chrismi</Text>
                        <Text className='text-[16px] text-[#00000080] font-semibold'>how far na my guy</Text>
                    </View>
                    <View className='flex gap-y-4'>
                        <Text className='font-bold text-[15px] color-[#00000080] '>7: 00am</Text>
                        <View>
                            <Image source={require('../assets/images/double mark.png')}/>
                        </View>
                    </View>
                </View>
            </View>
            <View className='w-[85%] h-[80px] py-[20px] px-3 items-center justify-around mt-[20px] flex-row' style={styles.border}>
                <View className='w-[20%] items-center'>
                    <Image source={require('../assets/images/profilepics.png')}/>
                </View>
                <View className='flex-row w-[70%] justify-between'>
                    <View>
                        <Text className='font-bold text-[18px]'>Bitero Chrismi</Text>
                        <Text className='text-[16px] text-[#00000080] font-semibold'>how far na my guy</Text>
                    </View>
                    <View className='flex gap-y-4'>
                        <Text className='font-bold text-[15px] color-[#00000080] '>7: 00am</Text>
                        <View>
                            <Image source={require('../assets/images/double mark.png')}/>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </ScrollView>
   
  )
}

export default MessageClient

const styles = StyleSheet.create({
    border:{
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 10
    }
})