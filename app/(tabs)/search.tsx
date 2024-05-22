import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';

const Search = () => {
	return (
		<View className="flex-1">
			{Platform.OS === 'web' ? (
				<Text>Map View</Text>
			) : (
				<></>
				// <MapView className="flex-1 w-full f-full" />
			)}
		</View>
	);
};

export default Search;

const styles = StyleSheet.create({});
