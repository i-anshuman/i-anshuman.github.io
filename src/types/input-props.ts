import { HTMLInputTypeAttribute } from "react"; 

type InputFieldProps = {
  id: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  label: string;
  value: string;
  placeholder?: string;
  error?: string;
  shake?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default InputFieldProps;
