import { View, Text, Image,Button, StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useNavigation } from 'expo-router'
// import { Image } from 'react-native-svg'

export default function Onboarding1() {
  const navigation = useNavigation();
   const myStyle = StyleSheet.create({
    button:{
      backgroundColor:'red'
    }
   })
  return (
    <View className='w-full h-screen bg-white flex  items-center pt-6 gap-[3px]'>
    <View className='w-[85%] bg-white flex '>
        <Link  href='/onboarding4'><Text className=' text-black font-bold text-lg text-right '>Skip</Text></Link>
    </View>
      
    <View className='mb-5 w-[80%] h-[400px] flex justify-center items-center  '>
      <Image 
      className='w-['
        source = {require('../assets/images/whiteMan.png')}
        >

        </Image>  
    </View>  
      <Text className='text-3xl font-bold text-black'>Let Take <Text className='text-[#EA1588]'>The Stress</Text></Text>
      <Text className ='w-[70%] text-[14px] text-center mb-[20px]'>Don’t Take The Stress Of Doing It On Your Own. Our Professional Are Ready To Assist You.</Text>
      <View  className='flex justify-center items-center w-full h-[50px]'>
        <Image source={require('../assets/images/slideCircle.png')}>
        </Image>
      </View >

      <TouchableOpacity 
      className='bg-[#EA1588] px-[35%] py-[20px] rounded-xl'
      onPress= {()=>navigation.navigate('Onboarding2')}>
        <Link href='/Onboarding2'>
          <Text className='text-[20px] text-white'>Next</Text>
        </Link>
      </TouchableOpacity>
     
    </View>

    
  )
}