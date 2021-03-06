import Colors from "Components/Colors";
import styled from "styled-components";

export const Contaniner = styled.div`
  display: grid;
  place-content: center;
  padding: 20px;
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
