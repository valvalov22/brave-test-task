"use client";
import Link from "next/link";

import { styled } from "styled-components";
import { device } from "@/styles/breakpoints";
import { providers } from "@/utils/constants";
import Footer from "@/components/Footer";

const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1em 0 0 0;
  flex-wrap: wrap;
  height: 100%;
  overflow: hidden;

  @media ${device.md} {
    flex-direction: column;
    height: 100%;
  }
`;

const Main = styled.main`
  width: 90%;
  margin: 0 auto;

  @media ${device.md} {
    text-align: center;
    margin-top: 0;
  }
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 50%;
  width: 100%;
  height: 280px;
  margin: 0;
  padding: 0 1em 0 1em;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  flex-direction: column;
  margin-top: 1em;
  // box-shadow: 9px -11px rgba(0, 0, 0, 0.01);

  &:hover {
    transform: scaleX(1.03);
  }

  @media ${device.md} {
    height: 190px;
    width: 100%;
    border: none;
    transition: none;
  }
`;

const CardName = styled.div`
  margin-top: 1em;
  font-size: 18px;
  text-align: center;

  @media ${device.md} {
    font-size: 16px;
  }
`;

const CardImg = styled.img`
  width: 200px;
  height: 70px;
  object-fit: scale-down;

  @media ${device.md} {
    width: 180px;
    height: 60px;
  }
`;

export default function Home() {
  return (
    <Main>
      <h1>Выберите провайдера</h1>
      <Cards>
        {providers.map((item, index) => (
          <Link
            key={item.id}
            href={{
              pathname: `/payment/${item.id + 1}`,
            }}
          >
            <Card>
              <div>
                <CardImg src={item.img} alt="logo" />
              </div>
              <div>
                <CardName>{item.name}</CardName>
              </div>
            </Card>
          </Link>
        ))}
      </Cards>
      <Footer />
    </Main>
  );
}
