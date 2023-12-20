import { useRef, useState } from "react";
import { useUser } from "../../store";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const { setUser } = useUser();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const register = (email, password) => {
    const requestData = {
      email,
      password,
      cart: {}
    };

    axios
      .post(
        "https://empyrean.washrytelaundry.com.ng/api/v1/auth/login",
        requestData
      )
      .then((res) => {
        setUser(res.data.data);
        localStorage.setItem(
          "userData",
          res?.data?.data && JSON.stringify(res.data.data)
        );
        navigate("/shop");
      })
      .catch((err) => {
        let message = err?.response?.data?.error?.message || "An error occured";
        setError(message);
        setLoading(false);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    register(emailRef.current.value, passwordRef.current.value);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header">
                <h1>
                  <b>LOG IN</b>
                </h1>
                <p>
                  Enter your email and password to login into <br />
                  your mail dashboard
                </p>

                <div id="error" style={{ color: "red", fontSize: "12px" }}>
                  {error}
                </div>

                <div className="card-body">
                  <form onSubmit={handleLogin}>
                    <div className="mb-3">
                      <label for="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="xylu"
                        ref={emailRef}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Enter your password"
                        ref={passwordRef}
                      />
                    </div>
                    <div className="btn-align">
                      <button disabled={loading} type="submit" className="btn">
                        {loading ? "Loading..." : "Login"}
                      </button>
                    </div>
                    <br />
                    <p>
                      Don't have an account?
                      <b>
                        <a href="/register" className="link">
                          Sign Up
                        </a>
                      </b>
                    </p>
                    <p>
                      <b>
                        <a href="forgot.html" className="link">
                          Forgot password
                        </a>
                      </b>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
