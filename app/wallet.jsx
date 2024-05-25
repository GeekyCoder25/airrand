import { ScrollView, StyleSheet, Text, View,Pressable,Image } from 'react-native'
import React from 'react'
import { useRouter} from 'expo-router'


const wallet = () => {
    const naviate = useRouter()
  return (
    <ScrollView className='h-screen'>
        <View className='w-[100%] items-center h-screen'>
            <Text className='w-[85%] mt-[80px] text-[30px] font-bold'>Earnings</Text>
            <View className='w-[85%] h-[250px] bg-[#EA1588] mt-6 rounded-[20px] justify-center items-center'>
                <Text className='text-white font-bold text-[20px]'>Total Balance </Text>
                <Text className='text-white font-bold text-[45px] mt-[10px]'>#500,000</Text>
            </View>
            <View className='w-[85%] mt-[20px] flex-row justify-between'>
                <Pressable className='w-[48%] justify-center items-center flex-row py-3 gap-x-2 rounded-[10px]'
                 style={styles.border} 
                 onPress={naviate.navigate('referal')}>
                    <View className='bg-[#EA1588] w-[35px] h-[35px] rounded-[100%] justify-center items-center'>
                        <Image source={require('../assets/images/transfer.png')}></Image>
                    </View>
                    <Text className='text-[17px] font-bold'>Transfer</Text>
                </Pressable>
                <Pressable className='w-[48%] bg-[#EA1588] justify-center items-center flex-row py-3 gap-x-2 rounded-[10px]' >
                    <View className='bg-white w-[35px] h-[35px] rounded-[100%] justify-center items-center'>
                        <Image source={require('../assets/images/withdraw.png')}></Image>
                    </View>
                    <Text className='text-[17px] font-bold text-white'>Withdraw</Text>
                </Pressable>
            </View>
            <Text className='w-[85%] mt-[50px] text-[30px] font-bold '>Earnings History</Text>
            <View className='w-[85%] flex-row justify-between px-3 items-center h-[70px] mt-7' style={styles.border}>
                <Text className='font-bold text-[18px]'>Task</Text>
                <Text className='font-bold text-[18px]'>#300,000</Text>
            </View>
            <View className='w-[85%] flex-row justify-between px-3 items-center h-[70px] mt-7' style={styles.border}>
                <Text className='font-bold text-[18px]'>Referrals</Text>
                <Text className='font-bold text-[18px]'>#300,000</Text>
            </View>


            
        </View>
        
        
        
        
    </ScrollView>
  )
}

export default wallet

const styles = StyleSheet.create({
    border:{
        borderColor:"#e8eef1",
        borderWidth:3,
        borderRadius:15,
    }
})