import { StyleSheet, Text, View, ScrollView, Image, Pressable } from 'react-native'
import React, { useState } from 'react'

const postPage = () => {
    // const[dropdown, SetDropdown] = useState(false)
    // function handleDropdown(){
    //     SetDropdown(!dropdown)
        
    // }
  return (
    <ScrollView className='h-full '>
        <View className='w-[100%] justify-center items-center '>
            <Text className='w-[90%] text-[30px] font-bold mt-[30px]'>Category</Text>
            <View className='w-[85%]'>
                <View
                // onPress={handleDropdown}
                className=' w-[100%] flex-row items-center justify-between h-[60px]mt-[30px] px-3 py-[20px] mt-[40px]' style={styles.border}>
                    <Text className='font-bold text-[20px]'>Task History</Text>
                    <Image source={require('../assets/images/Right.png')}/>
                </View>
                {/* {
                    dropdown && 
                    <View 
                    className='h-[100px] w-[100%] '
                    style={styles.border}
                    >

                    </View>

                } */}
                 <View
                // onPress={handleDropdown}
                className=' w-[100%] flex-row items-center justify-between h-[60px]mt-[20px] px-3 py-[20px] mt-[40px]' style={styles.border}>
                    <Text className='font-bold text-[20px]'>Offer Received</Text>
                    <Image source={require('../assets/images/Right.png')}/>
                </View>
                <View
                // onPress={handleDropdown}
                className=' w-[100%] flex-row items-center justify-between h-[60px]mt-[20px] px-3 py-[20px] mt-[40px]' style={styles.border}>
                    <Text className='font-bold text-[20px]'>Post History</Text>
                    <Image source={require('../assets/images/Right.png')}/>
                </View>
            
            </View>
            
        </View>
    </ScrollView>
  )
}

export default postPage

const styles = StyleSheet.create({
    border:{
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 10
    }
})