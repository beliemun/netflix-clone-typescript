export const hideElementFormScrollTop = (
  elementRef: React.MutableRefObject<HTMLButtonElement>,
  rate: number
) => {
  const scrollTop = document.documentElement.scrollTop;
  console.log(elementRef);
  if (scrollTop > rate) {
    elementRef.current.style.opacity = "1";
  } else {
    elementRef.current.style.opacity = "0";
  }
};
