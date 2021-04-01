import styled from "styled-components";
import Colors from "Components/Colors";

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

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.div`
  width: 100%;
  max-width: 720px;
  padding: 30px;
  margin: 30px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  @media (max-width: 720px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  color: ${Colors.text.primary};
  font-size: 32px;
  font-weight: 500;
  margin: 15px 0;
  transition: all 0.2s ease-in-out;
  @media (max-width: 720px) {
    margin: 10px 0;
    font-size: 24px;
  }
  @media (max-width: 480px) {
    margin: 0;
    font-size: 18px;
  }
`;

export const Description = styled.p`
  color: ${Colors.secondary};
  font-size: 14px;
  font-weight: 300;
  line-height: 1.5;
  margin: 0px 30px 15px;
  text-align: center;
  transition: all 0.2s ease-in-out;
  @media (max-width: 720px) {
    font-size: 13px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 20px;
  }
`;

export const Section = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px;
  padding-left: 0;
  margin-bottom: 30px;

  &:hover {
    div:last-child {
      opacity: 1;
    }
  }
`;

export const InputTitle = styled.label`
  width: 150px;
  min-width: 150px;
  padding: 15px 10px;
  font-size: 14px;
  border-left: 3px solid ${Colors.primary};
  background: linear-gradient(to right, rgba(255, 0, 0, 0.3), transparent 90%);
  @media (max-width: 720px) {
    font-size: 13px;
    width: 120px;
    min-width: 120px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
    width: 100px;
    min-width: 100px;
  }
`;

export const Input = styled.input`
  flex: auto;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: border 0.2s ease-in-out;
  color: ${Colors.text.primary};
  font-size: 16px;
  padding: 10px 0;
  &:focus,
  :hover {
    border-bottom: 3px solid ${Colors.primary};
    color: ${Colors.primary};
  }
`;
