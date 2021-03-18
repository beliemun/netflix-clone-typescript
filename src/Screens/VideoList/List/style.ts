import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  padding: 20px;
  place-content: center center;
  @media (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  }
  @media (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;
