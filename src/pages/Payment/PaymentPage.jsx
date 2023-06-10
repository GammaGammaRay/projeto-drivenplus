import React from "react";
import { useParams } from "react-router-dom";

function PaymentPage() {
  const { planId } = useParams();

  

  return <div>PaymentPage</div>;
}

export default PaymentPage;
