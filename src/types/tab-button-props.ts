import { ReactNode } from "react";

type TabButtonProps = {
  children: ReactNode;
  controls: string;
  selected: boolean;
  index: number;
  onClick: (idx: number) => void;
};

export default TabButtonProps;
