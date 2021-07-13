import {action, createStore} from 'easy-peasy';
import {conversations, IMessage, IConversation} from './conversations';

export interface IStore {
  conversations: {
    messages: IConversation[];
    addMessage: any;
  };
}

export const store = createStore<IStore>({
  conversations: {
    messages: conversations,
    addMessage: action<IConversation, IMessage>((state, payload) => {
      state.messages.push(payload);
    }),
  },
});
