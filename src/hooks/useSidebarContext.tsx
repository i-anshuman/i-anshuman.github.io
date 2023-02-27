import { useReducer, useCallback } from "react";
import { SidebarState, SidebarReducer, SidebarActionType } from "@/context";

export default function useSidebarContext(initialSidebarState: SidebarState) {
  const [state, dispatch] = useReducer(SidebarReducer, initialSidebarState);

  const show = useCallback(() => dispatch({ type: SidebarActionType.SHOW }), []);
  const hide = useCallback(() => dispatch({ type: SidebarActionType.HIDE }), []);
  const toggle = useCallback(() => dispatch({ type: SidebarActionType.TOGGLE }), []);

  return { state, show, hide, toggle };
}
