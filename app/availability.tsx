import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import SwitchOnIcon from '@/assets/images/icons/switch-on-icon';
import SwitchOffIcon from '@/assets/images/icons/switch-off-icon';

const Availability = () => {
	const [isAvailable, setIsAvailable] = useState(true);
	return (
		<View className="px-[5%] flex-1 py-5">
			<View className="flex-row justify-between border-2 mt-8 border-[#FFF5F6] p-5 rounded-lg">
				<Text className="text-black font-semibold text-base capitalize">
					Are You Available
				</Text>
				<Pressable onPress={() => setIsAvailable(prev => !prev)}>
					{isAvailable ? <SwitchOnIcon /> : <SwitchOffIcon />}
				</Pressable>
			</View>
		</View>
	);
};

export default Availability;
