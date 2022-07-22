import styled from "styled-components";

export const StyledHeader = styled.header`
  margin: 0 auto;
  padding: 1rem;
  background-color: #47bbed;

  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(5px);
  border-bottom: #61dbfb solid 1px;
`;

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
`;

export const StyledMain = styled.main`
  width: 60%;
  margin: auto;
  border-radius: 15px;
  margin-top: 5rem;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(5px);
  border: #61dbfb solid 1px;
`;
