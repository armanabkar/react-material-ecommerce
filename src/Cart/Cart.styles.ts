import styled from "styled-components";

export const Wrapper = styled.aside`
  font-family: Arial, Helvetica, sans-serif;
  width: 500px;
  padding: 20px;
  background-color: #fafafa;
  height: 100%;

  @media only screen and (max-width: 600px) {
    width: 350px;

    h2 {
      text-align: center;
    }
  }

  h2 {
    color: #36393b;
    letter-spacing: 0.1rem;
  }

  h2:last-child {
    text-align: center;
  }
`;
