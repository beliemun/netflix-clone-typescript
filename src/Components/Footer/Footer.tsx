import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Content,
  Terms,
  Follow,
  Store,
  GridTitle,
  LeftTitle,
  RightTitle,
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
        <GridTitle>
          <Link to="#">
            <span>TERMS OF USE</span>
          </Link>
          <Link to="#">
            <span>RIVACY POLICY</span>
          </Link>
          <Link to="#">
            <span>FAQ</span>
          </Link>
          <Link to="#">
            <span>CONTACT US</span>
          </Link>
        </GridTitle>
        <SubTitle>
          © 2021 NICOFLIX. All Rights Reserved. All videos and shows on this
          platform are trademarks of, and all related images and content are the
          property of, NICOFLIX Inc. Duplication and copy of this is strictly
          prohibited. All rights reserved.
        </SubTitle>
      </Terms>
      <Follow>
        <LeftTitle>
          <span>FOLLOW US</span>
        </LeftTitle>
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
          <a
            href="https://github.com/beliemun/nicoflix-typescript"
            target="_blank"
          >
            <FollowIcon>
              <i className="fab fa-github"></i>
            </FollowIcon>
          </a>
        </FollowContainer>
      </Follow>
      <Store>
        <RightTitle>
          <span>NICOFLIX APP</span>
        </RightTitle>
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
