import { Link } from "react-router-dom";
import styled from "styled-components";
import Colors from "../Colors";

export const Contianer = styled.div`
  display: grid;
  grid-template-columns: min-content minmax(min-content, 1fr) min-content;
  height: 80px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
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
  grid-column-gap: 15px;
  grid-template-columns: repeat(5, minmax(min-content, max-content));
  height: 100%;
`;

export const Item = styled(Link)<{ current: string }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-bottom: 4px solid
    ${(props) => (props.current === "true" ? Colors.primary : "transparent")};
  transition: all 0.2s ease-in-out;
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
    span {
      color: ${(props) =>
        props.current === "true" ? Colors.primary : Colors.secondary};
    }
    i {
      color: ${(props) =>
        props.current === "true" ? Colors.primary : Colors.secondary};
      font-size: 10px;
    }
  }
`;

export const Search = styled.div<{ current: string }>`
  display: felx;
  justify-content: center;
  align-items: center;
  padding: 30px;
  i {
    color: ${(props) =>
      props.current === "true" ? Colors.primary : Colors.text.emphasis};
    font-size: 20px;
  }
`;
