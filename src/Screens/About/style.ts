import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  width: 100%;
  max-width: 1080px;
  padding: 20px;
  transition: all 0.2s ease-in-out;
  @media (max-width: 1080px) {
    grid-template-columns: 150px 1fr;
  }
  @media (max-width: 720px) {
    grid-template-columns: 120px 1fr;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const Banner = styled.div<{ bgUrl: string }>`
  width: 240px;
  height: 120px;
  max-width: 1080px;
  background: url(${(props) => props.bgUrl});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  @media (max-width: 1080px) {
    width: 180px;
    height: 90px;
    margin-bottom: 10px;
  }
  @media (max-width: 720px) {
    width: 120px;
    height: 60px;
  }
  @media (max-width: 480px) {
    width: 100px;
    height: 50px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: -10px;
  margin-bottom: 20px;
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin: 5px;
  border-radius: 50%;
  border: 3px solid white;
  @media (max-width: 1080px) {
    width: 40px;
    height: 40px;
    margin: 4px;
  }
  @media (max-width: 720px) {
    width: 30px;
    height: 30px;
    margin: 3px;
  }
  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
    margin: 2px;
    border-width: 2px;
  }
`;
