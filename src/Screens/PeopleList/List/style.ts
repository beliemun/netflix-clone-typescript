import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 20px;
  place-content: center center;
  @media (max-width: 1080px) {
    padding: 15px;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  }
  @media (max-width: 720px) {
    padding: 5px;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }
`;
