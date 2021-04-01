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

export const SocialContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 30px;
  @media (max-width: 720px) {
    margin-top: 0px;
  }
`;

export const SocialButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 16px;
  color: ${Colors.text.emphasis};
  padding: 20px;
  border-radius: 0 20px 20px;
  background: linear-gradient(to left, #8a2387, #e94057, #f27121);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  @media (max-width: 720px) {
    font-size: 14px;
    padding: 16px;
    border-radius: 0 16px 16px;
  }
  @media (max-width: 480px) {
    font-size: 13px;
    padding: 12px;
    border-radius: 0 12px 12px;
  }
  i {
    font-size: 20px;
    margin-right: 10px;
  }
  &:hover {
    transform: scale(1.05);
  }
`;
