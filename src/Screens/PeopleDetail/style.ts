import { Link } from "react-router-dom";
import styled from "styled-components";
import Colors from "Components/Colors";

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
  filter: blur(15px);
`;

export const BackDropCurtain = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
