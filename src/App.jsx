import { Navigate, Route, Routes } from "react-router-dom";
import { AboutUs, Cart, Home, Login, Register, Shop } from "./pages";
import { useEffect } from "react";
import { useUser } from "./store";
import NotFound from "./pages/not-found";
import Premium from "./pages/premium";
import { redirect } from "react-router-dom";

function App() {
  const userData = localStorage.getItem("userData");

  const { setUser } = useUser();

  useEffect(() => {
    if (userData) {
      // console.log();
      setUser(JSON.parse(userData));
    }
  }, [userData]);

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Navigate replace to="/shop" />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
