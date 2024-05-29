import { StyleSheet, Text, View,ScrollView,Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'
import { Dropdown } from 'react-native-element-dropdown'

const GovernmentId = () => {

  const [open, SetOpen] = useState(false)
  const handleOpen =()=>{
    SetOpen(!open)
  }

  const[nationality, SetNationality] = useState('')
  const nations =[
    {
      nation1: "Nigerian",
    },
    {
      nation1: "Ghanian",
    },
    {
      nation1: "South African",
    },
    {
      nation1: "Congolese",
    },
    {
      nation1: "Togolese",
    },
  ]

  const[month, SetMonth] = useState('')
    const Allmonths = [
        {
            theMonth: "January" , 
        },
        {
            theMonth: "February" , 
        },
        {
            theMonth: "March" , 
        },
        {
            theMonth: "April" , 
        },
        {
            theMonth: "May" , 
        },
        {
            theMonth: "June" , 
        },
        {
            theMonth: "July" , 
        },
        {
            theMonth: "August" , 
        },
        {
            theMonth: "September" , 
        },
        {
            theMonth: "October" , 
        },
        {
            theMonth: "November" , 
        },
        {
            theMonth: "December" , 
        },
       
     ]
  return (
    <ScrollView className='h-full'>
        <View className='w-[100%] items-center'>
            <Text className=" text-black font-bold text-lg w-[85%] mt-[30px]">Back</Text>
            <Text className='w-[85%] text-[30px] mt-[40px] font-bold'>Government <Text className='text-[#EA1588]'>ID Card</Text></Text>
            <View className='w-[85%] flex-row gap-x-2 mt-[20px]'>
              <View className='w-[30%] h-1 bg-[#EA1588] mb-[30px] rounded-full'></View>
              <View className='w-[30%] h-1 bg-black mb-[30px] rounded-full'></View>
              <View className='w-[30%] h-1 bg-black mb-[30px] rounded-full'></View>
            </View>
            <Text className='text-[20px] w-[85%] font-semibold'>Personal Details</Text>
            <TextInput className='bg-[#FFF5F6] w-[85%] h-[60px] rounded-[10px] text-[15px] font-semibold px-[15px] mt-[30px]' 
            placeholder='Full Name'
            placeholderTextColor="black"
            autoComplete="off"
            />
             <TextInput className='bg-[#FFF5F6] w-[85%] h-[60px] rounded-[10px] text-[15px] font-semibold px-[15px] mt-[30px]' 
            placeholder='Full Email'
            placeholderTextColor="black"
            autoComplete="off"
            keyboardType='email-address'
            />
            <Dropdown
            
             style ={styles.dropdownTwo}
            valueField='nation1'
            labelField='nation1'
            placeholder='Nationality'
            value={nationality}
            data={nations}
            onChange={(n)=>{
                SetNationality(n.nation1)
            }}  
            
            
            />
              <TouchableOpacity 
                className=' bg-[#EA1588] py-[15px] px-[20px] rounded-[10px] mt-[30px]'  
                onPress={handleOpen}>
                    <Text className='text-white font-bold'>Click To Select Date</Text>
                </TouchableOpacity>
                   
                {open &&
                    <View className='w-[90%] items-center'>
                        <View className='w-[100%] flex-row justify-between items-center mt-[20px]'>
                        <Dropdown
                            style ={styles.dropdown}
                            data={Allmonths}
                            value={month}
                            placeholder='Select Month'
                            labelField="theMonth"
                            valueField="theMonth"
                            onChange={(m)=>{
                                    SetMonth(m.theMonth)
                            }}

                            />
                            
                            <TextInput 
                            className='w-[25%]' 
                            style = {styles.border}
                            placeholder='Date'
                            placeholderTextColor='black'
                            keyboardType='numeric'
                            >

                            </TextInput>
                            <TextInput 
                            className='w-[25%]' 
                            style = {styles.border}
                            placeholder='Year'
                            placeholderTextColor='black'
                            keyboardType='numeric'
                            >

                            </TextInput>
                    
                       </View>
                       <TouchableOpacity
                            // onPress={()=>navigate.navigate('GovernmentId')}
                            className="bg-[#EA1588] p-5 rounded-lg justify-center items-center w-[90%] mt-[30px]"
                            >
                            <Text className="text-white text-[20px] font-bold">Continue</Text>
                        </TouchableOpacity>
                            
                

                    </View> 
                
                 }

        </View>
    </ScrollView>
  )
}

export default GovernmentId

const styles = StyleSheet.create({
  border:{
    height: 40, borderColor: 'gray', borderWidth: 1,  marginBottom: 20,
    borderRadius: 10,
    paddingLeft: 20
},
dropdown:{
  height: 40, borderColor: 'gray', borderWidth: 1,  marginBottom: 20,
  borderRadius: 10,
  paddingLeft: 20,
  width:'40%'

},
dropdownTwo:{
  height: 60,  
   marginBottom: 20,
  borderRadius: 10,
  paddingLeft: 20,
  width:'85%',
  backgroundColor:'#FFF5F6',
  marginTop: 30,

}
})