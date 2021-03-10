import { Link } from "react-router-dom";
import styled from "styled-components";
import Colors from "Components/Colors";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: min-content minmax(min-content, 1fr) min-content;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(7px);
  z-index: 100;
  @media (max-width: 720px) {
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
    transition: all 0.3s ease-in-out;
  }
  @media (max-width: 1080px) {
    padding: 15px;
    img {
      width: 70px;
    }
  }
  @media (max-width: 720px) {
    display: none;
    transition: all 0.5s ease-in-out;
  }
  transition: all 0.5s ease-in-out;
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
  transition: all 0.3s ease-in-out;
  .menu-icon-sr {
    display: none;
  }
  @media (max-width: 1080px) {
    grid-template-columns: repeat(5, minmax(min-content, 100px));
    transition: all 0.3s ease-in-out;
  }
  @media (max-width: 720px) {
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 0px;
    .menu-icon-wr {
      display: none;
    }
    .menu-icon-sr {
      display: inline;
    }
    transition: all 0.3s ease-in-out;
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

  @media (max-width: 1080px) {
    width: 100px;
    padding: 24px 0px;
    span {
      font-size: 15px;
    }
  }

  @media (max-width: 720px) {
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
  @media (max-width: 480px) {
    width: 50px;
    i {
      font-size: 18px;
    }
    &:last-child {
      i {
        font-size: 18px;
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
    transition: all 0.3s ease-in-out;
  }
  @media (max-width: 1080px) {
    padding: 20px;
    i {
      font-size: 15px;
      transition: all 0.3s ease-in-out;
    }
  }
`;
