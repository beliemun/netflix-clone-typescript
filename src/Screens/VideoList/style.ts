import styled from "styled-components";
import Colors from "Components/Colors";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  padding: 20px;
  place-content: center center;
`;

export const Item = styled.div`
  margin: 20px;
`;

export const Poster = styled.div<{ bgUrl: string }>`
  width: auto;
  height: 300px;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  border-radius: 20px;
`;

export const Title = styled.h3`
  color: ${Colors.text.emphasis};
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Genres = styled.h5`
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
