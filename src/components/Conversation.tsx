import React, {useRef} from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {IConversation} from '../store/conversations';
import {RootStackParamList} from '../../App';
import {useStoreActions, useStoreState} from '../store';
import {generateUuidV4} from '../utils/generateUuidV4';
export interface IConversationProps {
  recipientName: string;
  conversationId: string;
}

type ConversationProps = StackScreenProps<RootStackParamList, 'Conversation'>;

const Conversation: React.FC<ConversationProps> = props => {
  const flatList = useRef(null);
  const [currentMessage, setCurrentMessage] = React.useState('');
  const conversations: IConversation[] = useStoreState(state => {
    return state.conversations.messages;
  });
  const conversation = conversations.find(
    conv => conv.id === props.route.params.conversationId,
  );
  const addMessage = useStoreActions(
    actions => actions.conversations.addMessage,
  );

  const pushMessage = () => {
    addMessage({
      conversationId: conversation!.id,
      message: {
        fromRecipient: false,
        id: generateUuidV4(),
        message: currentMessage,
      },
    });
    addMessage({
      conversationId: conversation!.id,
      message: {
        fromRecipient: true,
        id: generateUuidV4(),
        message: currentMessage,
      },
    });
    setCurrentMessage('');

    flatList.current.scrollToEnd({animated: true});
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.scrollView}
        data={conversation!.messages}
        renderItem={({item}) => (
          <Text
            style={!item.fromRecipient ? styles.bubble : styles.answerBubble}>
            {item.message}
          </Text>
        )}
        keyExtractor={item => item.id}
        ref={flatList}
      />
      <View style={styles.view}>
        <TextInput
          style={styles.input}
          onChangeText={setCurrentMessage}
          value={currentMessage}
          placeholder="Enter your message here"
          multiline={true}
          numberOfLines={2}
        />
        <TouchableOpacity style={styles.button} onPress={pushMessage}>
          <Text style={styles.button}>SEND</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
  },
  scrollView: {
    flex: 1,
    marginHorizontal: 20,
  },
  input: {
    flex: 1,
  },
  view: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'teal',
    color: 'white',
    padding: 8,
  },
  bubble: {
    backgroundColor: 'teal',
    color: 'white',
    borderRadius: 20,
    padding: 15,
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  answerBubble: {
    backgroundColor: '#eee',
    borderColor: '#eeeee9',
    color: 'grey',
    borderRadius: 20,
    padding: 15,
    alignSelf: 'flex-end',
    marginBottom: 5,
  },
});

export default Conversation;
