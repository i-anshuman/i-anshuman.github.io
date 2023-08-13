import { initialSidebarState, SidebarContext } from "@/context";
import { useSidebarContext } from "@/hooks";
import { ProviderProps } from "@/types";

export default function Provider({ children }: ProviderProps) {
  return (
    <SidebarContext.Provider value={useSidebarContext(initialSidebarState)}>
      {children}
    </SidebarContext.Provider>
  );
}
