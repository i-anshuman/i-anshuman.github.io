import { createContext } from "react";
import { initialSidebarState, SidebarReducerType } from "./action";

const SidebarContext = createContext<SidebarReducerType>({
  state: initialSidebarState,
  show: () => {},
  hide: () => {},
  toggle: () => {},
});

export default SidebarContext;
