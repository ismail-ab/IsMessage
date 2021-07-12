import React, {useRef} from 'react';
import {
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from 'react-native';
import {conversations, IMessage} from './conversations';

interface IConversation {
  conversationId: string;
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const Conversation: React.FC<IConversation> = ({conversationId}) => {
  const flatList = useRef(null);
  const [currentMessage, setCurrentMessage] = React.useState('');
  const conversation = conversations.find(conv => (conv.id = conversationId));
  const [messages, setMessages] = React.useState<IMessage[]>(
    conversation!.messages,
  );

  const pushMessage = () => {
    setMessages([
      ...messages,
      {
        fromRecipient: false,
        id: uuidv4(),
        message: currentMessage,
      },
      {
        fromRecipient: true,
        id: uuidv4(),
        message: currentMessage,
      },
    ]);
    setCurrentMessage('');

    flatList.current.scrollToEnd({animated: true});
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.scrollView}
        data={messages}
        renderItem={({item}) => (
          <Text
            style={!item.fromRecipient ? styles.bubble : styles.answerBubble}>
            {item.message}
          </Text>
        )}
        keyExtractor={() => uuidv4()}
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
    paddingTop: StatusBar.currentHeight,
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
    borderRadius: 30,
    padding: 15,
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  answerBubble: {
    backgroundColor: '#eee',
    borderColor: '#eeeee9',
    color: 'grey',
    borderRadius: 30,
    padding: 15,
    alignSelf: 'flex-end',
    marginBottom: 5,
  },
});

export default Conversation;
