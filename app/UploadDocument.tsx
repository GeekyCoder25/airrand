import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const UploadDocument = () => {
  return (
    <ScrollView className='h-full'>
        <View className='w-[100%] items-center'>
            <Text className=" text-black font-bold text-lg w-[85%] mt-[30px]">Back</Text>
            <Text className='w-[85%] text-[30px] mt-[40px] font-bold'>Government <Text className='text-[#EA1588]'>ID Card</Text></Text>
            <View className='w-[85%] flex-row gap-x-2 mt-[20px]'>
              <View className='w-[30%] h-1 bg-[#EA1588] mb-[30px] rounded-full'></View>
              <View className='w-[30%] h-1 bg-[#EA1588] mb-[30px] rounded-full'></View>
              <View className='w-[30%] h-1 bg-black mb-[30px] rounded-full'></View>
            </View>
            <View className='w-[85%] flex-row gap-x-2 items-center'>
                <Text className='text-[20px] font-bold'>Upload Document</Text>
                <Image source={require('../assets/images/help.png')}/>
            </View>
            <View className='w-[85%] mt-[20px]'>
                <Image source={require('../assets/images/upload.png')}/>
            </View>
            <TouchableOpacity
                // onPress={()=>navigate.navigate('GovernmentId')}
                className="bg-[#EA1588] p-5 rounded-lg justify-center items-center w-[90%] mt-[70px]"
                >
                <Text className="text-white text-[20px] font-bold">Continue</Text>
            </TouchableOpacity>
                
        </View>
        
    </ScrollView>
  )
}

export default UploadDocument

const styles = StyleSheet.create({})