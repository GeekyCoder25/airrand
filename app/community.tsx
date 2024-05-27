import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const community = () => {
  return (
    <View className='w-[100%] justify-center items-center'>
        <View className='w-[90%] mt-[30px] flex-row justify-between py-[30px] px-4' style={styles.border}>
            <Text className='font-bold text-[15px]'>Join Our Community</Text>
            <Image source={require('../assets/images/Right.png')}/>
        </View>
        <View className='w-[90%] mt-[30px] flex-row justify-between py-[30px] px-4' style={styles.border}>
            <Text className='font-bold text-[15px]'>Get Help</Text>
            <Image source={require('../assets/images/Right.png')}/>
        </View>
        <View className='w-[90%] mt-[30px] flex-row justify-between py-[30px] px-4' style={styles.border}>
            <Text className='font-bold text-[15px]'>Read Document</Text>
            <Image source={require('../assets/images/Right.png')}/>
        </View>
    </View>
  )
}

export default community

const styles = StyleSheet.create({
    border:{
        borderColor:"#e8eef1",
        borderWidth:3,
        borderRadius:15,
    }
})