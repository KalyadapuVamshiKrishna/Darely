import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TamaguiProvider, Theme } from 'tamagui';
import { useFonts } from 'expo-font';
import config from './src/theme/tamagui.config';

import { HomeScreen } from './src/screens/HomeScreen';
import { DetailsScreen } from './src/screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name="light">
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
              headerStyle: { backgroundColor: '#fff' },
              headerTintColor: '#000',
              headerTitleStyle: { fontWeight: 'bold' },
              contentStyle: { backgroundColor: '#fff' }
            }}
          >
            <Stack.Screen 
              name="Home" 
              component={HomeScreen} 
              options={{ title: 'Daily Challenges' }} 
            />
            <Stack.Screen 
              name="Details" 
              component={DetailsScreen} 
              options={{ title: 'Challenge Details' }} 
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Theme>
    </TamaguiProvider>
  );
}