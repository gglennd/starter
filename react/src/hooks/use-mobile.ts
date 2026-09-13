import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobileState, dispatchIsMobile] = React.useReducer(
    (state: boolean | undefined, action: boolean) => action,
    undefined,
  );
  const setIsMobile = React.useCallback((v: boolean) => dispatchIsMobile(v), []);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, [setIsMobile]);

  return !!isMobileState;
}
