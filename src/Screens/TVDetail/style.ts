import Colors from "Components/Colors";
import styled from "styled-components";

export const Contaniner = styled.div`
  display: grid;
  place-content: center;
  padding: 20px;
`;

export const TVContainer = styled.div`
  width: 100%;
  max-width: 1080px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const TVPoster = styled.div<{ bgUrl: string }>`
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

export const TVDetailContainer = styled.div`
  grid-column: 2 / 6;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;
`;

export const TVTitle = styled.h2`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 32px;
  font-weight: 500;
  line-height: 1.2;
  color: ${Colors.text.primary};
  transition: font-size 0.2s ease-in-out;
  @media (max-width: 640px) {
    font-size: 24px;
  }
`;

export const TVSubTitle = styled.h5`
  font-size: 13px;
  font-weight: 300;
  line-height: 1.5;
  color: ${Colors.text.secondary};
`;

export const TVTagLine = styled.p`
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

export const TVOverview = styled.p`
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

export const Revenue = styled.h3`
  font-size: 18px;
  font-weight: 300;
  font-style: italic;
  margin-top: 20px;
  text-align: center;
  color: ${Colors.secondary};
  @media (max-width: 640px) {
    font-size: 14px;
  }
`;
