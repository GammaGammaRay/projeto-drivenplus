import React from "react";
import useAuth from "../../hooks/useAuth";
import SubscriptionOption from "../../components/SubscriptionOption";

export default function Subscriptions() {
  const { auth, login } = useAuth();
  console.log(auth, login);

  return (
  <SubscriptionOption/>
    );
}
