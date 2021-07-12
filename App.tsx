import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Conversation from './Conversation';

const App = () => {
  return (
    <NavigationContainer>
      <Conversation conversationId="1" />
    </NavigationContainer>
  );
};

export default App;
