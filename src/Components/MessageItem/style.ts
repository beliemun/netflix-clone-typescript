import styled from "styled-components";
import Colors from "Components/Colors";
import { Gender } from "types";

export const Container = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  margin: 30px 0;
`;

export const Poster = styled.img`
  min-width: 60px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
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

export const PosterWithPhoto = styled.div<{ gender: Gender }>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 60px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 36px;
  background-color: ${(props) =>
    props.gender === "Male" ? "#2980b9" : "#eb3b5a"};
  @media (max-width: 720px) {
    min-width: 40px;
    width: 40px;
    height: 40px;
    font-size: 24px;
  }
  @media (max-width: 480px) {
    min-width: 30px;
    width: 30px;
    height: 30px;
    font-size: 18px;
  }
`;

export const MessageContainer = styled.div`
  flex: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const EditContainer = styled.div`
  display: flex;
`;

export const EditText = styled.span<{ isEditing: boolean }>`
  font-size: 13px;
  font-weight: 500;
  line-height: 1.2;
  padding: 0 5px;
  color: ${(props) =>
    props.isEditing ? Colors.secondary : Colors.text.primary};
  cursor: pointer;
`;

export const Name = styled.h3<{ isAdmin: boolean }>`
  font-size: 16px;
  font-weight: ${(props) => (props.isAdmin ? 900 : 500)};
  line-height: 1.5;
  letter-spacing: 1px;
  margin-left: 15px;
  color: ${Colors.secondary};
  transition: all 0.3s ease-in-out;
  animation: ${(props) =>
    props.isAdmin ? "NameColor 0.5s ease-in-out infinite" : "none"};

  @keyframes NameColor {
    0% {
      color: #ff6b81;
    }
    25% {
      color: #7bed9f;
    }
    50% {
      color: #70a1ff;
    }
    75% {
      color: #7bed9f;
    }
    100% {
      color: #ff6b81;
    }
  }
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

export const CreateAt = styled.span`
  grid-column: 1 / -1;
  grid-row: 2 / span 2;
  justify-self: flex-end;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.2;
  margin: 5px;
  color: ${Colors.text.secondary};
  @media (max-width: 720px) {
    font-size: 12px;
  }
  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

export const Form = styled.form`
  padding-right: 10px;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 1px;
  color: ${Colors.secondary};
  background-color: rgba(0, 0, 0, 0.5);
  padding: 15px;
  border-radius: 0 15px 15px;
  margin-left: 10px;
  border: 1px solid ${Colors.secondary};
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
