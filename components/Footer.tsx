import { device } from "@/styles/breakpoints";
import { styled } from "styled-components";

const TheFooter = styled.footer`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%);
  font-size: 14px;

  a {
    color: red;
  }

  @media ${device.md} {
    position: relative;
    margin: 1em auto 1em auto;
    text-align: center;
  }

  @media ${device.xm} {
    font-size: 10px;
  }
`;

const Footer = () => {
  return (
    <TheFooter>
      <hr />
      Created by{" "}
      <a href="https://github.com/valvalov22" target="_blank">
        &copy;ValValov22
      </a>
    </TheFooter>
  );
};

export default Footer;
