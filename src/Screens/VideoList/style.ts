import styled from "styled-components";
import Colors from "Components/Colors";
import "./style.css";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  padding: 20px;
  place-content: center center;
`;

export const Item = styled.div`
  margin: 20px;
  animation: FadeIn 1s ease-in-out forwards;
`;

export const Poster = styled.div<{ bgUrl: string }>`
  width: auto;
  height: 300px;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  border-radius: 20px;
`;

export const Title = styled.h3`
  color: ${Colors.text.emphasis};
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Genres = styled.h5`
  color: ${Colors.text.secondary};
  font-size: 13px;
  font-weight: 300;
  text-align: center;
  vertical-align: middle;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const GoToTopButton = styled.button`
  position: fixed;
  bottom: 60px;
  right: 60px;
  z-index: 1;
  width: 60px;
  height: 60px;
  background-color: ${Colors.primaryHover};
  border-radius: 30px;
  border: 2px solid ${Colors.text.emphasis};
  opacity: 0;
  transition: all 0.5s ease-in-out;
  i {
    color: ${Colors.text.emphasis};
    font-size: 30px;
    transition: all 0.5s ease-in-out;
  }
  &:hover {
    background-color: ${Colors.primary};
    width: 70px;
    height: 70px;
    bottom: 55px;
    right: 55px;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
    i {
      font-size: 50px;
      transition: all 0.2s ease-in-out;
    }
  }
  &:active {
    transform: scale(0.9);
    width: 60px;
    height: 60px;
    bottom: 60px;
    right: 60px;
    border-radius: 30px;
    transition: all 0.1s;
    i {
      font-size: 30px;
      transition: all 0.1s ease-in-out;
    }
  }
`;
