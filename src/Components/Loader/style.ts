import styled from "styled-components";
import Colors from "Components/Colors";

export const Container = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-size: 40px;
  padding-top: 50px;
  background: blur(10px);
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: ${Colors.primary};
`;
