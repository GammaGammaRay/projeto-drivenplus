import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import SubscriptionOption from "../../components/SubscriptionOption";
import api from "../../services/api";
import { SubscriptionsContainer } from "./style";
import { useNavigate } from "react-router-dom";

export default function Subscriptions() {
  const { auth } = useAuth();
  const [plans, setPlans] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getOptions();
  }, []);

  const goToPayment = (id) => {
    auth.membership = id;
    console.log(auth.membership);
    navigate(`/subscriptions/${id}`)
  };

  const getOptions = () => {
    api.getSubscriptions(auth.token).then((response) => {
      setPlans(response.data);
    });
  };

  return (
    <SubscriptionsContainer>
      <h1>Escolha seu Plano</h1>
      {plans &&
        plans.map(({ id, price, image }) => (
          <SubscriptionOption
            key={id}
            id={id}
            price={price}
            image={image}
            setSelectedPlan={goToPayment}
          />
        ))}
    </SubscriptionsContainer>
  );
}
