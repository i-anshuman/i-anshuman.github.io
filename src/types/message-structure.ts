import MessageKey from './message-key';

type MessageStructure = {
  [key in MessageKey]: string;
};

export default MessageStructure;