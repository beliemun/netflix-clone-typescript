export const hideElementFormScrollTop = (
  elementRef: React.MutableRefObject<HTMLButtonElement>,
  limit: number
) => {
  const scrollTop = document.documentElement.scrollTop;
  if (scrollTop > limit) {
    elementRef.current.style.opacity = "1";
  } else {
    elementRef.current.style.opacity = "0";
  }
};
