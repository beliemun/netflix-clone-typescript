import styled from "styled-components";
import Colors from "Components/Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const FormContainer = styled.div``;

export const Form = styled.form`
  display: flex;
  width: 100%;
  max-width: 720px;
  justify-content: center;
  align-items: center;
  i {
    color: ${Colors.primary};
    font-size: 24px;
    margin-right: 20px;
  }
  margin-top: 15px;
  margin-bottom: 30px;
  padding: 10px;
  @media (max-width: 720px) {
    i {
      color: ${Colors.primary};
      font-size: 16px;
      margin-right: 10px;
    }
    margin-top: 0px;
    margin-bottom: 10px;
  }
  @media (max-width: 720px) {
    margin-top: -10px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding-bottom: 10px;
  font-size: 18px;
  color: ${Colors.primary};
  background-color: transparent;
  border-style: none;
  border-bottom: 2px solid ${Colors.primary};
  border-radius: 0;

  ::placeholder {
    color: rgba(255, 255, 255, 0.1);
  }
`;

export const Title = styled.h3`
  color: ${Colors.text.primary};
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 15px;
  transition: all 0.2s ease-in-out;
  @media (max-width: 720px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

export const Description = styled.p`
  color: ${Colors.text.secondary};
  font-size: 14px;
  font-weight: 300;
  line-height: 1.5;
  margin: 0px 30px 15px;
  transition: all 0.2s ease-in-out;
  @media (max-width: 720px) {
    display: none;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

export const MenuItem = styled.div<{ current: boolean }>`
  width: max-content;
  color: ${(props) =>
    props.current ? Colors.text.emphasis : Colors.text.secondary};
  margin: 0 5px;
  padding: 12px;
  border: 1px solid
    ${(props) => (props.current ? Colors.text.emphasis : "transparent")};
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  text-align: center;
  cursor: pointer;
  @media (max-width: 1080px) {
    padding: 8px;
    border-radius: 8px;
    font-size: 13px;
  }
  @media (max-width: 480px) {
    padding: 6px;
    border-radius: 6px;
    font-size: 12px;
  }
`;
