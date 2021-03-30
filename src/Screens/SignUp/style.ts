import { Link } from "react-router-dom";
import styled from "styled-components";
import Colors from "Components/Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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

export const Title = styled.h1`
  color: ${Colors.text.primary};
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 15px;
  text-align: center;
  transition: all 0.2s ease-in-out;
  @media (max-width: 720px) {
    font-size: 24px;
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
    display: none;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  max-width: 720px;
  margin: 30px;
  @media (max-width: 720px) {
    margin: 20px;
  }
`;

export const Poster = styled.img`
  min-width: 60px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
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

export const Form = styled.form`
  width: 100%;
  max-width: 720px;
  padding: 30px;
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
  margin-bottom: 20px;

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
    min-width: 120px;
  }
  @media (max-width: 480px) {
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

export const Submit = styled.input`
  width: 100%;
  font-size: 16px;
  color: ${Colors.text.emphasis};
  padding: 20px;
  margin-top: 20px;
  background: linear-gradient(to left, #8a2387, #e94057, #f27121);
  border-radius: 0 20px 20px;
  cursor: pointer;
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
