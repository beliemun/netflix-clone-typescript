import styled from "styled-components";
import Colors from "Components/Colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  max-width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(7px);
`;

export const Content = styled.div`
  width: 1080px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 10px 20px 30px;
  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

export const Terms = styled.div`
  grid-column: 1 / span 2;
  padding: 10px;
  @media (max-width: 580px) {
    grid-column: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const GridTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  color: ${Colors.text.emphasis};
  margin: 20px 0;
  span {
    display: block;
    padding: 10px;
    text-align: center;
    &:hover {
      transform: scale(1.1);
      color: ${Colors.primary};
    }
  }
`;

export const LeftTitle = styled.div`
  display: flex;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  color: ${Colors.text.emphasis};
  margin: 20px 0;
  @media (max-width: 580px) {
    justify-content: center;
  }
`;

export const RightTitle = styled.div`
  display: flex;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  color: ${Colors.text.emphasis};
  margin: 20px 0;
  @media (max-width: 1080px) {
    justify-content: flex-end;
  }
  @media (max-width: 580px) {
    justify-content: center;
  }
`;

export const SubTitle = styled.p`
  font-size: 13px;
  font-weight: 300;
  color: ${Colors.text.secondary};
  line-height: 1.5;
  @media (max-width: 580px) {
    font-size: 11px;
    text-algin: center;
  }
`;

export const Follow = styled.div`
  padding: 10px;
  @media (max-width: 580px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const FollowContainer = styled.div`
  display: flex;
`;

export const FollowIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.text.emphasis};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${Colors.primary};
  transition: all 0.2s ease-in-out;
  &:not(first-child) {
    margin-right: 10px;
  }
  &:hover {
    transform: scale(1.1);
    background-color: ${Colors.bg.secondary};
  }
`;

export const Store = styled.div`
  padding: 10px;
  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  @media (max-width: 580px) {
    align-items: center;
  }
`;

export const StoreContainer = styled.div`
  display: flex;
`;

export const DownloadButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.text.emphasis};
  padding: 12px;
  border-radius: 0 10px 10px;
  background-color: ${Colors.primary};
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  i {
    margin-right: 5px;
  }
  &:not(first-child) {
    margin-right: 10px;
    @media (max-width: 1080px) {
      margin-right: 0px;
      margin-left: 10px;
    }
  }
  &:hover {
    transform: scale(1.1);
    background-color: ${Colors.bg.secondary};
  }
`;
