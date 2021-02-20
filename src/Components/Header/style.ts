import { Link } from "react-router-dom";
import styled from "styled-components";
import Colors from "Components/Colors";

export const Contianer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: min-content minmax(min-content, 1fr) min-content;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(7px);
  z-index: 100;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  img {
    width: 100px;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.div`
  display: grid;
  width: 100%;
  grid-column-gap: 10px;
  grid-template-columns: repeat(5, minmax(min-content, 130px));
  place-content: center center;
`;

export const Item = styled(Link)<{ current: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  flex-direction: row;
  padding: 24px 10px;
  border-bottom: 4px solid
    ${(props) => (props.current === "true" ? Colors.primary : "transparent")};
  transition: all 0.3s ease-in-out;
  span {
    width: max-content;
    color: ${(props) =>
      props.current === "true" ? Colors.primary : Colors.text.emphasis};
    font-size: 17px;
    font-weight: 500;
  }
  i {
    color: ${(props) =>
      props.current === "true" ? Colors.primary : Colors.text.emphasis};
    padding-left: 5px;
    font-size: 16px;
  }
  &:last-child {
    border-bottom: 4px solid
      ${(props) =>
        props.current === "true" ? Colors.secondary : "transparent"};
    transition: all 0.3s ease-in-out;
    span {
      color: ${(props) =>
        props.current === "true" ? Colors.secondary : Colors.secondary};
    }
    i {
      color: ${(props) =>
        props.current === "true" ? Colors.secondary : Colors.secondary};
      font-size: 10px;
    }
  }
`;

export const Search = styled.div<{ current: string }>`
  display: felx;
  justify-content: center;
  align-items: center;
  padding: 20px;
  i {
    color: ${(props) =>
      props.current === "true" ? Colors.primary : Colors.text.emphasis};
    font-size: 20px;
  }
`;
