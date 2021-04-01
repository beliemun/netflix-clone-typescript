import Colors from "Components/Colors";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
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

export const MessageContainer = styled.p`
  flex: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 1px;
  color: ${Colors.text.emphasis};
  margin-left: 10px;
  @media (max-width: 720px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const Message = styled.p`
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
  display: flex;
`;

export const TextInput = styled.input`
  flex: auto;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 15px 20px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
  color: ${Colors.text.emphasis};
`;

export const SubmitInput = styled.input`
  min-width: 100px;
  font-size: 16px;
  font-weight: 500;
  color: ${Colors.text.emphasis};
  padding: 15px;
  margin-left: 15px;
  border-radius: 0 20px 20px;
  background: linear-gradient(to left, #8a2387, #e94057, #f27121);
`;
