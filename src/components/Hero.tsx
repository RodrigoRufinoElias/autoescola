import React from "react";
import styled, { css } from "styled-components";
import { breakAt, BreakpointSizes } from "../styles/Breakpoints";
import Heading from "./Headings";

interface HeroProps {
  children: React.ReactNode;
}

interface RootProps {
  image: string;
}

const colorYellow = "#ffc107";

const Root = styled.div<RootProps>`
  color: white;
  padding: 100px 0;

  ${(props) => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  `}
`;

const Container = styled.div`
  width: 100%;
  padding: 0 8px;

  ${breakAt(BreakpointSizes.sm)} {
    padding: 0 16px;
  }

  ${breakAt(BreakpointSizes.xl)} {
    width: 1140px;
    margin: 0 auto;
    padding: 0;
  }
`;

const Content = styled.div`
  p,
  li {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: 300;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    &::before {
      content: "\\2713\\0020";
      color: ${colorYellow};
    }
  }
`;

const Hero: React.FC<HeroProps & RootProps> = ({ image, children }) => (
  <Root image={image} data-testid="hero">
    <Container>
      <Heading>
        <h1>
          Ganhe sua <strong>liberdade</strong>
          <br />
          para ir e vir
        </h1>
      </Heading>

      <Content>{children}</Content>
    </Container>
  </Root>
);

export default Hero;
