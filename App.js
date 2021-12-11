import React from 'react';
import Login from './Login/Login';
import Home from './Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Login" component={Login}/>
      <Stack.Screen options={{headerShown: false}} name="Home" component={Home}/>
    </Stack.Navigator>
  )
}

const App = () => {
  return(
    <NavigationContainer>
        <MyStack />
    </NavigationContainer>
  )
}

export default App;