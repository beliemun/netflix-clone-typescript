import { Link } from "react-router-dom";
import styled from "styled-components";
import Colors from "Components/Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CenterContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1080px;
  margin-top: 10px;
  padding: 30px;
`;

export const Poster = styled.img`
  width: 240px;
  min-width: 240px;
  height: 240px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 30px;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h2`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.2;
  color: ${Colors.text.emphasis};
  margin: 10px 0;
`;

export const Info = styled.h5`
  font-size: 13px;
  font-weight: 300;
  line-height: 1.2;
  color: ${Colors.text.primary};
  margin-bottom: 10px;
`;

export const Subtitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  color: ${Colors.secondary};
  margin: 15px 0;
`;

export const Biography = styled.p`
  font-size: 16px;
  font-weight: 300;
  font-style: italic;
  line-height: 1.5;
  color: ${Colors.secondary};
`;

export const ReadMore = styled.span`
  display: inline-block;
  font-size: 11px;
  letter-spacing: 0px;
  color: black;
  background-color: ${Colors.secondary};
  border-radius: 8px;

  padding: 4px 8px;
  margin: 5px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    background-color: ${Colors.text.emphasis};
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
`;
