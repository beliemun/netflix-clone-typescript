import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 20px;
  place-content: center center;
  /* @media (max-width: 534px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  } */
`;
