import styled from "styled-components";

const colorYellow = "#ffc107";

const Heading = styled.div`
  h1, h2, h3, h4, h5, h6 {
    position: relative;
    margin-bottom: 25px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    &::after {
      content: "";
      position: absolute;
      width: 70px;
      height: 5px;
      background-color: ${colorYellow};
      bottom: -3px;
      left: 0;
    }
  }

  h1 {
    padding-bottom: 25px;
  }
`;

export default Heading;
