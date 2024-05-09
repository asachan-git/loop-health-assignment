import React from "react";
import styled from "@emotion/styled";

import Info from "./../Info/Info";

import RupeeOnPaperSvg from "./../../assets/rupee-on-paper.svg?react";
import LifeCountSvg from "./../../assets/life-count-illustration.svg?react";

const Details = [
  {
    id: 1,
    icon: <RupeeOnPaperSvg />,
    title: "Endorsement Cost",
    items: [
      { label: "Total Cost (Deductions - Refund)", value: "₹1,00,000" },
      { label: "Cost of Additions", value: "₹1,00,000" },
    ],
  },
  {
    id: 2,
    icon: <LifeCountSvg />,
    title: "Life Count",
    items: [
      { label: "Total Life Count", value: "100" },
      { label: "No. of Additions (2 New Lives)", value: "100" },
    ],
  },
];

const DetailsCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 60px 56px 0px 56px;
  gap: 12px;
  flex: 1;
  background: #f8f9fa;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 36px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 160px;
  flex-grow: 1;
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & > span {
    color: #595959;
    font-weight: 500;
  }
`;

const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 2rem;
  border-radius: 12px;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #595959;
    font-weight: 300;
    font-size: 14px;
  }
`;

const HorizontalLine = styled.hr`
  border: none;
  height: 1px;
  width: 100%;
  background: #cbd6d3;
  margin: 1rem 0;

  &:last-of-type {
    display: none;
  }
`;

const DetailsCard: React.FC = () => {
  return (
    <DetailsCardWrapper>
      <CardContainer>
        {Details.map((detail, index) => (
          <Container key={detail.id}>
            <Heading>
              {detail.icon}
              <span>{detail.title}</span>
            </Heading>
            <DetailsSection>
              {detail.items?.map((item, index) => (
                <React.Fragment key={index}>
                  <div>
                    {item.label} <span>{item.value}</span>
                  </div>
                  <HorizontalLine />
                </React.Fragment>
              ))}
            </DetailsSection>
          </Container>
        ))}
      </CardContainer>
      <Info />
    </DetailsCardWrapper>
  );
};

export default DetailsCard;
