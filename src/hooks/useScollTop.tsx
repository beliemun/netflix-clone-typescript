import React, { useEffect, useRef } from "react";
import { hideElementFormScrollTop } from "functions/eventHandler";

const useScrollTop = () => {
  const elementRef = useRef() as React.MutableRefObject<HTMLButtonElement>;
  useEffect(() => {
    const handler = () => hideElementFormScrollTop(elementRef, 500);
    document.addEventListener("scroll", handler);
    return () => document.removeEventListener("scroll", handler);
  }, [elementRef]);
  const onClick = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, Opera
  };
  return { elementRef, onClick };
};

export default useScrollTop;
