import { useSidebarContext } from "@/hooks";

export const enum SidebarActionType {
  SHOW, HIDE, TOGGLE
}

export type SidebarState = { 
  open: boolean
};

export const initialSidebarState: SidebarState = {
  open: false
};

export type SidebarAction = {
  type: SidebarActionType;
  payload?: SidebarState;
};

export type SidebarReducerType = ReturnType<typeof useSidebarContext>;
