import { Orientation } from "@/types";
import { useEffect, useState } from "react";

export default function useOrientation() {
  const [orientation, setOrientation] = useState<number>(0);

  useEffect(() => {
    const handler = () => setOrientation(screen.orientation.angle);
    window.addEventListener("orientationchange", handler);
    return () => {
      window.removeEventListener("orientationchange", handler);
    };
  }, []);

  return orientation === 0 ? Orientation.PORTRAIT : Orientation.LANDSCAPE;
};
