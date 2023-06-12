import { styled } from "styled-components";

export const SubscriptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  margin: auto;
  h1 {
    font-size: 32px;
    font-weight: 700;
    margin: 50px 0 30px 0;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
