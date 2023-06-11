import React from "react";
import useAuth from "../../hooks/useAuth";

function HomePage() {
  const { auth, subscription } = useAuth();
  console.log(subscription)
  return <h1>Home</h1>;
}

export default HomePage;
