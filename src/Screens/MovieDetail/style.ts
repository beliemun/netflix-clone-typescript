import Colors from "Components/Colors";
import styled from "styled-components";

export const Contaniner = styled.div`
  display: grid;
  place-content: center;
  padding: 20px;
`;

export const MovieContainer = styled.div`
  width: 100%;
  max-width: 1080px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const MoviePoster = styled.div<{ bgUrl: string }>`
  min-width: 180px;
  height: 320px;
  margin: 0 20px;
  border-radius: 0 30px 30px;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 54px 55px,
    rgba(0, 0, 0, 0.24) 0px -12px 30px, rgba(0, 0, 0, 0.24) 0px 4px 6px,
    rgba(0, 0, 0, 0.34) 0px 12px 13px, rgba(0, 0, 0, 0.18) 0px -3px 5px;
`;

export const MovieDetailContainer = styled.div`
  grid-column: 2 / 6;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const MovieTitle = styled.h2`
  font-size: 32px;
  font-weight: 500;
  line-height: 1;
  color: ${Colors.text.primary};
  transition: font-size 0.2s ease-in-out;
  @media (max-width: 640px) {
    font-size: 24px;
  }
`;

export const MovieSubTitle = styled.h5`
  font-size: 13px;
  font-weight: 300;
  line-height: 1.5;
  color: ${Colors.text.secondary};
`;

export const MovieTagLine = styled.p`
  font-size: 24px;
  font-weight: 300;
  font-style: italic;
  color: ${Colors.text.primary};
  margin-top: 25px;
  transition: font-size 0.2s ease-in-out;
  @media (max-width: 640px) {
    font-size: 18px;
  }
`;

export const MovieOverview = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 1.5;
  color: ${Colors.text.primary};
  margin-bottom: 10px;
  transition: font-size 0.2s ease-in-out;
  @media (max-width: 640px) {
    font-size: 12px;
  }
`;

export const BackDrop = styled.div<{ bgUrl: string }>`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  filter: blur(5px);
`;

export const BackDropCurtain = styled.div`
  width: inherit;
  height: inherit;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const RateContainer = styled.div`
  margin-top: 5px;
`;
