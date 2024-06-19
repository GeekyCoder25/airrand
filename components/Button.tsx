import {
	View,
	Text,
	TouchableOpacity,
	GestureResponderEvent,
} from 'react-native';
import React, {FC, ReactNode, useContext} from 'react';
import {AppContext} from '@/context/AppContext';

const Button: FC<{
	children: ReactNode;
	style?: string;
	onPress?: ((event: GestureResponderEvent) => void) | undefined;
}> = ({children, style, onPress}) => {
	const {isClient} = useContext(AppContext);

	return (
		<TouchableOpacity
			className={`bg-[${isClient ? '#2F3C7E' : '#EA1588'}] ${style
				?.toString()
				.replaceAll(',', ' ')}`}
			onPress={onPress}
		>
			{children}
		</TouchableOpacity>
	);
};

export default Button;
