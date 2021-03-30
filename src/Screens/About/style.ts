import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    height: 0;
    margin-bottom: -10px;
  }
`;
