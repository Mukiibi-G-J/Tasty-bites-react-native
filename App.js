import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
// import {NavigationContainer} from '@react-navigation/native';

// import {MainLayout} from './screens';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import CustomDrawer from './navigations/CustomDrawer';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './stores/rootReducer';
import {Provider} from 'react-redux';
import {GlobaleProvider} from './stores/store';
const Stack = createStackNavigator();

const App = () => {
  return (
    <GlobaleProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Home'}>
          <Stack.Screen name="Home" component={CustomDrawer} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobaleProvider>
  );
};

export default App;
