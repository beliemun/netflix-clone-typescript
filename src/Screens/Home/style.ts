import styled from "styled-components";
import Colors from "Components/Colors";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: grid;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 1080px;
`;

export const MovieContainer = styled.div<{ bgUrl: string }>`
  position: relative;
  display: grid;
  place-content: center left;
  width: inherit;
  height: 500px;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  border-radius: 0 20px 20px;
  margin: 30px;
  background-color: rbga(255, 255, 255, 0.2);
  transition: all 0.5s ease-in-out;

  @media (max-width: 1080px) {
    height: 400px;
  }
  @media (max-width: 720px) {
    height: 320px;
  }
  @media (max-width: 640px) {
    height: 240px;
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
  border-radius: 0 20px 20px;
  transition: background, background-color 0.5s ease-in-out;

  @media (max-width: 1080px) {
    width: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent);
    background-color: rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 720px) {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const DetailContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 500px;
  padding: 20px;
`;

export const TagLine = styled.h1`
  font-size: 36px;
  font-weight: 500;
  line-height: 1.2;
  color: ${Colors.text.primary};
  transition: font-size 0.5s ease-in-out;
  @media (max-width: 1080px) {
    width: 400px;
    font-size: 32px;
  }
  @media (max-width: 720px) {
    width: 300px;
    font-size: 24px;
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
    font-size: 22px;
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

export const PlayButton = styled(Link)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  right: 30px;
  bottom: 30px;
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
    right: 15px;
    bottom: 15px;
    padding: 15px 30px;
  }
  @media (max-width: 720px) {
    width: 30%;
    bottom: -20px;
  }
`;

export const PlayButtonText = styled.span`
  font-size: 14px;
  font-weight: 300;
  margin-left: 10px;
  color: ${Colors.text.emphasis};
`;
