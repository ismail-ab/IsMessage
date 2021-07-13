import React from 'react';
import {useNavigation} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';

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
          recipientName: name,
        });
      }}>
      <View style={styles.view}>
        <Image
          style={styles.image}
          source={{
            uri: picture,
          }}
        />
        <Text style={styles.title}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    padding: 8,
    borderBottomColor: 'teal',
  },
  title: {
    fontSize: 15,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
});

export default ConversationRow;
