import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {StoreProvider} from 'easy-peasy';
import Conversation, {IConversationProps} from './src/components/Conversation';
import Home from './src/components/Home';
import {store} from './src/store';

export type RootStackParamList = {
  Home: undefined;
  Conversation: IConversationProps;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'My messages'}}
          />
          <Stack.Screen
            name="Conversation"
            component={Conversation}
            options={({route}) => ({title: route.params.recipientName})}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
