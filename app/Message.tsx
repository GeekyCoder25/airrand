import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {io} from 'socket.io-client';

const Message = () => {
	const socket = io('http://172.20.10.2:4000');
	socket.on('connect', () => {
		console.log(socket.id); // x8WIv7-mJelg7on_ALbx
	});
	socket.on('disconnect', () => {
		console.log(socket.id); // undefined
	});

	return (
		<View>
			<TextInput className="w-[100%]" autoCorrect={false} />
		</View>
	);
};

export default Message;

const styles = StyleSheet.create({});
