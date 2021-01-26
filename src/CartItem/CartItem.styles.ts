import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 2px solid #aaa;
  padding-bottom: 1.2rem;
  color: #36393b;
  margin-bottom: 1.5rem;

  div {
    flex: 1;
  }

  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
  }

  img {
    max-width: 7rem;
    object-fit: cover;
    margin-left: 2.5rem;
  }
`;
