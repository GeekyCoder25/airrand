import {View, Text, ScrollView, Pressable} from 'react-native';
import React, {useContext} from 'react';
import SwitchOnIcon from '@/assets/images/icons/switch-on-icon';
import ChevronRightIcon from '@/assets/images/icons/chevron-right-icon';
import LogoutIcon from '@/assets/images/icons/logout-icon';
import {router, useRouter} from 'expo-router';
import {AppContext} from '@/context/AppContext';
import Notification from '@/components/pages/Notification';
import SettingsTab from '@/components/pages/SettingsTab';

export default function Settings() {
	const {isClient} = useContext(AppContext);
	return isClient ? <Notification /> : <SettingsTab />;
}
