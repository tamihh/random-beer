import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px 10%;

  @media (min-width: 1200px) {
    width: 1100px;
    margin: 0 auto;
  }
`;
