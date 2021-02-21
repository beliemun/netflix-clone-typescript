import React, { useState, useEffect, useRef } from "react";
import { hideElementFormScrollTop } from "functions/eventHandler";

const useScrollTop = () => {
  const elementRef = useRef() as React.MutableRefObject<HTMLButtonElement>;

  useEffect(() => {
    document.addEventListener("scroll", () =>
      hideElementFormScrollTop(elementRef, 500)
    );
  }, []);

  const onClick = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, Opera
  };

  return { elementRef, onClick };
};

export default useScrollTop;
