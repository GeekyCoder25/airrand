import {
	StyleSheet,
	Text,
	View,
	TextInput,
	ScrollView,
	Image,
	TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import {Link} from 'expo-router';
import {useRouter} from 'expo-router';
import {AppContext} from '@/context/AppContext';
import Button from '@/components/Button';

const login = () => {
	const {isClient} = useContext(AppContext);
	const navigate = useRouter();
	return (
		<ScrollView className=" h-full">
			<View className="flex items-center bg-white w-[100%] h-[100vh]">
				<View className="w-[90%] bg-white flex mt-[20px]">
					<Link href="/accountSignup">
						<Text className=" text-black font-bold text-lg text-right">
							Back
						</Text>
					</Link>
				</View>
				<Text className="text-black font-bold text-[25px] w-[85%] mt-[50px] mb-[40px]">
					Log <Text className={isClient ? '' : 'text-primary'}>In</Text>
				</Text>
				<View className="w-[85%] mb-[35px] flex gap-y-[30px]">
					<TextInput
						className={`${
							isClient ? 'bg-[#F3F5FF]' : 'bg-[#FFF5F6]'
						} w-[100%] h-[60px] rounded-[10px] text-[15px] font-semibold px-[15px]`}
						placeholder="Email Address .."
						placeholderTextColor="black"
						keyboardType="email-address"
						autoComplete="off"
					/>
					<TextInput
						className={`${
							isClient ? 'bg-[#F3F5FF]' : 'bg-[#FFF5F6]'
						} w-[100%] h-[60px] rounded-[10px] text-[15px] font-semibold px-[15px] outline-black-500 text-red`}
						placeholder="Password .."
						keyboardType="visible-password"
						placeholderTextColor="black"
						autoComplete="off"
					/>
				</View>
				<Text className="w-[85%] font-semibold text-[15px]">
					By Clicking Continue Mean You Have Agree To Our{' '}
					<Link href="terms">
						<Text
							className={`${
								isClient ? 'text-secondary' : 'text-primary'
							} underline`}
						>
							Terms
						</Text>{' '}
						&{' '}
						<Text
							className={`${
								isClient ? 'text-secondary' : 'text-primary'
							} underline`}
						>
							Conditions
						</Text>
					</Link>
				</Text>
				<Button
					style="w-[85%] p-5 rounded-lg justify-center items-center mt-[20px]"
					onPress={() => navigate.navigate('wallet')}
				>
					<Text className="text-white">Continue</Text>
				</Button>
				<Text className="flex font-bold text-[15px] mt-[20px]">
					Sign In With
				</Text>
				<View className="w-[85%] gap-x-[20px] justify-center items-center flex flex-row py-[30px]">
					<View
						className={`w-[55px] h-[55px] justify-center items-center rounded-full ${
							isClient ? 'bg-secondary' : 'bg-primary'
						}`}
					>
						<Image source={require('../assets/images/google.png')} />
					</View>
					<View
						className={`w-[55px] h-[55px] justify-center items-center rounded-full ${
							isClient ? 'bg-secondary' : 'bg-primary'
						}`}
					>
						<Image source={require('../assets/images/facebook.png')} />
					</View>
					<View
						className={`w-[55px] h-[55px] justify-center items-center rounded-full ${
							isClient ? 'bg-secondary' : 'bg-primary'
						}`}
					>
						<Image source={require('../assets/images/apple.png')} />
					</View>
				</View>
				<Text className="w-[85%] font-semibold text-[15px] text-center">
					Don't Have An Account?{' '}
					<Link href="/signup">
						<Text className={`${isClient ? 'text-secondary' : 'text-primary'}`}>
							Sign Up
						</Text>
					</Link>
				</Text>
			</View>
		</ScrollView>
	);
};

export default login;

const styles = StyleSheet.create({});
