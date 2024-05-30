import { StyleSheet, Text, View,TextInput, ScrollView,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useRouter } from 'expo-router'

const signUpClient = () => {
  return (
    <ScrollView className=' h-full'>
    <View className='flex items-center bg-white w-[100%] h-[100vh]'>
      <View className="w-[90%] bg-white flex mt-[20px]">
          <Link href="/accountSignup">
              <Text className=" text-black font-bold text-lg text-right">Back</Text>
          </Link>
      </View>
      <Text className='text-black font-bold text-[25px] w-[85%] mt-[30px] mb-[30px]'>Create Account</Text>
      <View className='w-[85%] mb-[35px] flex gap-y-[20px]'>
          <TextInput className='bg-[#F3F5FF] w-[100%] h-[60px] rounded-[10px] text-[15px] font-semibold px-[15px]' 
          placeholder='Username e.g Tosh ..'
          placeholderTextColor="black"
          autoComplete="off"

          />
          <TextInput className='bg-[#F3F5FF] w-[100%] h-[60px] rounded-[10px] text-[15px] font-semibold px-[15px]' 
          placeholder='Email Address ..'
          placeholderTextColor="black"
          keyboardType="email-address"
          autoComplete="off"
          />
          <TextInput className='bg-[#F3F5FF] w-[100%] h-[60px] rounded-[10px] text-[15px] font-semibold px-[15px] outline-black-500 text-red' 
          placeholder='Password ..'
          keyboardType="visible-password"
          placeholderTextColor="black"
          autoComplete="off"

          />
          
      </View>
      <Text className='w-[85%] font-semibold text-[15px]'>By Clicking Continue Mean You Have Agree To Our <Link href='terms'><Text className='text-[#2F3C7E] underline'>Terms</Text> & <Text className='text-[#2F3C7E] underline'>Conditions</Text></Link></Text>
      <TouchableOpacity 
                    className='bg-[#2F3C7E] w-[85%] p-5 rounded-lg justify-center items-center mt-[20px]'
                    // onPress={()=>navigate.navigate('signup')}
                    >
                    <Text className='text-white'>Continue</Text>
                </TouchableOpacity>
        <Text className='flex font-bold text-[15px] mt-[20px]  '>Sign Up With</Text>
        <View className='w-[85%] gap-x-[20px] justify-center items-center flex flex-row py-[30px]'>
            <View className='w-[55px] h-[55px] justify-center items-center rounded-full bg-[#2F3C7E]'>
                <Image source={require('../assets/images/google.png')}/>
            </View>
            <View className='w-[55px] h-[55px] justify-center items-center rounded-full bg-[#2F3C7E]'>
                <Image source={require('../assets/images/facebook.png')}/>
            </View>
            <View className='w-[55px] h-[55px] justify-center items-center rounded-full bg-[#2F3C7E]'>
                <Image source={require('../assets/images/apple.png')}/>
            </View>
        </View>
        <Text className='w-[85%] font-semibold text-[15px] text-center' >Already Have An Account? <Link href='/login'><Text className='text-[#2F3C7E]'>Login</Text></Link></Text>
    </View>
      </ScrollView>
  )
}

export default signUpClient

const styles = StyleSheet.create({})