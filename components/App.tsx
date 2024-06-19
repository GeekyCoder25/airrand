import {View, Text, Keyboard, TouchableWithoutFeedback} from 'react-native';
import React, {useContext} from 'react';
import {AppContext} from '@/context/AppContext';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaView} from 'react-native-safe-area-context';
import Navbar from '@/components/Navbar';
import Back from '@/components/Back';
import {ThemeProvider} from '@react-navigation/native';
import {Stack} from 'expo-router';

const App = () => {
	const {isClient} = useContext(AppContext);
	const colors = {
		primary: isClient ? '#2F3C7E' : '#EA1588',
		background: '#fff',
		card: '#fff',
		border: '#fff5f6',
		notification: '#fff',
		text: 'red',
	};
	return (
		<ThemeProvider
			value={{
				dark: false,
				colors,
			}}
		>
			<SafeAreaView className="flex-1">
				<StatusBar
					style="dark"
					translucent={false}
					backgroundColor={isClient ? '#2F3C7E' : '#EA1588'}
				/>

				{isClient ? (
					<Stack
						screenOptions={{
							header: ({route}) => <Back routeName={route.name} />,
						}}
					>
						<Stack.Screen name="(tabs)" options={{headerShown: false}} />
						<Stack.Screen name="community" />
						<Stack.Screen name="profile" />
						<Stack.Screen name="referral" />
						<Stack.Screen name="wallet" />
						<Stack.Screen name="login" options={{headerShown: false}} />
						<Stack.Screen name="signup" options={{headerShown: false}} />
						<Stack.Screen name="accountSignup" options={{headerShown: false}} />
						<Stack.Screen name="onboarding4" options={{headerShown: false}} />
						<Stack.Screen name="Onboarding3" options={{headerShown: false}} />
						<Stack.Screen name="onboarding1" options={{headerShown: false}} />
						<Stack.Screen name="Onboarding2" options={{headerShown: false}} />
						<Stack.Screen
							name="notification"
							options={{
								header: ({route}) => <Navbar routeName={route.name} />,
							}}
						/>
						<Stack.Screen
							name="project-details/[project_id]"
							options={{headerShown: false}}
						/>
						<Stack.Screen
							name="message-chat/[message_id]"
							options={{headerShown: false}}
						/>
						<Stack.Screen
							name="task-details/[task_id]"
							options={{
								header: () => <Navbar routeName={'Task'} />,
							}}
						/>
						<Stack.Screen
							name="post-details/[post_id]"
							options={{headerShown: false}}
						/>
						<Stack.Screen
							name="offers"
							options={{
								header: () => <Navbar routeName={'Post'} />,
							}}
						/>
						<Stack.Screen
							name="task-history"
							options={{
								header: () => <Navbar routeName={'Post'} />,
							}}
						/>
						<Stack.Screen
							name="post-history"
							options={{
								header: () => <Navbar routeName={'Post'} />,
							}}
						/>
						<Stack.Screen name="post-task" options={{headerShown: false}} />
						<Stack.Screen name="post-task2" options={{headerShown: false}} />
						<Stack.Screen name="post-task3" options={{headerShown: false}} />
						<Stack.Screen name="update" options={{headerShown: false}} />
						<Stack.Screen
							name="settings-page"
							options={{
								header: () => <Back routeName={'Settings'} />,
							}}
						/>

						{/* <Stack.Screen name="MessageChat" /> */}
						<Stack.Screen name="MessageClient" />
						<Stack.Screen name="postPage" />
						<Stack.Screen name="notificationClient" />
						<Stack.Screen name="homePageClient" />
						<Stack.Screen name="giveawayclientThree" />
						<Stack.Screen name="giveawayclientTwo" />
						<Stack.Screen name="giveawayClient" />
						<Stack.Screen name="loginClient" />
						<Stack.Screen name="signUpClient" />
						<Stack.Screen name="+not-found" />
					</Stack>
				) : (
					<Stack
						screenOptions={{
							header: ({route}) => <Back routeName={route.name} />,
						}}
					>
						<Stack.Screen name="(tabs)" options={{headerShown: false}} />
						<Stack.Screen name="community" />
						<Stack.Screen name="profile" />
						<Stack.Screen name="referral" />
						<Stack.Screen name="wallet" />
						<Stack.Screen name="login" options={{headerShown: false}} />
						<Stack.Screen name="signup" options={{headerShown: false}} />
						<Stack.Screen name="accountSignup" options={{headerShown: false}} />
						<Stack.Screen name="onboarding4" options={{headerShown: false}} />
						<Stack.Screen name="Onboarding3" options={{headerShown: false}} />
						<Stack.Screen name="onboarding1" options={{headerShown: false}} />
						<Stack.Screen name="Onboarding2" options={{headerShown: false}} />
						<Stack.Screen
							name="notification"
							options={{
								header: ({route}) => <Navbar routeName={route.name} />,
							}}
						/>
						<Stack.Screen
							name="project-details/[project_id]"
							options={{headerShown: false}}
						/>
						<Stack.Screen
							name="message-chat/[message_id]"
							options={{headerShown: false}}
						/>
						<Stack.Screen
							name="task-details/[task_id]"
							options={{
								header: () => <Navbar routeName={'Task'} />,
							}}
						/>

						<Stack.Screen name="postPage" options={{headerShown: false}} />
						<Stack.Screen name="Message" options={{headerShown: false}} />
						<Stack.Screen name="OfferSent" options={{headerShown: false}} />
						<Stack.Screen name="TaskDetail" options={{headerShown: false}} />
						<Stack.Screen name="CheckingPage" options={{headerShown: false}} />
						<Stack.Screen name="SelfiePage" options={{headerShown: false}} />
						<Stack.Screen
							name="UploadDocument"
							options={{headerShown: false}}
						/>
						<Stack.Screen name="GovernmentId" options={{headerShown: false}} />
						<Stack.Screen name="offer" options={{headerShown: false}} />
						<Stack.Screen
							name="verifyOnboarding"
							options={{headerShown: false}}
						/>
						<Stack.Screen name="verification" options={{headerShown: false}} />
						<Stack.Screen name="availability" options={{headerShown: false}} />
						<Stack.Screen name="+not-found" options={{headerShown: false}} />
					</Stack>
				)}
			</SafeAreaView>
		</ThemeProvider>
	);
};

export default App;
