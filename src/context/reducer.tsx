import { SidebarState, SidebarAction, SidebarActionType } from "./action";

export default function SidebarReducer (
  state: SidebarState,
  action: SidebarAction
): SidebarState {
  switch (action.type) {
    case SidebarActionType.SHOW: {
      return { open: true };
    }
    case SidebarActionType.HIDE: {
      return { open: false };
    }
    case SidebarActionType.TOGGLE: {
      return { open: !state.open };
    }
    default: {
      return state;
    }
  }
}
