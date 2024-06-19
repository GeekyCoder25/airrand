import {View, Text, ScrollView, Pressable} from 'react-native';
import React, {FC, useContext} from 'react';
import FilterIcon from '@/assets/images/icons/filter-icon';
import BackArrow from '@/assets/images/icons/back-arrow';
import {router} from 'expo-router';
import {AppContext} from '@/context/AppContext';
import {Image} from 'react-native';
import Button from '@/components/Button';
import {FlatList} from 'react-native';

export const offers = [
	{
		_id: '309489',
		title: 'professional web designer',
		desc: 'designed a professional wordpress website.',
		status: 'active',
		time: Date.now(),
		price: 20000,
		user: {
			_id: '309489',
			fullName: 'john doe',
			avatar: '',
			isCertified: true,
			about: 'web designer | graphics designer',
		},
	},
	{
		_id: '309d189',
		title: 'professional web designer',
		desc: 'designed a professional wordpress website.',
		status: 'active',
		time: Date.now(),
		price: 20000,
		user: {
			_id: '3094r389',
			fullName: 'john doe',
			avatar: '',
			isCertified: true,
			about: 'web designer | graphics designer',
		},
	},
	{
		_id: '309d489',
		title: 'professional web designer',
		desc: 'designed a professional wordpress website.',
		status: 'active',
		time: Date.now(),
		price: 20000,
		user: {
			_id: '3094r389',
			fullName: 'john doe',
			avatar: '',
			isCertified: true,
			about: 'web designer | graphics designer',
		},
	},
];

const Offers = () => {
	return (
		<FlatList
			data={offers}
			renderItem={({item}) => <Offer offer={item} />}
			className="flex-1 px-[3%] gap-y-5 py-5"
			ListHeaderComponent={() => (
				<View className="gap-x-2 flex-row items-center justify-between mt-5 mb-10">
					<View className="flex-row items-center gap-x-4">
						<Pressable onPress={() => router.back()}>
							<BackArrow />
						</Pressable>
						<Text className="text-black font-bold text-xl">All Offer</Text>
					</View>
					<FilterIcon />
				</View>
			)}
			ListEmptyComponent={() => (
				<View className="flex-1 justify-center items-center">
					<Text>There're no new messages at the moment</Text>
				</View>
			)}
		></FlatList>
	);
};

export default Offers;

const Offer: FC<{
	offer: {
		_id: string;
		title: string;
		desc: string;
		time: string | number;
		status: string;
		price: number;
		user: {
			_id: string;
			fullName: string;
			avatar?: string;
			isCertified: boolean;
			about: string;
		};
	};
}> = ({offer}) => {
	const {isClient} = useContext(AppContext);

	return (
		<Pressable
			onPress={() => router.push(`/message-chat/${offer._id}`)}
			className="border-2 border-[#F3F5FF] p-3 rounded-lg mb-12 justify-between gap-y-5 ml-1"
		>
			<View className="flex-row flex-1 items-center gap-x-3">
				<Image
					source={{
						uri:
							offer.user.avatar ||
							'https://toyib.vercel.app/static/media/profileavatar.0d99c3ae75efbac1342f.png',
					}}
					className="w-12 h-12 rounded-full bg-[#e2d7d3]"
				/>
				<View className="gap-y-1">
					<Text className="font-bold text-xl text-[#000] capitalize underline">
						{offer.user.fullName}
					</Text>
					<Text className="capitalize opacity-60 font-medium">
						{offer.user.about}
					</Text>
				</View>
			</View>
			<View className="justify-between ml-4">
				<Text className="font-medium text-base text-[#000] opacity-50 capitalize">
					{offer.desc}
				</Text>
				<Text className="font-medium opacity-50 text-sm text-right"></Text>

				<View className="flex-row justify-center gap-5 mt-5">
					<Button
						style="py-3 px-10 bg-transparent rounded-2xl border-[#F3F5FF] border-[2px] justify-center items-center"
						onPress={() => router.push(`message-chat/${offer.user._id}`)}
					>
						<Text className="font-semibold text-lg">Contact Me</Text>
					</Button>
					<View></View>
					<Button
						style="py-3 px-10 rounded-2xl justify-center items-center"
						onPress={() => router.navigate('/payment')}
					>
						<Text className="text-white font-semibold text-lg">Order now</Text>
					</Button>
				</View>
			</View>
		</Pressable>
	);
};
