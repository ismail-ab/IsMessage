import React from 'react';
import 'react-native-gesture-handler';
import {ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import {IConversationProps} from './Conversation';
import ConversationRow from './ConversationRow';
import {conversations} from '../../conversations';

export type RootStackParamList = {
  Home: undefined;
  Conversation: IConversationProps;
};

const Home = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView>
      {conversations.map(({id, name, picture}) => (
        <ConversationRow key={id} id={id} name={name} picture={picture} />
      ))}
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
