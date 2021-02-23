import styled from "styled-components";
import Colors from "Components/Colors";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  padding: 20px;
  place-content: center center;
  @media (max-width: 534px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
`;

export const Item = styled.div<{ index: number }>`
  @keyframes FadeIn {
    from {
      transform: scale(1.05) translateY(25px);
    }
    to {
      transform: scale(1) translateY(0px);
      opacity: 1;
    }
  }
  margin: 20px;
  opacity: 0;
  animation: FadeIn 1s ease-in forwards;
  animation-delay: ${(props) => props.index * 30}ms;
`;

export const Poster = styled.div<{ bgUrl: string }>`
  width: auto;
  height: 320px;
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

export const GoToTopButton = styled.button`
  @keyframes Bounce {
    0% {
      transform: translateY(-5px);
    }
    50% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(-5px);
    }
  }
  position: fixed;
  bottom: 60px;
  right: 60px;
  z-index: 1;
  width: 50px;
  height: 50px;
  background-color: ${Colors.bg.secondary};
  border-radius: 30px;
  border: 2px solid ${Colors.text.emphasis};
  opacity: 0;
  transition: all 0.3s ease-in-out;
  animation: Bounce 2s ease-in-out infinite;
  cursor: pointer;
  i {
    color: ${Colors.text.emphasis};
    font-size: 20px;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    width: 60px;
    height: 60px;
    bottom: 55px;
    right: 55px;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
    i {
      font-size: 40px;
      transition: all 0.2s ease-in-out;
    }
  }
  &:active {
    transform: scale(0.9);
    width: 50px;
    height: 50px;
    bottom: 60px;
    right: 60px;
    border-radius: 30px;
    transition: all 0.1s;
    i {
      font-size: 30px;
      transition: all 0.1s ease-in-out;
    }
  }
`;
