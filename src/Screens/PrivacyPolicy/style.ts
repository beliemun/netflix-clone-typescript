import styled from "styled-components";
import Colors from "Components/Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1080px;
  padding: 30px;
  @media (max-width: 1080px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  color: ${Colors.text.primary};
  font-size: 20px;
  font-weight: 500;
  margin: 50px 0 10px;
`;

export const Content = styled.p`
  color: ${Colors.text.secondary};
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
`;
