import Colors from "Components/Colors";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: inherit;
  max-width: 1080px;
  margin: 10px;
  margin-bottom: 30px;
  display: flex;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.15);
    &:hover {
      height: 12px;
      background-color: rgba(255, 255, 255, 0.5);
    }
    &:active {
      height: 12px;
      background-color: ${Colors.secondary};
    }
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 500;
  color: ${Colors.text.primary};
  margin-top: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media (max-width: 720px) {
    font-size: 24px;
  }
`;

export const Item = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 140px;
  padding: 10px;
  margin: 10px;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
    img {
      border: 3px solid ${Colors.secondary};
    }
    h4 {
      color: ${Colors.secondary};
    }
  }
  @media (max-width: 720px) {
    padding: 6px;
    margin: 6px;
  }
  @media (max-width: 480px) {
    padding: 3px;
    margin: 3px;
  }
`;

export const Poster = styled.img<{ bgUrl: string }>`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  border: 3px solid ${Colors.text.emphasis};
  transition: all 0.2s ease-in-out;
  @media (max-width: 720px) {
    width: 80px;
    height: 80px;
    border: 2px solid ${Colors.text.emphasis};
  }
  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    border: 1px solid ${Colors.text.emphasis};
  }
`;

export const Name = styled.h4`
  font-size: 15px;
  font-weight: 500;
  margin: 10px 0;
  color: ${Colors.text.primary};
  text-align: center;
  transition: all 0.2s ease-in-out;
  @media (max-width: 720px) {
    font-size: 13px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Character = styled.h5`
  font-size: 13px;
  font-weight: 300;
  color: ${Colors.text.secondary};
  text-align: center;
  @media (max-width: 720px) {
    font-size: 11px;
  }
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;
