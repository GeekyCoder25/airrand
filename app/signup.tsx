// import { StyleSheet, Text,TextInput, View, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { useState } from 'react';
// import { Ionicons } from '@expo/vector-icons';

// const signup = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };
//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your password"
//         secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword state
       
//       />
//       <TouchableOpacity
//         style={styles.icon}
//         onPress={togglePasswordVisibility}
//       >
//         <Ionicons
//           name={showPassword ? 'eye-off-outline' : 'eye-outline'}
//           size={24}
//           color="black"
//         />
//       </TouchableOpacity>
//     </View>
//   )
// }

// export default signup

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderBottomColor: 'black',
//     marginBottom: 20,
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     fontSize: 16,
//     paddingLeft: 10,
//   },
//   icon: {
//     padding: 10,
//   },
// });



import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const signup = () => {
  return (
    <View className=' h-screen flex items-center bg-white w-[100%]'>
      <View className="w-[90%] bg-white flex mt-[20px]">
          <Link href="/accountSignup">
              <Text className=" text-black font-bold text-lg text-right">Back</Text>
          </Link>
      </View>
      <Text className='text-black font-bold text-[25px] w-[85%] mt-[120px]'>Create <Text className='text-[#EA1588]'>Account</Text></Text>
      <View className='w-[85%] h-[350px] flex justify-evenly'>
          <TextInput className='bg-[#FFF5F6] w-[100%] h-[60px] rounded-[10px] text-[15px] font-semibold px-[15px]' 
          placeholder='enter your name ..'
          />
          <TextInput className='bg-[#FFF5F6] w-[100%] h-[60px] rounded-[10px] text-[15px] font-semibold px-[15px]' 
          placeholder='enter your name ..'
          />
          <TextInput className='bg-[#FFF5F6] w-[100%] h-[60px] rounded-[10px] text-[15px] font-semibold px-[15px]' 
          placeholder='enter your name ..'
          />
          
      </View>
    </View>
  )
}

export default signup

const styles = StyleSheet.create({})
