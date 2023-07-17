import { MouseEvent } from "react";

type MenuButtonProps = {
  label: string;
  open: boolean;
  onClick: (event: MouseEvent) => void;
};

export default MenuButtonProps;
