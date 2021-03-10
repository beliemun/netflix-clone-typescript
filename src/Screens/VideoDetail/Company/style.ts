import Colors from "Components/Colors";
import styled from "styled-components";

export const Container = styled.div`
  width: inherit;
  max-width: 1080px;
  margin: 10px;
  @media (max-width: 720px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-top: 10px;
  transition: transform 0.2s ease-in-out;
  border-left: 5px solid rgba(255, 255, 255, 0.4);
  background: linear-gradient(to right, rgba(255, 255, 255, 0.05), transparent);
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  @media (max-width: 720px) {
    width: 100%;
    padding: 6px;
    margin: 6px;
  }
  @media (max-width: 480px) {
    padding: 3px;
    margin: 3px;
  }
`;

export const Poster = styled.div<{ bgUrl: string }>`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  background-color: white;
  border: 2px solid ${Colors.text.emphasis};
  transition: all 0.2s ease-in-out;
  @media (max-width: 720px) {
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
  transition: all 0.2s ease-in-out;
  @media (max-width: 720px) {
    font-size: 13px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Country = styled.h5`
  font-size: 13px;
  font-weight: 300;
  line-height: 1.5;
  color: ${Colors.text.primary};
  @media (max-width: 720px) {
    font-size: 11px;
  }
  @media (max-width: 480px) {
    font-size: 11px;
  }
`;
