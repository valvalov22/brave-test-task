import { device } from "@/styles/breakpoints";
import { styled } from "styled-components";

import { providers } from "@/utils/constants";

const TheFooter = styled.footer`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%);
  // position: relative;
  font-size: 14px;

  a {
    color: red;
  }

  @media ${device.tb} {
    position: relative;
    margin: 1em auto 1em auto;
    text-align: center;
  }

  @media ${device.xm} {
    font-size: 10px;
  }
`;

const TheFooterCards = styled.footer`
  position: relative;
  font-size: 14px;
  text-align: center;
  margin: 1em 0 1em 0;

  a {
    color: red;
  }

  @media ${device.xm} {
    font-size: 10px;
  }
`;

const Footer = () => {
  return (
    <>
      {providers.length < 8 ? (
        <TheFooter>
          <hr />
          Created by{" "}
          <a href="https://github.com/valvalov22" target="_blank">
            &copy;ValValov22
          </a>
        </TheFooter>
      ) : (
        <TheFooterCards>
          <hr />
          Created by{" "}
          <a href="https://github.com/valvalov22" target="_blank">
            &copy;ValValov22
          </a>
        </TheFooterCards>
      )}
    </>
  );
};

export default Footer;
