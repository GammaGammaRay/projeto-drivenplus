import React from "react";
import useAuth from "../../hooks/useAuth";
import { Icon } from "@iconify-icon/react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const { auth, subscription, updateSubscription } = useAuth();
  console.log({ subscription, auth });

  const navigate = useNavigate();

  function handleChangePlan() {
    navigate("/subscriptions");
  }

  function handleCancelPlan() {
    updateSubscription({});
  }

  function goToUserSettings() {
    
  }

  return (
    <>
      <HomePageContainer>
        <nav>
          {subscription && (
            <img
              src={subscription.image}
              alt={`subscriptionLogo${subscription.id}`}
            />
          )}
          <a onClick={goToUserSettings}>
            <StyledIcon icon="material-symbols:account-circle" />
          </a>
        </nav>
        <HomepageSubscriptionContainer>
          {subscription.perks.map(({ id, title, link }) => (
            <a id={id} href={link}>
              <button>{title}</button>
            </a>
          ))}
        </HomepageSubscriptionContainer>
        <HomepageUserOptionsContainer>
          <button onClick={handleChangePlan}>Mudar Plano</button>
          <button className="cancelarBtn" onClick={handleCancelPlan}>
            Cancelar Plano
          </button>
        </HomepageUserOptionsContainer>
      </HomePageContainer>
    </>
  );
}

export default HomePage;

const HomePageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: auto;
  max-width: 600px;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 50% 10% 0 10%;

  @media only screen and (min-width: 768px) {
    padding: 10% 20% 0 20%;
  }

  nav {
    position: fixed;
    top: 0px;
    width: 90%;
    max-width: 600px;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 16px;
    padding: 16px;
  }
  button {
    flex-grow: 1;
    height: 43px;
    width: 100%;
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
    margin: 8px 8px 0px 8px;

    &:hover {
      background-color: #cc3873;
    }

    &:disabled {
      background-color: lightgray;
    }
  }
`;

const StyledIcon = styled(Icon)`
  transform: scale(1.2);
  font-size: 75px;
`;

const HomepageSubscriptionContainer = styled.div`
  width: 100%;
  margin: 80px 0px 0px 0px;
`;

const HomepageUserOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: calc(100% - 32px);
  max-width: 600px;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  .cancelarBtn {
    background-color: #ff4747;
    &:hover {
      background-color: #cc3838;
    }
  }
`;
