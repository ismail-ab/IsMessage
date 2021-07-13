import {
  Action,
  action,
  computed,
  Computed,
  createStore,
  createTypedHooks,
  debug,
} from 'easy-peasy';
import {conversations, IConversation, IMessage} from './conversations';

export const typedHooks = createTypedHooks<IStore>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

export interface IAddMessagePayload {
  conversationId: string;
  message: IMessage;
}

export interface IStore {
  conversations: IConversationStore;
}

export interface IConversationStore {
  messages: IConversation[];
  addMessage: Action<IConversationStore, IAddMessagePayload>;
}

export const store = createStore<IStore>({
  conversations: {
    messages: conversations,
    addMessage: action<IConversationStore, IAddMessagePayload>(
      ({messages}, payload) => {
        const conversation = messages.find(
          ({id}) => payload.conversationId === id,
        );

        console.log(conversation!.id);

        conversation!.messages.push(payload.message);
      },
    ),
  },
});
