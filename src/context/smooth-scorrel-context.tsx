"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Lenis from "lenis";

// provide a typed default (undefined) so TypeScript knows the context shape
const SmoothScrollContext = createContext<Lenis | undefined>(undefined);

export const useSmoothScroller = (): Lenis | undefined =>
  useContext(SmoothScrollContext);

export const ScrollContext = ({ children }: { children: ReactNode }) => {
  const [lenisRef, setLenisRef] = useState<Lenis | undefined>(undefined);

  useEffect(() => {
    const scroller = new Lenis();

    const raf = (time: number) => {
      scroller.raf(time);
      requestAnimationFrame(raf);
    };

    const rf = requestAnimationFrame(raf);
    setLenisRef(scroller);

    return () => {
      // cancel the RAF scheduled by this effect and destroy the local scroller
      cancelAnimationFrame(rf);
      scroller.destroy();
    };
    // run once on mount
  }, []);

  return (
    <SmoothScrollContext.Provider value={lenisRef}>
      {children}
    </SmoothScrollContext.Provider>
  );
};
