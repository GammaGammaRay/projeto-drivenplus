import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { styled } from "styled-components";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import ReactInputMask from "react-input-mask";

function PaymentPage() {
  const [userPayment, setUserPayment] = useState({
    membershipId: "",
    cardName: "",
    cardNumber: "",
    securityNumber: "",
    expirationDate: "",
  });
  const [membership, SetMembership] = useState({});
  const { id, price, image } = useLocation().state;
  const { auth } = useAuth();

  useEffect(() => {
    api
      .getMembershipData(auth.token, id)
      .then((response) => {
        SetMembership(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setUserPayment((prevState) => ({ ...prevState, [name]: value }));
  }

  // console.log(membership);

  return (
    <PaymentPageDiv>
      <MembershipContainer>
        <img src={image} alt="" />
        <h1>{membership.name}</h1>
        <MembershipInfoContainer>
          <h2>Benefícios:</h2>
          <ol type="1">
            {membership.perks &&
              membership.perks.map(({ id, title }) => (
                <li key={id}>{title}</li>
              ))}
          </ol>
          <h2>Preço:R${membership.price}</h2>
        </MembershipInfoContainer>
        <form>
          <input
            placeholder="Nome impresso no cartão"
            name="cardName"
            type="text"
            value={userPayment.cardName}
            onChange={handleChange}
            required
          />
          <ReactInputMask
            mask="9999 9999 9999 9999"
            placeholder="Dígitos do cartão"
            name="cardNumber"
            type="text"
            value={userPayment.cardNumber}
            onChange={handleChange}
            required
          />
          <div>
            <ReactInputMask
              mask="999"
              placeholder="Código de segurança"
              name="securityNumber"
              type="text"
              value={userPayment.securityNumber}
              onChange={handleChange}
              required
            />
            <ReactInputMask
              mask="99/99"
              placeholder="Data de validade"
              name="expirationDate"
              type="text"
              value={userPayment.expirationDate}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">ASSASSINAR</button>
        </form>
      </MembershipContainer>
    </PaymentPageDiv>
  );
}

export default PaymentPage;

const PaymentPageDiv = styled.div`
  font-weight: 400;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  h1 {
    margin-top: 24px;
    font-weight: 700;
    font-size: 5vw;
    display: flex;
    white-space: nowrap;
    justify-content: center;
  }
  input {
    width: 100%;
    margin: 8px 0px 0px 0px;
  }
  .creditCardSpecs {
    input {
      width: 50%;
    }
  }
  button {
    height: 43px;
    background: #ff4791;
    border-radius: 8px;
    border-style: none;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    width: 100%;
    margin-bottom: 27px;
    letter-spacing: 0.1em;
    &:hover{
        background-color: #cc3873;
    }
    &:disabled {
      background-color: lightgray;
    }
  }
`;
const MembershipContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  width: 30%;
  margin-top: 10vh;
`;

const MembershipInfoContainer = styled.div`
  width: 100%;
  ol {
    list-style: inside;
    list-style-type: decimal;
  }
  
`;
