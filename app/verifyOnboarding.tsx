import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const verifyOnboarding = () => {
  return (
    <View className="flex-1 ">
        <ImageBackground
        className="flex-1 w-full h-full"
        source={require("../assets/images/verify.jpg")}
        >
            <View className='bg-black absolute h-screen opacity-80 w-[100%] items-center'>
                <View className='w-[80%] mt-5'>
                    <Image source={require('../assets/images/Right.png')}/>
                    <Text className='text-white text-[20px] font-bold'>Back</Text>
                </View>
                <Text className='text-white text-[25px] font-bold mt-[350px]'>Verify Your <Text className='text-[#EA1588]'>Identity</Text></Text>
                <Text className='text-white text-[17px] text-center w-[95%] mt-2'>You’re One Step Away To Become A Verified Tasker.</Text>
                    <TouchableOpacity
                //   onPress={() => navigate("accountSignup")}
                className="bg-[#EA1588] p-5 rounded-lg justify-center items-center w-[90%] mt-[80px]"
                >
                <Text className="text-white">Let's Go</Text>
                </TouchableOpacity>
            </View>
        
        </ImageBackground>
  </View>
  )
}

export default verifyOnboarding

const styles = StyleSheet.create({})