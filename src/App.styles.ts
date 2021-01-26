import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export const Wrapper = styled.div`
  margin: 40px;
`;

export const Title = styled.h1`
  margin: -1.3rem 0 0.8rem 0;
  text-align: center;
  padding-bottom: 1rem;
  letter-spacing: 0.08rem;
  border-bottom: 2px solid #aaa;
  color: #36393b;
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 30px;
  top: 20px;
`;
