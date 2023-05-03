import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Routes from './Routes';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      {Routes.map((Route, index) => (
        <Stack.Screen
          key={index}
          name={Route.name}
          component={Route.component}
        />
      ))}
  </Stack.Navigator>
</NavigationContainer>
  );
}