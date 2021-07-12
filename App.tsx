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

interface IMessage {
  msg: string;
  author: string;
}

const App = () => {
  const flatList = useRef(null);
  const [currentMessage, setCurrentMessage] = React.useState('');
  const [messages, setMessages] = React.useState<IMessage[]>([]);

  const pushMessage = () => {
    setMessages([
      ...messages,
      {msg: currentMessage, author: 'me'},
      {msg: currentMessage, author: 'recipient'},
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
            style={item.author === 'me' ? styles.bubble : styles.answerBubble}>
            {item.msg}
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
          placeholder="useless placeholder"
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

export default App;
