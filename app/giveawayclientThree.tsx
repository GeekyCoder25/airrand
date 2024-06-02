import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const giveawayclientThree = () => {
    // message chat data 
    
    const giveaway =[
        {
            image : require('../assets/images/profilepics.png'),
            username : 'bitero chrismi',
            price: "#200,000",
            Wailist: "20 people",
            Time: "2 days",
            join:"Join The Waitlist"
        },
        {
            image : require('../assets/images/profilepics.png'),
            username : 'bitero chrismi',
            price: "#200,000",
            Wailist: "20 people",
            Time: "2 days",
            join:"Join The Waitlist"
        },
        {
            image : require('../assets/images/profilepics.png'),
            username : 'bitero chrismi',
            price: "#200,000",
            Wailist: "20 people",
            Time: "2 days",
            join:"Join The Waitlist"
        },
        {
            image : require('../assets/images/profilepics.png'),
            username : 'bitero chrismi',
            price: "#200,000",
            Wailist: "20 people",
            Time: "2 days",
            join:"Join The Waitlist"
        },

    ]
  return (
    <ScrollView className='h-full '>
    <View className='w-[100%] justify-center items-center py-[30px]'>
        <View className='flex-row w-[85%] items-center mt-[20px] justify-between'>
            <View className='flex-row gap-2 items-center ' >
                <Image source={require('../assets/images/Arrow1.png')}/>
                <Text className='text-[27px] font-bold'>Available Giveaway</Text>
            </View>
            <Image source={require('../assets/images/location.png')}/>
        </View>
        <View className=' w-[90%] gap-4 items-center mt-[40px]'>
            {giveaway.map((g)=>(
                    <View  className='flex-row w-[100%] py-[10px] px-2 justify-between' style={styles.border}>
                        <View className='w-[15%] justify-center items-center'>
                            <Image source={g.image}/>
                        </View>
                        <View className='w-[80%] flex gap-y-2'>
                            <Text className='text-[#2F3C7E] font-bold text-[12px] underline text-right'>{g.join}</Text>
                            <Text className='text-[18px] font-bold'>Bitero Chrismi</Text>
                            <View className='flex-row gap-x-2 '>
                                <Text className='text-[9px] font-bold'>Price: <Text className='text-[#2F3C7E]'>{g.price}</Text></Text>
                                <Text className='text-[9px] font-bold'>Waitlist: <Text className='text-[#2F3C7E]'>{g.Wailist}</Text></Text>
                                <Text className='text-[9px] font-bold'>Time: <Text className='text-[#2F3C7E]' >{g.Time}</Text></Text>
                            </View>
                        </View>
                    </View>
            ))}
        </View>
    </View>
</ScrollView>
  )
}

export default giveawayclientThree

const styles = StyleSheet.create({
    border:{
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 10
    }
})