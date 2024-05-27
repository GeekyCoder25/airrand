import { StyleSheet, Text, View,ScrollView,Image } from 'react-native'
import React from 'react'

const profile = () => {
  return (
    <ScrollView h-full>
        <View className='w-[100%] items-center '>
            <View className='w-[95%] mt-[30px] flex-row h-[200px] justify-between px-2'
                style={styles.border}
                >

                <View className='h-[full] items-center justify-center w-[25%]'>
                    <Image 
                    source={require("../assets/images/Ellipse.png")}
                    className='w-[70px] h-[70px]'
                    ></Image>
                </View>

                <View className='h-[full] justify-center gap-y-2' >
                    <Text className='text-[20px] font-bold'>Chrismi Bitero</Text>
                    <Text className='text-[#00000080] font-semibold'>Experience Full-Stack developer</Text>
                </View>

                <Text className='text-[#EA1588] mt-2 text-[19px] underline decoration-solid'>Edit</Text>

            </View>

            <View className='w-[95%] mt-[30px] flex-row h-[200px] justify-between px-2'
                style={styles.border}
                >

               

                <View className='h-[full] justify-center gap-y-2 w-[90%]' >
                    <Text className='text-[20px] font-bold'>Description</Text>
                    <Text className='text-[#00000080] font-semibold'>Product designer & front-end developer creating seamless user experiences. Passionate about solving problems and turning ideas into reality. Constantly learning and growing.</Text>
                </View>

                <Text className='text-[#EA1588] mt-2 text-[19px] underline decoration-solid'>Edit</Text>

            </View>
            <View className='w-[95%] mt-[30px] py-5 justify-between px-2 gap-y-6'
                style={styles.border}
                >
                <Text className='text-[#EA1588] mt-2 text-[19px] underline decoration-solid w-[100%] text-right'>Edit</Text>
                <Text className='text-[20px] font-bold w-[100%]'>Skillset</Text>
                <View className='flex-row w-[100%] justify-evenly'>
                    <Text className='py-[20px] px-[20px] flex' style={styles.border}>Canva</Text>
                    <Text className='py-[20px] px-[20px] flex' style={styles.border}>Website Design</Text>
                </View>
                <View className='flex-row w-[100%] justify-evenly'>
                    <Text className='py-[20px] px-[20px] flex' style={styles.border}>Banner Design</Text>
                    <Text className='py-[20px] px-[20px] flex' style={styles.border}>Logo Design</Text>
                </View>
                <View className='flex-row w-[100%] justify-evenly'>
                    <Text className='py-[20px] px-[20px] flex' style={styles.border}>Packaging Design</Text>
                    <Text className='py-[20px] px-[20px] flex' style={styles.border}>Photoshop</Text>
                </View>


            </View>
            
        </View>
    </ScrollView>
  )
}

export default profile

const styles = StyleSheet.create({
    border:{
        borderColor:"#e8eef1",
        borderWidth:3,
        borderRadius:15,
    }
})