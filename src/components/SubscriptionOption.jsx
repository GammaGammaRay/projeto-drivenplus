import React from "react";
import { styled } from "styled-components";

function SubscriptionOption({ id, price, image, setSelectedPlan }) {
  return (
    <OptionButton onClick={() => setSelectedPlan(id)}>
      <img src={image} alt={`planImg${id}`} />
      <h2>R$ {price}</h2>
    </OptionButton>
  );
}

export default SubscriptionOption;

const OptionButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  height: fit-content;
  margin: 16px 0 16px 0;
  padding: 32px 32px 32px 32px;
  border: 3px solid #7e7e7e;
  border-radius: 12px;
  color: white;
  background: transparent;
  h2 {
    font-size: 28px;
    font-weight: 500;
  }
  &:hover {
    color: #ff4791;
    border: 3px solid #ff4791;
  }
`;
