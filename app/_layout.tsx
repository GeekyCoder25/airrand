import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import 'react-native-reanimated';

import {useColorScheme} from '@/hooks/useColorScheme';
import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

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
	return (
		<SafeAreaView className="flex-1">
			<StatusBar style="dark" translucent={false} backgroundColor="#EA1588" />
			<Stack screenOptions={{headerShown: false}}>
				<Stack.Screen name='giveawayclientThree'/>
				<Stack.Screen name='MessageChat'/>
				<Stack.Screen name='MessageClient'/>
				<Stack.Screen name='postPage'/>
				<Stack.Screen name='notificationClient'/>
				<Stack.Screen name='homePageClient'/>
				<Stack.Screen name='giveawayclientTwo'/>
				<Stack.Screen name='giveawayClient'/>
				<Stack.Screen name='loginClient'/>
				<Stack.Screen name='signUpClient'/>
				<Stack.Screen name='Message'/>
				<Stack.Screen name='OfferSent'/>
				<Stack.Screen name='TaskDetail'/>
				<Stack.Screen name='CheckingPage'/>
				<Stack.Screen name='SelfiePage'/>
				<Stack.Screen name='UploadDocument'/>
				<Stack.Screen name='GovernmentId'/>
				<Stack.Screen name='offer'/>
				<Stack.Screen name='verifyOnboarding'/>
				<Stack.Screen name='verification'/>
				<Stack.Screen name='availability'/>
				<Stack.Screen name='community'/>
				<Stack.Screen name="profile" />
				<Stack.Screen name="referal" />
				<Stack.Screen name="wallet" />
				<Stack.Screen name="login" />
				<Stack.Screen name="signup" />
				<Stack.Screen name="accountSignup" />
				<Stack.Screen name="onboarding4" />
				<Stack.Screen name="Onboarding3" />
				<Stack.Screen name="onboarding1" />
				<Stack.Screen name="Onboarding2" />
				<Stack.Screen name="(tabs)"/>
				<Stack.Screen name="+not-found" />
			</Stack>
		</SafeAreaView>
	);
}
