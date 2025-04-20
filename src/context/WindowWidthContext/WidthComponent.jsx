import { useState, useEffect } from "react";
import { WindowWidthContext } from "./WindowWidthContext";

export default function WindowContext({ children }) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WindowWidthContext.Provider value={{ width }}>
      {children}
    </WindowWidthContext.Provider>
  );
}
