import Colors from "Components/Colors";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min-content, 180px));
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  &:not(last-child) {
    margin-right: 20px;
  }
`;

export const VideoType = styled.span`
  font-size: 13px;
  font-weight: 300;
  line-height: 1.5;
  color: ${Colors.text.secondary};
  margin-bottom: 5px;
`;

export const VideoName = styled.span`
  width: 160px;
  font-size: 13px;
  font-weight: 300;
  line-height: 1.5;
  color: ${Colors.text.emphasis};
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
