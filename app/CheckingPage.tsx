import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const CheckingPage = () => {
  return (
    <View className='h-screen w-[100%] justify-center items-center'>
      <View className='w-[90%] justify-center items-center gap-y-3'>
            <Image source={require('../assets/images/review.png')}/>
            <Text className='text-[30px] font-bold'>Under <Text className='text-[#EA1588]'>Review</Text></Text>
            <Text className='text-center w-[80%] font-semibold text-[#00000080]'>Your Document Is Under Review And You’ll Be Notified Once Your Doccument Is Approved.</Text>
      </View>
      <Text className='text-[#EA1588] underline font-bold text-[17px] mt-[50px]'>Back To Home</Text>
    </View>
  )
}

export default CheckingPage

const styles = StyleSheet.create({})