import styled from "styled-components";
import Colors from "Components/Colors";
import { Link } from "react-router-dom";

export const Container = styled.div`
  @keyframes move {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-15px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  display: grid;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 1080px;
  animation: move 3s ease-in-out infinite;
`;

export const MovieContainer = styled.div<{ bgUrl: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: inherit;
  height: 500px;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  border-radius: 0 20px 20px;
  margin: 30px;

  transition: all 0.5s ease-in-out;

  @media (max-width: 1080px) {
    height: 400px;
  }
  @media (max-width: 720px) {
    height: 320px;
  }
`;

export const GradientCover = styled.div`
  position: absolute;
  width: 100%;
  height: inherit;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.9) 10%,
    rgba(0, 0, 0, 0.1),
    transparent
  );
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 0 20px 20px;
  transition: background, background-color 0.5s ease-in-out;

  @media (max-width: 1080px) {
    background: linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent);
  }
  @media (max-width: 720px) {
    background: linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent);
  }
`;

export const DetailContainer = styled.div`
  position: relative;
  z-index: 1;
  max-width: 600px;
  margin-left: 20px;
  @media (max-width: 640px) {
    place-content: center center;
    margin: 0 20px;
  }
`;

export const TagLine = styled.h1<{ bgUrl: string }>`
  flex: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  font-size: 60px;
  font-weight: 700;
  font-style: italic;
  line-height: 1.2;
  background: url(${(props) => props.bgUrl});
  background-repeat: repeat-x;
  background-position: 100% 100%;
  color: transparent;
  -webkit-font-smoothing: antialiased;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -2px;
  text-shadow: 0px 3px 10px rgba(255, 255, 255, 0.5);
  transition: font-size 0.5s ease-in-out;
  @media (max-width: 1080px) {
    font-size: 48px;
  }
  @media (max-width: 920px) {
    font-size: 40px;
  }
  @media (max-width: 750px) {
    font-size: 36px;
  }
  @media (max-width: 640px) {
    font-size: 3px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.2;
  color: ${Colors.text.primary};
  transition: font-size 0.5s ease-in-out;
  @media (max-width: 1080px) {
    font-size: 26px;
  }
  @media (max-width: 720px) {
    font-size: 20px;
  }
`;

export const Info = styled.h1`
  font-size: 13px;
  font-weight: 300;
  line-height: 1.2;
  margin: 5px 0;
  color: ${Colors.text.secondary};
  transition: font-size 0.5s ease-in-out;
  @media (max-width: 1080px) {
    font-size: 12px;
  }
  @media (max-width: 720px) {
    font-size: 11px;
  }
`;

export const Overview = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 1.5;
  color: ${Colors.text.primary};
  margin-bottom: 10px;
  @media (max-width: 1080px) {
    font-size: 13px;
  }
  @media (max-width: 720px) {
    line-height: 1.3;
    font-size: 11px;
  }
`;

export const StarsContainer = styled.div`
  margin: 10px 0;
`;

export const PlayButtonContainer = styled.div`
  display: flex;
  margin-left: 20px;
`;

export const PlayButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  margin-bottom: 20px;
  padding: 15px 50px;
  background: linear-gradient(to left, #8a2387, #e94057, #f27121);
  border-radius: 0 10px 10px;
  color: ${Colors.text.emphasis};
  font-size: 8px;
  box-shadow: rgba(17, 17, 26, 0.3) 0px 4px 16px,
    rgba(17, 17, 26, 0.3) 0px 8px 24px, rgba(17, 17, 26, 0.3) 0px 16px 56px;
  transition: opacity, transform 0.2s linear;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1080px) {
    padding: 10px 50px;
  }
  @media (max-width: 720px) {
    padding: 10px 50px;
  }
  @media (max-width: 640px) {
    place-content: center center;
  }
`;

export const PlayButtonText = styled.span`
  font-size: 14px;
  font-weight: 300;
  margin-left: 10px;
  color: ${Colors.text.emphasis};
`;
