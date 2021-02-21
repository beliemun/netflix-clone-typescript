export const hideElementFormScrollTop = (
  elementRef: React.MutableRefObject<HTMLButtonElement>,
  rate: number
) => {
  const scrollTop = document.documentElement.scrollTop;
  if (scrollTop > rate) {
    elementRef.current.style.opacity = "1";
    elementRef.current.style.transform = "translateY(-20px)";
  } else {
    elementRef.current.style.opacity = "0";
    elementRef.current.style.transform = "translateY(0px)";
  }
};
