import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../store";

export default function Register() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const { setUser } = useUser();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const register = (name, email, password) => {
    const requestData = {
      name,
      email,
      password,
      password_confirmation: password,
      cart: {},
    };

    axios
      .post(
        "https://empyrean.washrytelaundry.com.ng/api/v1/auth/register",
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
        let message = err?.response?.data?.message || "An error occured";
        setError(message);
        setLoading(false);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    register(
      nameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value
    );
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header">
                <h1>
                  <b>Sign Up</b>
                </h1>
                <p>Enter your details</p>

                <div id="error" style={{ color: "red", fontSize: "12px" }}>
                  {error}
                </div>

                <div className="card-body">
                  <form onSubmit={(e) => handleRegister(e)}>
                    <div className="mb-3">
                      <label htmlFor="fullname" className="form-label">
                        Fullname
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        placeholder="Brendan Jones"
                        required
                        ref={nameRef}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="xylu"
                        required
                        ref={emailRef}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        autoComplete="on"
                        // id="password"
                        placeholder="Enter your password"
                        required
                        ref={passwordRef}
                      />
                      <p style={{ color: "red" }} id="error-message"></p>
                    </div>
                    <div className="btn-align">
                      <button
                        disabled={loading}
                        type="submit"
                        className="btn"
                        id="signupForm"
                      >
                        {loading ? "Loading..." : "Sign up"}
                      </button>
                    </div>
                    <br />
                    <p>
                      Already have an account?
                      <b>
                        <a href="/login" className="link">
                          LOGIN
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
