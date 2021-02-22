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
  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    grid-template-columns: 1fr min-content;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  img {
    width: 100px;
  }
  @media (max-width: 1000px) {
    padding: 15px;
    img {
      width: 70px;
    }
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.div`
  display: grid;
  place-content: center center;
  grid-column-gap: 10px;
  grid-template-columns: repeat(5, minmax(min-content, 130px));
  .menu-icon-sr {
    display: none;
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(5, minmax(min-content, 100px));
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(5, 1fr);
    .menu-icon-wr {
      display: none;
    }
    .menu-icon-sr {
      display: inline;
    }
  }
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

  @media (max-width: 1000px) {
    width: 100px;
    padding: 24px 0px;
    span {
      font-size: 15px;
    }
  }

  @media (max-width: 700px) {
    width: 70px;
    i {
      font-size: 20px;
    }
    &:last-child {
      i {
        font-size: 20px;
      }
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
      props.current === "true" ? Colors.primary : Colors.text.secondary};
    font-size: 20px;
  }
  @media (max-width: 1000px) {
    padding: 20px;
    i {
      font-size: 15px;
    }
  }
`;
