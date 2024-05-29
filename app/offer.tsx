import { StyleSheet, Text, View,Image,ScrollView,TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';

const offer = () => {
    const[date, Setdate] = useState(new Date())
    const[open, SetOpen] = useState(false)
   
    function handleOpen(){
        SetOpen(!open)
    }


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
                    <Text className='font-bold text-[17px] mt-[0px] '>Select Category</Text>
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
                    <Text className='font-bold text-[17px]  '>Proposal text</Text>
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
                <View className='w-[90%] gap-y-2'>
                    <Text className='font-bold text-[17px] '>Pricing</Text>
                    <TouchableOpacity 
                    className='bg-red-400'
                    onPress={handleOpen}>
                        <Text>open</Text>
                    </TouchableOpacity>
                   
                </View>
                {open &&  <DatePicker 
                mode = 'date'
                date={date} 
                onDateChange={Setdate} /> 
                    }
                     {/* {open &&  <DatePicker 
                        modal
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                          SetOpen(false)
                          Setdate(date)
                        }}
                        onCancel={() => {
                          SetOpen(false)
                        }}
               
               /> */}
              
                
          
                
                
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
})