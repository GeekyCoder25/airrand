import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const notificationClient = () => {
  return (
    <ScrollView className='h-full '>
        <View className='w-[100%] justify-center items-center '>
            <View className='w-[85%] h-[60px]mt-[30px] px-7 py-[20px] mt-[40px]' style={styles.border}>
                <Text className='font-bold text-[20px]'>Hey, Bitero Chrismi</Text>
                <Text className='text-[16px] text-[#00000080] font-semibold'>heres a new time to hire a professional to handle your work for you.</Text>
            </View>
        </View>
    </ScrollView>
   
  )
}

export default notificationClient

const styles = StyleSheet.create({
    border:{
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 10
    }
})