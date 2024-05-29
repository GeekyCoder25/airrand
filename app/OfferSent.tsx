import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const OfferSent = () => {
  return (
    <View className='w-[100%] justify-center items-center h-screen'>
        <Image source={require('../assets/images/Mark.png')}></Image>
        <Text className='text-[30px] font-bold'>Proposal <Text className='text-[#EA1588]'>Sent</Text></Text>
        <Text className='text-[#00000080] font-bold text-[15px]'>Your Offer I’ve Been Sent</Text>
        <Text className='text-[#EA1588] underline font-bold text-[17px] mt-[50px]'>Back To Home</Text>
    </View>
  )
}

export default OfferSent

const styles = StyleSheet.create({})