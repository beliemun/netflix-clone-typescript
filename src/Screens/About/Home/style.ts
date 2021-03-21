import Colors from "Components/Colors";
import { LeftTitle } from "Components/Footer/style";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 70vh;
  padding-left: 30px;
  @media (max-width: 720px) {
  }
  @media (max-width: 480px) {
    padding: 0;
  }
`;

export const Section = styled.div`
  margin-bottom: 50px;
`;

export const Title = styled.h1<{ bgUrl: string; isHeader: boolean }>`
  font-size: ${(props) => (props.isHeader ? "36px" : "28px")};
  font-weight: ${(props) => (props.isHeader ? "900" : "700")};
  font-style: italic;
  line-height: 1.2;
  background: url(${(props) => props.bgUrl});
  background-repeat: repeat-x;
  background-position: 100% 100%;
  text-align: ${(props) => (props.isHeader ? "center" : "left")};
  -webkit-font-smoothing: antialiased;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: font-size 0.5s ease-in-out;
  @media (max-width: 720px) {
    font-size: ${(props) => (props.isHeader ? "24px" : "20px")};
  }
  @media (max-width: 480px) {
    font-size: ${(props) => (props.isHeader ? "20px" : "16px")};
  }
  margin-bottom: 20px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

export const Poster = styled.img`
  min-width: 60px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  @media (max-width: 720px) {
    min-width: 40px;
    width: 40px;
    height: 40px;
  }
  @media (max-width: 480px) {
    min-width: 30px;
    width: 30px;
    height: 30px;
  }
`;

export const Message = styled.h3`
  flex: auto;
  width: 100%;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 1px;
  color: ${Colors.text.primary};
  background-color: rgba(0, 0, 0, 0.5);
  padding: 15px;
  border-radius: 0 15px 15px;
  margin-left: 10px;
  @media (max-width: 720px) {
    font-size: 14px;
    padding: 12px;
    border-radius: 0 12px 12px;
    margin-left: 10px;
  }
  @media (max-width: 480px) {
    font-size: 13px;
    padding: 8px;
    border-radius: 0 8px 8px;
    margin-left: 10px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;
