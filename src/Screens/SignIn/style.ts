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

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Banner = styled.div<{ bgUrl: string }>`
  width: 240px;
  height: 120px;
  max-width: 1080px;
  background: url(${(props) => props.bgUrl});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  @media (max-width: 720px) {
    width: 180px;
    height: 90px;
  }
  @media (max-width: 480px) {
    width: 120px;
    height: 60px;
  }
`;

export const Title = styled.h1`
  color: ${Colors.text.primary};
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 15px;
  transition: all 0.2s ease-in-out;
  @media (max-width: 720px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Description = styled.p`
  color: ${Colors.secondary};
  font-size: 14px;
  font-weight: 300;
  line-height: 1.5;
  margin: 0px 30px 50px;
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

export const Form = styled.form`
  width: 100%;
  max-width: 720px;
  padding: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  @media (max-width: 720px) {
    padding: 20px;
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
  @media (max-width: 720px) {
    margin-bottom: 10px;
  }
  @media (max-width: 480px) {
    margin-bottom: 0px;
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
  &:focus {
    border-bottom: 3px solid ${Colors.primary};
    color: ${Colors.primary};
  }
`;

export const Submit = styled.input`
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

export const Alert = styled.div`
  position: absolute;
  top: 60px;
  left: 150px;
  font-size: 13px;
  line-height: 1.2;
  padding: 10px;
  background-color: rgba(0, 0, 0, 1);
  border-radius: 10px;
  border: 1px solid ${Colors.primary};
  transition: opacity 0.2s ease-in-out;
  opacity: 0;
`;
