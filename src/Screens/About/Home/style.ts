import Colors from "Components/Colors";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 70vh;
  padding-left: 30px;
  @media (max-width: 720px) {
  }
  @media (max-width: 480px) {
    padding: 0;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
`;

export const Poster = styled.img`
  min-width: 80px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  @media (max-width: 720px) {
    min-width: 50px;
    width: 50px;
    height: 50px;
  }
  @media (max-width: 480px) {
    min-width: 40px;
    width: 40px;
    height: 40px;
  }
`;

export const Message = styled.h3`
  flex: auto;
  width: 100%;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 1px;
  color: ${Colors.text.primary};
  background-color: rgba(0, 0, 0, 0.5);
  padding: 15px;
  border-radius: 0 15px 15px;
  margin-left: 10px;
  @media (max-width: 720px) {
    font-size: 14px;
    padding: 12px;
    border-radius: 0 12px 12px;
    margin-left: 10px;
  }
  @media (max-width: 480px) {
    font-size: 13px;
    padding: 8px;
    border-radius: 0 8px 8px;
    margin-left: 10px;
  }
`;
