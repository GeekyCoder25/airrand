import { StyleSheet, Text, View, TouchableOpacity,Pressable } from 'react-native'
import React, { useState } from 'react'
import { Link, useRouter} from 'expo-router'

const accountSignup = () => {
    const navigate = useRouter()

        const[newBtn, setNewBtn] = useState(false)
       
    

  return (
    <View className=' h-screen flex items-center bg-white'>
        <View className="w-[90%] bg-white flex mt-[20px]">
				<Link href="/onboarding4">
					<Text className=" text-black font-bold text-lg text-right">Back</Text>
				</Link>
		</View>
        <View className=' flex gap-[5px] mt-[150px] w-[85%] '>
            <Text className='text-black font-bold text-[25px]'>Choose <Text className='text-[#EA1588]'>Account Type</Text></Text>
            <Text className='text-[#000000B2] font-semibold mb-[30px]'>Select Your Account Type For Best Experience.</Text>
            
            <TouchableOpacity
                className=' w-[100%] py-[30px] rounded-[20px] border-inherit '
                onPress={()=>setNewBtn(true)}
            >
                <Text className='ml-[30px] mb-1 text-[20px] font-bold'>As A Client</Text>
                <Text className='ml-[30px] text-[15px] font-semibold text-[#000000B2] ' >Sign Up As A Client</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style = {styles.button}
                 onPress={()=>setNewBtn(true)}
                // onPress={()=>navigate.navigate('signup')}
            >
                <Text className='ml-[30px] mb-1 text-[20px] font-bold'>As A Tasker</Text>
                <Text className='ml-[30px] mb-4 text-[15px] font-semibold text-[#000000B2] ' >Sign Up As A Tasker</Text>
            </TouchableOpacity>

            <Text className='w-[100%] text-center font-semibold mb-[80px]'>Note: This Can Be Changed Under Setting In Your Profile.</Text>

            {newBtn && 
                    <TouchableOpacity 
                    className='bg-[#EA1588] w-full p-5 rounded-lg justify-center items-center'
                    onPress={()=>navigate.navigate('signup')}
                    >
                    <Text className='text-white'>Continue</Text>
                </TouchableOpacity>
            }
            
            
            
            {}
        </View>
    </View>
  )
}

export default accountSignup

const styles = StyleSheet.create({
    button:{
      
    
    }
   
})