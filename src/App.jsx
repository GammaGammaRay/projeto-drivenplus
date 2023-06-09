import { Route, Routes } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";

import { Login,RegisterUser, Subscriptions } from "./pages";

export default function App() {
  return (
    <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<RegisterUser/>}/>
          <Route path="/subscriptions" element={<Subscriptions/>}/>
        </Routes>
    </AuthProvider>
  );
}
