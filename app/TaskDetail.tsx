import { StyleSheet, Text, View,ScrollView,Image} from 'react-native'
import React from 'react'

const TaskDetail = () => {
  return (
    <ScrollView className='h-full'>
        <View className='w-[100%] justify-center items-center '>
            <View className='flex-row w-[85%] justify-between mt-6 items-center'>
                <View className='flex-row items-center gap-x-2'>
                    <Image source={require('../assets/images/Arrow1.png')}/>
                    <Text className='text-[21px] font-bold'>Task Status</Text>
                </View>
                <Text className='text-[#FFA902] font-bold text-[16px]'>Completed</Text>
            </View>
            <View className='flex-row w-[85%] justify-between mt-[60px] items-center '>
                <Text className='text-black font-semibold text-[30px] w-[50%]'>Software Engineer</Text>
                <Text className='text-black font-bold text-[17px]'>#120,000,000</Text>
            </View>
            <View className='w-[85%] flex-row items-center gap-x-5 mt-6'>
                <View className='w-[50px] h-[50px] rounded-full bg-[#EA1588]'></View>
                <View>
                    <Text className='text-[20px] font-bold'>Bitero Chrismi</Text>
                    <Text className='text-[15px] font-semibold'>Certified Client</Text>
                </View>
            </View>
            <View className='w-[85%] mt-[50px]'>
                <Text className='text-[20px] font-bold'>Description</Text>
                <Text className='mt-[15px] font-semibold text-[#00000080] text-[15px]'>We are seeking a highly skilled and experienced WordPress developer to join our team. The ideal candidate will have a strong understanding of PHP, HTML, CSS and JavaScript, as well as the ability to create custom WordPress themes and plugins. If you have a passion for developing innovative and user-friendly websites using WordPress, we would love to hear from you.</Text>

            </View>
            <View className='mt-[50px] w-[85%] justify-center items-center'>
                <Text className='text-[17px] font-bold'>Time Remaining:</Text>
                <Text className='mt-[30px] text-[25px] font-semibold'>Finished</Text>
            </View>
            <View className='w-[85%] mt-[30px] items-end'>
                <Image source={require('../assets/images/message.png')}/>
            </View>
        </View>
    </ScrollView>

  )
}

export default TaskDetail

const styles = StyleSheet.create({})