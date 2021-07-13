import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {
  ScrollView,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Conversation, {IConversationProps} from './Conversation';
import {conversations} from './conversations';

export type RootStackParamList = {
  Home: undefined;
  Conversation: IConversationProps;
};

const Stack = createStackNavigator<RootStackParamList>();

interface IConversationRowProps {
  id: string;
  name: string;
  picture: string;
}

const ConversationRow: React.FC<IConversationRowProps> = ({
  id,
  name,
  picture,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        navigation.navigate('Conversation', {
          conversationId: id,
        });
      }}>
      <Image
        style={styles.image}
        source={{
          uri: picture,
        }}
      />
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

const Home = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      {conversations.map(({id, name, picture}) => (
        <ConversationRow key={id} id={id} name={name} picture={picture} />
      ))}
    </ScrollView>
  </SafeAreaView>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Conversation" component={Conversation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {},
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
    margin: 8,
    borderRadius: 30,
  },
  image: {},
});

export default App;
