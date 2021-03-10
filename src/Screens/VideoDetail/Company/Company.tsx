import React from "react";
import {
  Container,
  Title,
  Item,
  Poster,
  DetailContainer,
  Name,
  Country,
  Flag,
} from "./style";
import { ICompany } from "types";
import Base from "Components/Base";
import getFlagIcon from "country-flag-icons/unicode";

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
                  >
                    {item.origin_country && (
                      <Flag>{getFlagIcon(item.origin_country)}</Flag>
                    )}
                  </Poster>
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
