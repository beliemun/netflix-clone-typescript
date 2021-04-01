import Colors from "Components/Colors";
import { LeftTitle } from "Components/Footer/style";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-left: 30px;
  opacity: 0;
  animation: FadeIn 1s ease-in-out forwards;

  @keyframes FadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }

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
  padding-bottom: 20px;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const LectureContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 20px 0;
  margin-top: -60px;
  margin-right: 20px;
  margin-bottom: 80px;

  @media (max-width: 720px) {
    margin-top: -40px;
    margin-right: 0px;
  }
  @media (max-width: 480px) {
  }
  &:hover {
    & > img {
      filter: grayscale(0.8);
      box-shadow: rgba(136, 165, 191, 0.2) 6px 2px 16px 0px,
        rgba(255, 255, 255, 0.2) -6px -2px 16px 0px;
    }
    & > div:last-child {
      transform: translateY(-10px) scale(1.05);
    }
  }
`;

export const Lecture = styled.img`
  width: 320px;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  @media (max-width: 720px) {
    width: 240px;
  }
  @media (max-width: 480px) {
    width: 200px;
  }
`;

export const LectureTitleContainer = styled.div`
  width: 280px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: -40px;
  right: 20px;
  border-radius: 10px;
  background-color: white;
  padding: 10px 0;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 720px) {
    width: 200px;
  }
  @media (max-width: 480px) {
    width: 160px;
  }
`;

export const LectureTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: black;
  margin-top: 5px;
  @media (max-width: 720px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const LectureButton = styled.div`
  width: 100%;
  background: linear-gradient(to left, #8a2387, #e94057, #f27121);
  border-radius: 10px;
  padding: 15px 10px;
  margin-top: 15px;
  color: white;
  @media (max-width: 720px) {
    font-size: 12px;
    padding: 12px 8px;
    margin-top: 12px;
  }
  @media (max-width: 480px) {
    font-size: 11px;
    padding: 10px 5px;
    margin-top: 10px;
  }
`;

export const A = styled.a`
  position: relative;
  display: flex;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const AlertText = styled.h2`
  font-size: 16px;
  font-weight: 500;
  font-style: italic;
  line-height: 1.2;
  color: ${Colors.primary};
  margin-top: 20px;
  @media (max-width: 720px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const SeriesContainer = styled.div`
  position: relative;
  display: grid;
  place-content: center center;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
  gap: 20px;
`;

export const SeriesButtonContainer = styled.a`
  position: relative;
  width: 100%;
  top: -20px;
  left: -10px;
  display: flex;
  justify-content: flex-end;
  transition: transform 0.2s ease-in-out;
`;

export const SeriesButton = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding: 15px;
  color: white;
  border-radius: 0 10px 10px;
  background: linear-gradient(to left, #8a2387, #e94057, #f27121);
`;

export const SeriesText = styled.h4`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 10px;
  color: ${Colors.secondary};
`;

export const Description = styled.p`
  color: ${Colors.secondary};
  font-size: 14px;
  font-weight: 300;
  line-height: 1.5;
  margin: 0px 30px 15px;
  text-align: center;
  transition: all 0.2s ease-in-out;
  @media (max-width: 720px) {
    font-size: 13px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 20px;
  }
`;

export const LinkText = styled(Link)`
  font-weight: 500;
  text-decoration: underline;
  margin: 5px;
`;
