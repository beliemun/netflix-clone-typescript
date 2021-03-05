import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Content,
  Terms,
  Follow,
  Store,
  Title,
  SubTitle,
  FollowContainer,
  FollowIcon,
  StoreContainer,
  DownloadButton,
} from "./style";

const Footer = () => (
  <Container>
    <Content>
      <Terms>
        <Title>
          <Link to="#">
            <span>TERMS OF USE</span>
          </Link>
          {"ㅤ•ㅤ"}
          <Link to="#">
            <span>RIVACY POLICY</span>
          </Link>
          {"ㅤ•ㅤ"}
          <Link to="#">
            <span>FAQ</span>
          </Link>
          {"ㅤ•ㅤ"}
          <Link to="#">
            <span>CONTACT US</span>
          </Link>
        </Title>
        <SubTitle>
          © 2021 NICOFLIX. All Rights Reserved. All videos and shows on this
          platform are trademarks of, and all related images and content are the
          property of, NICOFLIX Inc. Duplication and copy of this is strictly
          prohibited. All rights reserved.
        </SubTitle>
      </Terms>
      <Follow>
        <Title>FOLLOW US</Title>
        <FollowContainer>
          <Link to="#">
            <FollowIcon>
              <i className="fab fa-facebook-f"></i>
            </FollowIcon>
          </Link>
          <Link to="#">
            <FollowIcon>
              <i className="fab fa-instagram"></i>
            </FollowIcon>
          </Link>
          <Link to="#">
            <FollowIcon>
              <i className="fab fa-twitter"></i>
            </FollowIcon>
          </Link>
          <Link to="#">
            <FollowIcon>
              <i className="fab fa-github"></i>
            </FollowIcon>
          </Link>
        </FollowContainer>
      </Follow>
      <Store>
        <Title>NICOFLIX APP</Title>
        <StoreContainer>
          <Link to="#">
            <DownloadButton>
              <i className="fab fa-apple fa-lg"></i>
              App Store
            </DownloadButton>
          </Link>
          <Link to="#">
            <DownloadButton>
              <i className="fab fa-google-play fa-lg"></i>
              Google Play
            </DownloadButton>
          </Link>
        </StoreContainer>
      </Store>
    </Content>
  </Container>
);

export default Footer;
