import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {AppContext} from '@/context/AppContext';
import TaskTasker from '@/components/pages/TaskTasker';
import TaskClient from '@/components/pages/TaskClient';
import Offers from '../offers';

const Tasks = () => {
	const {isClient} = useContext(AppContext);
	return isClient ? <TaskClient /> : <TaskTasker />;
};

export default Tasks;
