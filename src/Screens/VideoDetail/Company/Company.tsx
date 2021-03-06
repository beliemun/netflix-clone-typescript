import React from "react";
import {
  Container,
  Title,
  Item,
  Poster,
  DetailContainer,
  Name,
  Country,
} from "./style";
import { ICompany } from "types";
import Base from "Components/Base";
import Flag from "react-country-flag";

interface IProps {
  company: ICompany[] | null;
}

const Company: React.FunctionComponent<IProps> = ({ company }) => {
  return (
    <>
      {company && company.length > 0 && (
        <>
          <Base.GradientLine />
          <Title>Production Companies</Title>
          <Container>
            {company
              .filter((_, i) => i < 12)
              .map((item, index) => (
                <Item key={index}>
                  <Poster
                    bgUrl={
                      item.logo_path
                        ? `https://image.tmdb.org/t/p/w154${item.logo_path}`
                        : require("assets/no-image-company.png").default
                    }
                  />
                  {item.origin_country && (
                    <Flag
                      countryCode={item.origin_country}
                      svg
                      style={{
                        position: "absolute",
                        top: "6px",
                        left: "6px",
                        fontSize: "28px",
                        lineHeight: "28px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "1px solid white",
                      }}
                    />
                  )}

                  <DetailContainer>
                    <Name>{item.name}</Name>
                    <Country>
                      {item.origin_country ? item.origin_country : "-"}
                    </Country>
                  </DetailContainer>
                </Item>
              ))}
          </Container>
        </>
      )}
    </>
  );
};

export default Company;
