import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import ReactInputMask from "react-input-mask";
import ReactModal from "react-modal";

function PaymentPage() {
  const [userCard, setUserCard] = useState({
    membershipId: "",
    cardName: "",
    cardNumber: "",
    securityNumber: null,
    expirationDate: "",
  });
  const [membership, SetMembership] = useState({});
  const [confirmSubscription, setConfirmSubscription] = useState(false);

  const { id, price, image } = useLocation().state;
  const { auth, updateSubscription } = useAuth();

  const navigate = useNavigate();

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
    setUserCard((prevState) => ({ ...prevState, [name]: value }));
  }

  function userSubscribe(e) {
    e.preventDefault();
    const cardData = {
      ...userCard,
      membershipId: id,
      securityNumber: parseInt(userCard.securityNumber, 10),
    };

    // console.log(cardData);
    updateSubscription(membership);

    api
      .sendUserSubscription(auth.token, cardData)
      .then(() => {
        setConfirmSubscription(true);
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
  }

  function goToHome() {
    navigate("/home");
  }

  return (
    <PaymentPageDiv>
      <MembershipContainer>
        <img src={image} alt={`subcriptionLogo${id}`} />
        <h1>{membership.name}</h1>
        <MembershipInfoContainer>
          <h2>Benefícios:</h2>
          <br />
          <ol type="1">
            {membership.perks &&
              membership.perks.map(({ id, title }) => (
                <li key={id}>{title}</li>
              ))}
          </ol>
          <br />
          <h2>Preço:</h2>
          <br />
          R$ {membership.price} cobrados mensalmente
        </MembershipInfoContainer>
        <form onSubmit={userSubscribe}>
          <input
            placeholder="Nome impresso no cartão"
            name="cardName"
            type="text"
            value={userCard.cardName}
            onChange={handleChange}
            required
          />
          <ReactInputMask
            mask="9999 9999 9999 9999"
            placeholder="Dígitos do cartão"
            name="cardNumber"
            type="text"
            value={userCard.cardNumber}
            onChange={handleChange}
            required
          />
          <div className="creditCardSpecs">
            <ReactInputMask
              mask="999"
              placeholder="CVV"
              name="securityNumber"
              type="text"
              value={userCard.securityNumber}
              onChange={handleChange}
              required
            />
            <ReactInputMask
              mask="99/99"
              placeholder="Validade"
              name="expirationDate"
              type="text"
              value={userCard.expirationDate}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">ASSASSINAR</button>
        </form>
        <ReactModal
          isOpen={confirmSubscription}
          onRequestClose={() => setConfirmSubscription(false)}
          ariaHideApp={false}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            content: {
              width: "300px",
              height: "200px",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              lineHeight: "28px",
              backgroundColor: "white",
              borderRadius: "8px",
              border: "none",
              color: "black",
              fontWeight: 700,
              fontSize: "18px",
              textAlign: "center",
            },
          }}
        >
          <p>
            Tem certeza que quer me dar seu dinheiro para assinar o plano{" "}
            {membership.name} por R$ {membership.price}?
          </p>
          <ConfirmButtons>
            <button onClick={() => setConfirmSubscription(false)}>Não!</button>
            <button onClick={goToHome}>Sim!</button>
          </ConfirmButtons>
        </ReactModal>
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

  form {
    width: 100%;
  }
  h1 {
    margin-top: 16px;
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 5vw;
    display: flex;
    white-space: nowrap;
    justify-content: center;
  }
  h2 {
    margin: 4px 0px 4px 0px;
  }

  input {
    text-indent: 8px;
    width: 100%;
    margin: 8px 0px 0px 0px;
    padding: 0 0;
  }
  .creditCardSpecs {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    input {
      width: 48%;
    }
  }
  button {
    height: 43px;
    background: #ff4791;
    border-radius: 8px;
    border-style: none;
    font-size: 18px;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    width: 100%;
    padding: 0 0;
    letter-spacing: 0.1em;
    margin-top: 8px;
    &:hover {
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
  width: 50%;
  margin-top: 6vh;
`;

const MembershipInfoContainer = styled.div`
  width: 100%;
  font-size: 16px;
  ol {
    list-style: inside;
    list-style-type: decimal;
  }
`;

const ConfirmButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  button {
    flex-grow: 1;
    height: 43px;
    background: #ff4791;
    border-radius: 8px;
    border-style: none;
    font-size: 18px;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    padding: 0;
    letter-spacing: 0.1em;
    margin-top: 8px;
    margin-left: 8px;
    margin-right: 8px;

    &:hover {
      background-color: #cc3873;
    }

    &:disabled {
      background-color: lightgray;
    }
  }
`;
