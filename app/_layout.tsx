import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import 'react-native-reanimated';

import {useColorScheme} from '@/hooks/useColorScheme';
import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Navbar from '@/components/Navbar';
import Back from '@/components/Back';
import {ThemeProvider} from '@react-navigation/native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	const colors = {
		primary: '#EA1588',
		background: '#fff',
		card: '#fff',
		border: '#fff5f6',
		notification: '#fff',
		text: '#000',
	};

	return (
		<ThemeProvider
			value={{
				dark: false,
				colors,
			}}
		>
			<SafeAreaView className="flex-1">
				<StatusBar style="dark" translucent={false} backgroundColor="#EA1588" />
				<Stack
					screenOptions={{
						header: ({route}) => <Back routeName={route.name} />,
						headerShown: true,
					}}
				>
					<Stack.Screen
						name="(tabs)"
						options={{
							headerShown: false,
						}}
					/>
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
					<Stack.Screen name="OfferSent" />
					<Stack.Screen name="TaskDetail" />
					<Stack.Screen name="CheckingPage" />
					<Stack.Screen name="SelfiePage" />
					<Stack.Screen name="UploadDocument" />
					<Stack.Screen name="GovernmentId" />
					<Stack.Screen name="offer" />
					<Stack.Screen name="verifyOnboarding" />
					<Stack.Screen name="verification" />
					<Stack.Screen name="availability" />
					<Stack.Screen name="+not-found" />
				</Stack>
			</SafeAreaView>
		</ThemeProvider>
	);
}
