import { MouseEventHandler } from "react";

type MessageButtonProps = {
  label: string;
  children: JSX.Element;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export default MessageButtonProps;
