import Colors from "Components/Colors";
import styled from "styled-components";

export const Container = styled.div`
  width: inherit;
  max-width: 1080px;
  margin: 10px;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 500;
  color: ${Colors.text.primary};
  margin-top: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media (max-width: 650px) {
    font-size: 24px;
  }
`;

export const Item = styled.div`
  display: flex;
  padding: 10px;
  transition: transform 0.2s ease-in-out;
  @media (max-width: 650px) {
    width: 100%;
    padding: 6px;
    margin: 6px;
  }
`;

export const Poster = styled.img<{ bgUrl: string }>`
  min-width: 60px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  background-color: white;
  border: 2px solid ${Colors.text.emphasis};
  transition: all 0.2s ease-in-out;
  @media (max-width: 650px) {
    min-width: 40px;
    width: 40px;
    height: 40px;
  }
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10px;
`;

export const Name = styled.h4`
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5;
  color: ${Colors.text.primary};
  margin-bottom: 10px;
  transition: all 0.2s ease-in-out;
  @media (max-width: 650px) {
    font-size: 13px;
  }
`;

export const Content = styled.div`
  font-size: 18px;
  font-family: "Handlee";
  line-height: 1.5;
  letter-spacing: 1px;
  color: ${Colors.text.primary};
  background-color: rgba(0, 0, 0, 0.5);
  padding: 15px;
  border-radius: 0 15px 15px;
  @media (max-width: 650px) {
    font-size: 16px;
    padding: 10px;
    border-radius: 0 10px 10px;
  }
`;

export const CreateAt = styled.h5`
  font-size: 11px;
  font-weight: 300;
  line-height: 1.5;
  padding: 8px;
  color: ${Colors.text.secondary};
`;

export const ReadMore = styled.span`
  display: inline-block;
  font-family: "Roboto", sans-serif;
  font-size: 11px;
  letter-spacing: 0px;
  color: black;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 8px;

  padding: 4px 8px;
  margin: 5px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${Colors.secondary};
  }
`;
