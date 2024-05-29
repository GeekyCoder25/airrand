import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'

import React from 'react'

const SelfiePage = () => {
  return (
    <ScrollView className='h-full'>
    <View className='w-[100%] items-center'>
        <Text className=" text-black font-bold text-lg w-[90%] mt-[30px]">Back</Text>
        <Text className='w-[90%] text-[30px] mt-[40px] font-bold'>Government <Text className='text-[#EA1588]'>ID Card</Text></Text>
        <View className='w-[90%] flex-row gap-x-2 mt-[20px]'>
          <View className='w-[30%] h-1 bg-[#EA1588] mb-[30px] rounded-full'></View>
          <View className='w-[30%] h-1 bg-[#EA1588] mb-[30px] rounded-full'></View>
          <View className='w-[30%] h-1 bg-[#EA1588] mb-[30px] rounded-full'></View>

        </View>
        <View className='w-[85%] flex-row gap-x-2 items-center'>
            <Text className='text-[20px] font-bold'>Your Selfie</Text>
            <Image source={require('../assets/images/help.png')}/>
        </View>
        <View className='w-[85%] mt-[20px] flex-row justify-between'>
            <View className='w-[150px] h-[150px] rounded-full bg-[#FFF5F6] items-center justify-center'>
                 <Image source={require('../assets/images/camera.png')}/>
            </View>
            <View className='gap-y-[10px]'>
                <Text className='text-[#EA1588] text-[20px] font-bold mb-[20px]'>Important!!!</Text>
                <Text className='font-semibold text-[#000000B2] text-[13px]'>Use Clear Background</Text>
                <Text className='font-semibold text-[#000000B2] text-[13px]'>Clear Camera</Text>
                <Text className='font-semibold text-[#000000B2] text-[13px]'>No Filter Or Lighting</Text>
                <Text className='font-semibold text-[#000000B2] text-[13px]'>Bold And Clear Image</Text>
                <Text className='font-semibold text-[#000000B2] text-[13px]'>Focus On Camera</Text>

            </View>
        </View>
        <TouchableOpacity
            // onPress={()=>navigate.navigate('GovernmentId')}
            className="bg-[#EA1588] p-5 rounded-lg justify-center items-center w-[90%] mt-[70px]"
            >
            <Text className="text-white text-[20px] font-bold">Verify Now</Text>
        </TouchableOpacity>
            
    </View>
    
</ScrollView>
  )
}

export default SelfiePage

const styles = StyleSheet.create({})