import styled from "styled-components";
import Colors from "Components/Colors";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  background-color: black;
  opacity: 1;
  @media (max-width: 720px) {
    background-color: ${Colors.bg.primary};
  }
`;

export const MovieContainer = styled.div<{ bgUrl: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1080px;
  height: 500px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1080px) {
    height: 400px;
  }
  @media (max-width: 720px) {
    height: auto;
    margin: 20px 20px 0;
    border-radius: 20px;
    background-image: url(${(props) => props.bgUrl});
    background-position: center center;
    background-size: cover;
  }
`;

export const MovieContainerCover = styled.div`
  padding: 20px 0;
  border-radius: 20px;
  @media (max-width: 720px) {
    background: linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent);
  }
`;

export const GradientCover = styled.div`
  position: absolute;
  width: 100%;
  height: inherit;
  @media (max-width: 720px) {
    background: linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent);
    border-radius: 20px;
  }
`;

export const DetailContainer = styled.div`
  position: relative;
  z-index: 1;
  max-width: 600px;
  margin-top: 30px;
  margin-left: 50px;
  @media (max-width: 720px) {
    margin: 0 20px;
  }
  transition: font-size 0.5s ease-in-out;
  transform: translateX(-100px);
  animation: MoveToRight 1s ease-out forwards;
  animation-delay: 0.3s;
  opacity: 0;
  @keyframes MoveToRight {
    from {
      transform: translateX(-100px);
    }
    to {
      transform: translateX(0px);
      opacity: 1;
    }
  }
`;

export const TagLine = styled.h1<{ bgUrl: string }>`
  z-index: 1;
  font-size: 60px;
  font-weight: 700;
  font-style: italic;
  line-height: 1.2;
  margin-left: 50px;
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
  @media (max-width: 720px) {
    display: none;
  }

  transform: translateX(-100px);
  animation: MoveToRight 1s ease-out forwards;
  animation-delay: 0.2s;
  opacity: 0;
  @keyframes MoveToRight {
    from {
      transform: translateX(-100px);
    }
    to {
      transform: translateX(0px);
      opacity: 1;
    }
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
    font-size: 32px;
  }
  @media (max-width: 480px) {
    font-size: 24px;
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
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const Overview = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  color: ${Colors.text.primary};
  margin-bottom: 30px;
  @media (max-width: 1080px) {
    font-size: 15px;
  }
  @media (max-width: 720px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 10px;
  }
`;

export const StarsContainer = styled.div`
  margin: 10px 0;
`;

export const PlayButtonContainer = styled.div`
  display: flex;
  margin-left: 50px;
  @media (max-width: 720px) {
    margin-left: 20px;
  }
  transition: font-size 0.5s ease-in-out;
  transform: translateX(-100px);
  animation: MoveToRight 1s ease-out forwards;
  animation-delay: 0.4s;
  opacity: 0;
  @keyframes MoveToRight {
    from {
      transform: translateX(-100px);
    }
    to {
      transform: translateX(0px);
      opacity: 1;
    }
  }
`;

export const PlayButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
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
    padding: 10px 30px;
  }
  @media (max-width: 480px) {
    padding: 10px 20px;
  }
`;

export const PlayButtonText = styled.span`
  font-size: 14px;
  font-weight: 300;
  margin-left: 10px;
  color: ${Colors.text.emphasis};
  @media (max-width: 720px) {
    font-size: 13px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const YoutubeContainer = styled.div`
  position: fixed;
  margin-top: -80px;
  width: 100vw;
  height: 100vh;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    pointer-events: none;
  }
  @media (max-width: 720px) {
    display: none;
  }
`;

export const YoutubeCover = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    120deg,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.2)
  );
  transition: background, background-color 0.5s ease-in-out;
`;
