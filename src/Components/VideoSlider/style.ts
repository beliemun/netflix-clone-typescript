import { Link } from "react-router-dom";
import styled from "styled-components";
import Colors from "Components/Colors";

export const Container = styled.div`
  padding: 30px;
`;

export const SliderContainer = styled.div`
  width: inherit;
  margin: 20px 10px;
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

export const Item = styled(Link)`
  padding: 20px;
  @media (max-width: 1080px) {
    padding: 15px;
  }
  @media (max-width: 650px) {
    padding: 10px;
  }
`;

export const Poster = styled.div<{ bgUrl: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: auto;
  height: 200px;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  border-radius: 0 20px 20px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;

  @media (max-width: 1740px) {
    height: 180px;
  }
  @media (max-width: 1680px) {
    height: 165px;
  }
  @media (max-width: 1480px) {
    height: 150px;
  }
  @media (max-width: 1180px) {
    height: 140px;
  }
  @media (max-width: 800px) {
    height: 130px;
  }
  @media (max-width: 575px) {
    height: 120px;
  }

  &:hover {
    transform: scale(1.1);
    position: relative;
    z-index: 10;

    & > div:first-child {
      opacity: 1;
    }
    & > div:nth-child(2) {
      opacity: 0;
    }
    & > div:last-child {
      opacity: 0;
    }
  }
`;

export const PostCover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0 20px 20px 20px;
  opacity: 0;
  transition: opacity 0.2s linear;
  h3 {
    width: inherit;
    text-align: center;
    font-size: 20px;
    padding: 20px;
    padding-bottom: 0px;
    @media (max-width: 1180px) {
      font-size: 14px;
    }
  }
  p {
    padding: 0 10px;
  }
`;

export const OverviewContainer = styled.div`
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DetailContainer = styled.div`
  width: inherit;
  padding: 30px 10px 10px;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.4) 60%,
    transparent
  );
  transition: opacity 0.2s linear;
`;

export const VideoTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: ${Colors.text.emphasis};
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const VideoOverview = styled.p`
  font-size: 13px;
  font-weight: 300;
  line-height: 1.5;
  color: ${Colors.text.emphasis};
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;

  @media (max-width: 1480px) {
    font-size: 11px;
    -webkit-line-clamp: 1;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

export const PlayButtonSmall = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  padding: 10px;
  background: linear-gradient(to left, #8a2387, #e94057, #f27121);
  border-radius: 0 15px 15px;
  color: ${Colors.text.emphasis};
  font-size: 8px;
  box-shadow: rgba(17, 17, 26, 0.3) 0px 4px 16px,
    rgba(17, 17, 26, 0.3) 0px 8px 24px, rgba(17, 17, 26, 0.3) 0px 16px 56px;
  transition: opacity 0.2s linear;
`;

export const PlayButtonLarge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  width: 80%;
  height: 30px;
  padding: 10px;
  background: linear-gradient(to left, #8a2387, #e94057, #f27121);
  border-radius: 0 10px 10px;
  color: ${Colors.text.emphasis};
  font-size: 8px;
  box-shadow: rgba(17, 17, 26, 0.3) 0px 4px 16px,
    rgba(17, 17, 26, 0.3) 0px 8px 24px, rgba(17, 17, 26, 0.3) 0px 16px 56px;
  transition: opacity 0.2s linear;
`;

export const PlayButtonText = styled.span`
  font-size: 13px;
  font-weight: 300;
  margin-left: 10px;
  color: ${Colors.text.emphasis};
`;
