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

export const StyledProductBoxSmall = styled.div`
  width: var(--prodBoxWidth);
  height: var(--prodBoxHeight);
  margin: 1vh 0;
  padding: 0;

  border-radius: var(--roundCorners);
  color: var(--darkColorReduced);
  background-color: var(--lightColorFull);

  text-overflow: clip;
  overflow: auto;
  white-space: pre-line;
  min-height: 25em;

  border: 1px solid var(--darkColorFull);
  box-shadow: 4px 3px 4px var(--darkColorFull);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(5px);
`;

export const StyledIngressHeader = styled.h2`
  font-size: clamp(1rem, 1.5rem, 2rem);
  margin: 0 auto;
  padding: 1rem 0;
`;

export const StyledIngressFootline = styled(StyledIngressHeader)`
text-align: left;
justify-self: end;
`;

export const StyledIngressText = styled.h3`
  font-size: clamp(0.6rem, 0.8rem, 1rem);
  text-align: left;
  padding: 1rem;
`;

export const StyledIngressBody = styled.h4`
  font-size: clamp(0.6rem, 0.8rem, 1rem);
  text-align: left;
  padding: 0.5rem;
`;

export const StyledIngressDetails = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(0.6rem, 0.8rem, 1rem);
  font-style: italic;
  text-align: left;
  padding: 0.5rem;
`;


