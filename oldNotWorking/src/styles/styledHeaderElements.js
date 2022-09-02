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

export const StyledIngress = styled.div`
  width: var(--ingressBoxWidth);
  margin: 0;
  padding: 0;
  border-radius: var(--roundCorners);
  color: var(--darkColorReduced);
  background-color: var(--lightColorFull);
  text-overflow: clip;
  min-height: 15em;
  height:fit-content;

  border: 1px solid var(--darkColorFull);
  box-shadow: 4px 3px 4px var(--darkColorFull);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(5px);
`;

export const StyledIngressHeader = styled.h2`
  font-size: clamp(1rem, 2.5vw, 2rem); 
  margin: 0 auto;
  padding: 1rem 0;
`;

export const StyledIngressText = styled.h3`
  font-size: clamp(0.6rem, 2vw, 1rem); 
  text-align: left;
  padding: 1rem;
`;
