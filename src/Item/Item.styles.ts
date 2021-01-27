import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  height: 100%;
  box-shadow: 2px 2px 5px #aaaaaa;
  color: #36393b;
  background-color: white;

  button {
    border-radius: 0 0 10px 10px;
    letter-spacing: 0.1rem;
  }

  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }

  h3:last-child {
    color: #aaa;
    letter-spacing: 0.1rem;
  }
`;
