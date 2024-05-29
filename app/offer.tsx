import { StyleSheet, Text, View,Image,ScrollView,TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { useRouter } from 'expo-router';
// import DatePicker from 'react-native-date-picker';

const offer = () => {
    const navigate = useRouter()
    // const[date, Setdate] = useState(new Date())
    const[open, SetOpen] = useState(false)
   
    function handleOpen(){
        SetOpen(!open)
    }
    const[month, SetMonth] = useState('')
    const months = [
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

    const[selectNation, SetSelectNation] = useState('')
    const nations = [
        {
            nationOne : "graphic Design"
        },
        {
            nationOne : "Web dev"
        },
        {
            nationOne : "logo Design"
        },
        {
            nationOne : "Software Engr"
        },
        {
            nationOne : "Backend Dev"
        }
    ]
    
   
  return (
        <ScrollView className='h-full'>
            <View className='w-[100%] justify-center items-center'>
                <Text className='w-[90%] text-[30px] mt-[40px] font-bold'>Proposal <Text className='text-[#EA1588]'>Detail</Text></Text>
                <View className='w-[90%] mt-[15px]'>
                    <View className='w-[30%] h-1 bg-[#EA1588] mb-[30px]'></View>
                </View>
                <View className='w-[90%] gap-y-2'>
                    <Text className='font-bold text-[17px]  '>Proposal Text</Text>
                    <TextInput className='w-[100%] h-[250px]' style={styles.border}
                    >
                    </TextInput>
                </View>
                <View className='w-[90%] gap-y-2'> 
                    <Text className='font-bold text-[17px] mt-[0px] '>Selec Category</Text>
                    <Dropdown 
                        style={styles.border}
                        data={nations}
                        labelField="nationOne"
                        valueField="nationOne"
                        placeholder="Select your category..."
                        value={selectNation}
                        onChange={(item) => {
                            SetSelectNation(item.nationOne);
                        }}
                    />
                </View>
                <View className='w-[90%] gap-y-2'>
                    <Text className='font-bold text-[17px]'>Proposal text</Text>
                    <TextInput 
                    style = {styles.textarea}
                    className='w-[100%] mb-[20px]' 
                    multiline = {true}
                    numberOfLines={10}
                    >
                    </TextInput>
                </View>
                <View className='w-[90%] gap-y-2'>
                    <Text className='font-bold text-[17px]'>Pricing</Text>
                    <TextInput 
                    className='w-[100%] h-[250px]' 
                    style={styles.border}
                    placeholder='NGN'
                    placeholderTextColor='black'
                    >
                    </TextInput>
                </View>
           
                <TouchableOpacity 
                className=' bg-[#EA1588] py-[15px] px-[20px] rounded-[10px] '  
                onPress={handleOpen}>
                    <Text className='text-white font-bold'>Click To Select Date</Text>
                </TouchableOpacity>
                   
                {open &&
                    <View className='w-[90%] items-center'>
                        <View className='w-[100%] flex-row justify-between items-center mt-[20px]'>
                            <Dropdown
                            style ={styles.dropdown}
                            data={months}
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
                            onPress={()=>navigate.navigate('GovernmentId')}
                            className="bg-[#EA1588] p-5 rounded-lg justify-center items-center w-[90%] mt-[30px]"
                            >
                            <Text className="text-white">Let's Go</Text>
                        </TouchableOpacity>
                            
                

                    </View> 
                
                 }
                  
             
                 
                
          
                
                
            </View>
            
        </ScrollView>
  )
}

export default offer

const styles = StyleSheet.create({
    border:{
        height: 40, borderColor: 'gray', borderWidth: 1,  marginBottom: 20,
        borderRadius: 10,
        paddingLeft: 20
    },
    textarea: {
        height: 150,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 4,
        textAlignVertical: 'top', // Aligns text at the top of the TextInput
      },
      dropdown:{
        height: 40, borderColor: 'gray', borderWidth: 1,  marginBottom: 20,
        borderRadius: 10,
        paddingLeft: 20,
        width:'40%'

      }
})