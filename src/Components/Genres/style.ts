import styled from "styled-components";
import Colors from "Components/Colors";

export const Container = styled.h5`
  color: ${Colors.text.secondary};
  font-size: 13px;
  font-weight: 300;
  text-align: center;
  vertical-align: middle;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
