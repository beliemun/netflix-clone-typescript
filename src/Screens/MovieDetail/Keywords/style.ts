import Colors from "Components/Colors";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: inherit;
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
`;

export const Item = styled(Link)`
  border: 1px solid ${Colors.secondary};
  border-radius: 10px;
  padding: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 300;
  font-style: italic;
  color: ${Colors.secondary};
  transition: color, background-color 0.2s ease-in-out;
  &:hover {
    color: ${Colors.text.emphasis};
    background-color: ${Colors.secondary};
  }
`;

export const Title = styled.span`
  font-size: 14px;
  font-weight: 300;
  font-style: italic;
  color: ${Colors.text.secondary};
  margin-top: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
