import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

const homePageClient = () => {
  return (
        <ScrollView>
            <View className='w-[100%] justify-center items-center py-[20px] '>
                <View className='  h-[200px] w-[90%] justify-center bg-[#2F3C7E] rounded-[20px] mt-[40px] pl-9 '>
                    <Text className='text-[25px] text-white'>Welcome Back <Text className='text-[#EA1588]'>Chrismi</Text></Text>
                    <Text className='text-white'>here is the best time to take hands.</Text>
                </View>
                <Text className='w-[90%] font-bold text-[20px] mt-6 mb-6'>What Do You Need Help With?</Text>
                <View className='w-[90%] flex gap-y-[30px]'>
                <View className='w-[100%] justify-between flex flex-row'>
                        <View className='justify-center items-center'>
                            <Image source={require('../assets/images/Group 72.png')}/>
                            <Text className='font-bold text-[20px]'>Design</Text>
                        </View>
                        <View className='justify-center items-center'>
                            <Image source={require('../assets/images/Group 71.png')}/>
                            <Text className='font-bold text-[20px]'>Cleaning</Text>
                        </View>
                        <View className='justify-center items-center'>
                            <Image source={require('../assets/images/Group 70.png')}/>
                            <Text className='font-bold text-[20px]'>Painting</Text>
                        </View>
                        <View className='justify-center items-center'>
                            <Image source={require('../assets/images/Group 72.png')}/>
                            <Text className='font-bold text-[20px]'>Design</Text>
                        </View>
                        
                    </View>
                    <View className='w-[100%] justify-between flex flex-row'>
                        <View className='justify-center items-center'>
                            <Image source={require('../assets/images/Group 73.png')}/>
                            <Text className='font-bold text-[20px]'>Electrical</Text>
                        </View>
                        <View className='justify-center items-center'>
                            <Image source={require('../assets/images/Group 74.png')}/>
                            <Text className='font-bold text-[20px]'>Transport</Text>
                        </View>
                        <View className='justify-center items-center'>
                            <Image source={require('../assets/images/Group 75.png')}/>
                            <Text className='font-bold text-[20px]'>Shopping</Text>
                        </View>
                        <View className='justify-center items-center'>
                            <Image source={require('../assets/images/Group 76.png')}/>
                            <Text className='font-bold text-[20px]'>Delivery</Text>
                        </View>
                        
                    </View>
                    <View className='w-[100%] justify-between flex flex-row'>
                        <View className='justify-center items-center'>
                            <Image source={require('../assets/images/Group 77.png')}/>
                            <Text className='font-bold text-[20px]'>Errands</Text>
                        </View>
                        <View className='justify-center items-center'>
                            <Image source={require('../assets/images/Group 78.png')}/>
                            <Text className='font-bold text-[20px]'>Ironing</Text>
                        </View>
                        <View className='justify-center items-center'>
                            <Image source={require('../assets/images/Group 79.png')}/>
                            <Text className='font-bold text-[20px]'>Repair</Text>
                        </View>
                        <View className='justify-center items-center'>
                            <Image source={require('../assets/images/Group 80.png')}/>
                            <Text className='font-bold text-[20px]'>Translation</Text>
                        </View>
                        
                    </View>
                    <View className='w-[100%] justify-between flex flex-row'>
                        <View className='justify-center items-center'>
                            <Image source={require('../assets/images/Group 81.png')}/>
                            <Text className='font-bold text-[20px]'>Tutoring</Text>
                        </View>
                        <View className='justify-center items-center'>
                            <Image source={require('../assets/images/Group 82.png')}/>
                            <Text className='font-bold text-[20px]'>Cooking</Text>
                        </View>
                        <View className='justify-center items-center'>
                            <Image source={require('../assets/images/Group 83.png')}/>
                            <Text className='font-bold text-[20px]'>Plumbing</Text>
                        </View>
                        <View className='justify-center items-center'>
                            <Image source={require('../assets/images/Group 84.png')}/>
                            <Text className='font-bold text-[20px]'>Photography</Text>
                        </View>
                        
                    </View>
                </View>
            </View>
            
        </ScrollView>
  )
}

export default homePageClient

const styles = StyleSheet.create({})