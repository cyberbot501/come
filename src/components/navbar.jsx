import { Link } from "react-router-dom";
import { useUser } from "../store";

export default function Navbar() {
  const { user } = useUser();
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src="/asset/imges/empyrean logo 1.svg" alt="" />
        </div>
        <ul className="navlist">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About US</Link>
          </li>
          <li>
            <Link to="/premium">Premium Services</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="bx bx-cart bx-sm" style={{ cursor: "pointer" }}></i>
            </Link>
          </li>
          <li>
            <p className="username" id="username">
              {user?.name}
            </p>
          </li>
        </ul>

              <i className="bx bx-menu bx-sm menu" style={{ cursor: "pointer" }}></i>
      </div>
    </>
  );
}
