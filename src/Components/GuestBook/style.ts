import Colors from "Components/Colors";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const Form = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr min-content;
`;

export const TextInput = styled.input`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 15px 20px;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  color: ${Colors.text.emphasis};
  transition: all 0.3s ease-in-out;
  animation: BorderColor 3s ease-in-out infinite;

  @keyframes BorderColor {
    0% {
      border: 1px solid #ff6b81;
    }
    25% {
      border: 1px solid #7bed9f;
    }
    50% {
      border: 1px solid #70a1ff;
    }
    75% {
      border: 1px solid #7bed9f;
    }
    100% {
      border: 1px solid #ff6b81;
    }
  }
  @media (max-width: 720px) {
    min-width: 100px;
    font-size: 14px;
    padding: 10px 15px;
  }
  @media (max-width: 480px) {
    min-width: 80px;
    font-size: 13px;
    padding: 5px 10px;
  }
`;

export const SubmitInput = styled.input`
  min-width: 120px;
  font-size: 16px;
  font-weight: 500;
  color: ${Colors.text.emphasis};
  padding: 15px;
  margin-left: 15px;
  border-radius: 0 15px 15px;
  background: linear-gradient(to left, #8a2387, #e94057, #f27121);
  @media (max-width: 720px) {
    min-width: 80px;
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
