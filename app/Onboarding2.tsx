import { View, Text, Image,Button, StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useNavigation } from 'expo-router'

const Onboarding2 = () => {
    const navigation = useNavigation()
  return (
    <View className='w-full h-screen bg-white flex  items-center pt-6 gap-[3px]'>
    <View className='w-[85%] bg-white flex '>
        <Link  href='/onboarding4'><Text className=' text-black font-bold text-lg text-right'>Skip</Text></Link>
    </View>
      
    <View className='mb-5 w-[80%] h-[400px] flex justify-center items-center  '>
      <Image 
        source = {require('../assets/images/card.png')}
        >

        </Image>  
    </View>  
      <Text className='text-3xl font-bold text-black'>Fast <Text className='text-[#EA1588]'>Transaction</Text></Text>
      <Text className ='w-[70%] text-[14px] text-center mb-[20px]'>Quick And Easy Payment Transaction Without Delay. Get Paid Immediately To Your Account.</Text>
      <View  className='flex justify-center items-center w-full h-[50px]'>
        <Image source={require('../assets/images/slidecircle2.png')}>
        </Image>
      </View >

      <TouchableOpacity 
      className='bg-[#EA1588] px-[35%] py-[20px] rounded-xl'
      onPress= {()=>navigation.navigate('Onboarding3')}>
        <Link href='/Onboarding2'>
          <Text className='text-[20px] text-white'>Next</Text>
        </Link>
      </TouchableOpacity>
     
    </View>
  )
}

export default Onboarding2

const styles = StyleSheet.create({})