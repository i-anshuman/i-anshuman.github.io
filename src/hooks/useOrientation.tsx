import { useEffect, useState } from "react";

enum Orientation {
  PORTRAIT, LANDSCAPE
};

export default function useOrientation() {
  const [orientation, setOrientation] = useState<number>(screen.orientation.angle);

  useEffect(() => {
    const handler = () => setOrientation(screen.orientation.angle);
    window.addEventListener("orientationchange", handler);
    return () => {
      window.removeEventListener("orientationchange", handler);
    };
  }, []);

  return orientation === 0 ? Orientation.PORTRAIT : Orientation.LANDSCAPE;
};
