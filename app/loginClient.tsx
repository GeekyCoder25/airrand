"use client"
import { StyleSheet, Text, View,TextInput, ScrollView,Image, TouchableOpacity, Alert} from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'
import { useRouter } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'

const loginClient = () => {
    const[email, SetEmail] = useState('')
    const[password, SetPasword] = useState('')
    const[isCliecked, setIsClicked]= useState(false)
   const navigate = useRouter()


    async function loginClient(){
        setIsClicked(true)
        const baseUrl = 'https://airrand-app-backend.onrender.com/user/login'
        try {
            const response = await fetch(baseUrl,{
                method: 'POST',
                body: JSON.stringify({email, password}),
                headers:{'content-type': 'application/json'}
            })
            .then((res)=>res.json())
            if(response.success){
                Alert.alert(response.message)
                console.log(response.message)
                await AsyncStorage.setItem('token', response.token)
                navigate.navigate('homePageClient')
                setIsClicked(false)
            }
            else{
                Alert.alert(response.error)
                console.log(response.error)
                setIsClicked(false)
            }
        } catch (error) {
            console.log(error)
            Alert.alert("there is an error")
        }
    }
  return (
    <ScrollView className=' h-full'>
        <View className='flex items-center bg-white w-[100%] h-[100vh]'>
        <View className="w-[90%] bg-white flex mt-[20px]">
            <Link href="/accountSignup">
                <Text className=" text-black font-bold text-lg text-right">Back</Text>
            </Link>
        </View>
        <Text className='text-black font-bold text-[25px] w-[85%] mt-[50px] mb-[40px]'>Log In</Text>
        <View className='w-[85%] mb-[35px] flex gap-y-[30px]'>
            
            <TextInput className='bg-[#F3F5FF] w-[100%] h-[60px] rounded-[10px] text-[15px] font-semibold px-[15px]' 
            placeholder='Email Address ..'
            placeholderTextColor="black"
            keyboardType="email-address"
            autoComplete="off"
            value={email}
            onChangeText={SetEmail}
            />
            <TextInput className='bg-[#F3F5FF] w-[100%] h-[60px] rounded-[10px] text-[15px] font-semibold px-[15px] outline-black-500 text-red' 
            placeholder='Password ..'
            keyboardType="visible-password"
            placeholderTextColor="black"
            autoComplete="off"
            value={password}
            onChangeText={SetPasword}
            />
            
        </View>
        <Text className='w-[85%] font-semibold text-[15px]'>By Clicking Continue Mean You Have Agree To Our <Link href='terms'><Text className='text-[#2F3C7E] underline'>Terms</Text> & <Text className='text-[#2F3C7E] underline'>Conditions</Text></Link></Text>
        <TouchableOpacity 
                className='bg-[#2F3C7E] w-[85%] p-5 rounded-lg justify-center items-center mt-[20px]'
                // onPress={()=>navigate.navigate('wallet')}
                onPress={loginClient}
                >
                <Text  className='text-white'>{isCliecked ? 'Logging In ...' : 'Log In'}</Text>
            </TouchableOpacity>
            <Text className='flex font-bold text-[15px] mt-[20px]'>Sign In With</Text>
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
            <Text className='w-[85%] font-semibold text-[15px] text-center' >Don't Have An Account? <Link href='/signup'><Text className='text-[#2F3C7E] underline'>Sign Up</Text></Link></Text>
            </View>
      </ScrollView>
  )
}

export default loginClient

const styles = StyleSheet.create({})