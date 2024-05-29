import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const verification = () => {
  return (
    <View className='w-[100%] justify-center items-center'>
        <Text className='w-[90%] text-[30px] mt-[40px] font-bold'>Verification <Text className='text-[#EA1588]'>Type</Text></Text>
    <View className='w-[90%] mt-[30px] flex-row justify-between py-[30px] px-4' style={styles.border}>
        <Text className='font-bold text-[15px]'>Government ID Card</Text>
        <Image source={require('../assets/images/Right.png')}/>
    </View>
    <View className='w-[90%] mt-[30px] flex-row justify-between py-[30px] px-4' style={styles.border}>
        <Text className='font-bold text-[15px]'>International passport</Text>
        <Image source={require('../assets/images/Right.png')}/>
    </View>
    <View className='w-[90%] mt-[30px] flex-row justify-between py-[30px] px-4' style={styles.border}>
        <Text className='font-bold text-[15px]'>driver lincence</Text>
        <Image source={require('../assets/images/Right.png')}/>
    </View>
</View>
  )
}

export default verification

const styles = StyleSheet.create({
    border:{
        borderColor:"#e8eef1",
        borderWidth:3,
        borderRadius:15,
    }
})