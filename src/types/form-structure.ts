import MessageKey from "./message-key";

type FormStructure = {
  id: MessageKey;
  name: MessageKey;
  label: string;
  type?: string;
  validate: (value: string) => string;
}[];

export default FormStructure;
