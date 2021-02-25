import styled from "styled-components";
import Colors from "Components/Colors";

export const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* padding: 10px; */
  i {
    font-size: 12px;
    color: ${Colors.primary};
    margin: 1px;
  }
  span {
    font-size: 11px;
    font-weight: 300;
    color: ${Colors.text.emphasis};
    margin-left: 3px;
  }
`;
