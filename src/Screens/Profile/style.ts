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

export const Avatar = styled.img`
  min-width: 60px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 30px;
  object-fit: cover;
  background-color: ${Colors.bg.primary};
  @media (max-width: 720px) {
    min-width: 40px;
    width: 40px;
    height: 40px;
  }
  @media (max-width: 480px) {
    min-width: 30px;
    width: 30px;
    height: 30px;
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

export const Email = styled.h1`
  flex: auto;
  color: rgba(255, 255, 255, 0.3);
  font-size: 16px;
  font-weight: 500;
  padding: 10px 0;
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

export const Label = styled.label`
  font-size: 16px;
  padding: 10px;
`;

export const RadioContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const Radio = styled.input`
  margin-left: 10px;
`;

export const SubmitContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const Submit = styled.button`
  width: 100%;
  font-size: 16px;
  color: ${Colors.text.emphasis};
  padding: 20px;
  margin-top: 40px;
  background: linear-gradient(to left, #8a2387, #e94057, #f27121);
  border-radius: 0 20px 20px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  @media (max-width: 720px) {
    font-size: 15px;
    padding: 16px;
    border-radius: 0 16px 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
    padding: 12px;
    border-radius: 0 12px 12px;
  }
  &:hover {
    transform: scale(1.05);
  }
`;
