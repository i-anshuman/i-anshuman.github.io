import { ReactElement } from "react";
import { initialSidebarState, SidebarContext } from "@/context";
import { useSidebarContext } from "@/hooks";

type ProviderProps = {
  children: ReactElement | ReactElement[];
};

export default function Provider({ children }: ProviderProps) {
  return (
    <SidebarContext.Provider value={useSidebarContext(initialSidebarState)}>
      {children}
    </SidebarContext.Provider>
  );
}
