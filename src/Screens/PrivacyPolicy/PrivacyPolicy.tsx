import CategoryHeader from "Components/Category/Header";
import React from "react";
import { Container, CenterContainer, Title, Content } from "./style";

const PrivacyPolicy: React.FunctionComponent = () => {
  return (
    <>
      <CategoryHeader
        current={"true"}
        title={"Privacy Policy"}
        description={"Effective Date: May 11, 2021"}
      />
      <Container>
        <CenterContainer>
          <Content>
            When using any of our products or interacting with themoviedb.org
            which is owned and operated by TiVo Corporation, TiVo Platform
            Technologies LLC, TiVo Solutions, Inc., or Rovi Corporation or any
            of our subsidiaries that link to this Privacy Policy (collectively,
            “TMDB,” “we,” “our”, or “us”) that do not have a separate privacy
            policy, you consent to the collection, transfer, storage,
            processing, disclosure and use of your information as described in
            this Privacy Policy. This includes any information you choose to
            provide that is deemed sensitive under applicable law. If you do not
            agree with the terms of this Privacy Policy, you should not use TMDB
            products (a TMDB account or API access), or access or interact with
            any other aspect of TMDB’s business. We collect and process data
            that we use to provide you with TMDB products, notify you of changes
            to our policies or products, identify or troubleshoot issues,
            conduct surveys, improve the products we provide to you, market and
            advertise our products including providing advertising to you, and
            otherwise operate our business. Your rights to your personal data
            and its collection and use are outlined in this policy. If you have
            a disability and need this policy provided to you in a different
            format please email privacy@tivo.com.
          </Content>
          <Title>Information We Collect Automatically</Title>
          <Content>
            The following information was collected automatically, including in
            the last 12 mon
          </Content>
          <Title>TMDB Products and Your Data</Title>
          <Content>
            When you use or interact with TMDB products, we may use a variety of
            technologies that collect information about how the product(s) is
            accessed and used. This information may include: your interactions
            with TMDB products (such as what you post, view, upload, download,
            rate and interact with content); TMDB API usage data; location data
            (such as GPS data, zip code, and time zone); personal information
            that may indirectly identify you (such as URL information, cookie
            data, and your IP address or MAC address); data that may not
            directly identify you but is collected as you use our products,
            which may include network connection type and provider, and
            information related to searches on TMDB; and functional data such as
            API registration and use data.
          </Content>

          <Title>TMDB Account Data</Title>
          <Content>
            When you sign up for a TMDB account, you create a user profile that
            must include the following information: your email address. You may
            have also provided the following information: your name, street
            address, city, state, zip code, email address(s), phone number(s)
            including mobile, gender and demographic information, social media
            profiles and information. We may share this information with third
            parties as necessary for the purposes of monitoring and enforcement.
            We may also provide this information to service providers as
            necessary to provide you with TMDB Products.
          </Content>
          <Title>TMDB Product Data</Title>
          <Content>
            When you activate a TMDB account, we will also process and store
            your IP and MAC addresses for which allow us to send information to
            your device and provide you with TMDB Products. This information may
            be provided to service providers to provide you with TMDB Products.
          </Content>
          <Title>Third-Party Application Data</Title>
          <Content>
            You may integrate your TMDB account with certain third-party
            applications, social media sites, websites, and services
            (“Third-Party Applications”). These Third-Party Applications may
            have their own terms and conditions of use and privacy policies and
            your use of these Third-Party Applications will be governed by and
            subject to such terms and conditions and privacy policies. In order
            to enable this functionality, you will be prompted to allow such
            Third-Party Applications to connect with your TMDB Product or
            account. Once you have enabled this functionality, TMDB will
            collect, process, and share data with the Third-Party Application
            that you have authorized. If you enable your TMDB account with any
            Third-Party Applications, we may receive information related to your
            interactions with TMDB products through the Third-Party Application,
            as well as information about your publicly available activity on the
            Third-Party Application or information you have consented for the
            Third-Party Application to share with TMDB. If you wish to stop the
            collection or sharing of information with the specific Third-Party
            Application you have authorized, you need to disable the feature or
            cancel your applicable subscription or manage your account for the
            Third-Party Application. TMDB does not endorse and is not
            responsible or liable for the behavior, features, or content of any
            Third-Party Application or for any transaction you may enter into
            with the provider of any such Third-Party Applications. Information
            we collect from your account on a Third-Party Application with your
            consent may include data about you and your friends from that
            service (such as what you or they have liked or shared). We may use
            cookies and other technologies to collect this information; you can
            learn more about such use in the Cookies and Similar Technologies
            section of this Privacy Policy.
          </Content>
          <Title>Your Right to Know</Title>
          <Content>
            TMDB collects a variety of personal data and uses this data to
            provide you with products. TMDB collects the below-listed types of
            personal data of its consumers when you initiate your TMDB account,
            update your account information, interface with us at trade shows or
            other marketing events, during the course of your time as a
            consumer, when you are interested in products, and when using the
            products. TMDB sends this data to the following types of service
            providers – data analytics companies to help us understand our data
            and our customers, software tools that help us view and use customer
            data, service support companies to help us provide excellent
            customer service, data storage companies who securely store and
            manage your data on our behalf. We send this data to service
            providers who are contractually obligated to use this data only for
            the purposes outlined in our commercial agreements. Identifiers
            Information in Customer Records Demographic Information Internet or
            Network Activity Inferences from Above Used to Profile – including
            your TMDB account history. Geolocation Data
          </Content>
          <Title>Security of Your Information</Title>
          <Content>
            We use commercially reasonable efforts to safeguard the
            confidentiality of personal information, including appropriate
            technological, organizational and physical safeguards. We store
            personal information in electronic and physical files that are
            secure, and our security measures include secure on-site and
            off-site storage. We conduct audits and monitor compliance with our
            privacy practices. However, due to the design of the Internet,
            ever-changing technology and other factors outside of our control,
            we cannot guarantee that communications between you and our servers
            will be free from unauthorized access by third parties or that we
            will not be subject to security breaches. We will have no liability
            for disclosure of personal information due to errors in transmission
            or unauthorized or unlawful acts of third parties. You are
            responsible for the security of your username, ID and password for
            any of the TMDB products. Please take care when using and storing
            them.
          </Content>
        </CenterContainer>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
