import React from 'react';
import 'react-native-gesture-handler';
import {ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import {IConversationProps} from './Conversation';
import ConversationRow from './ConversationRow';
import {IConversation} from '../store/conversations';
import {useStoreState} from 'easy-peasy';
import {IStore} from '../store';

export type RootStackParamList = {
  Home: undefined;
  Conversation: IConversationProps;
};

const Home = () => {
  const conversations: IConversation[] = useStoreState<IStore>(
    state => state.conversations.messages,
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {conversations.map(({id, name, picture}) => (
          <ConversationRow key={id} id={id} name={name} picture={picture} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
