import React, { useContext, useRef, useState } from "react";
// import coverImage from "../../assets/homeCarousel/02.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";
import { useTitle } from "../../components/hooks/useTitle";

const Login = () => {
  useTitle("Login");
  const emailRef = useRef();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const { logIn, googleSignIn, gitHubSignIn, resetPassword } =
    useContext(AuthContext);
  const from = location.state?.from?.pathname || "/";
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          icon: "success",
          title: "Successful",
          text: "User has been created successfully!",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubSignIn = () => {
    gitHubSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handlePasswordReset = () => {
    const email = emailRef.current;
    if (!email) {
      alert("provide email");
      return;
    }
    resetPassword()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen mb-20">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1
              style={{ fontFamily: "'Montserrat', cursive" }}
              className="text-5xl  mb-5 font-bold text-primary mt-10 text-center pb-5 "
            >
              PLEASE LOGIN NOW!
            </h1>
          </div>
          <div className="glass card flex-shrink-0 w-full max-w-sm shadow-2xl ">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-900">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered glass  text-gray-900"
                  required
                />
              </div>

              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-gray-900">Password</span>
                </label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Enter your password"
                  className="input input-bordered  glass  text-gray-900"
                  name="password"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-12 right-0 flex items-center px-2 text-gray-300"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <AiFillEyeInvisible className="h-5 w-5 mt-7" />
                  ) : (
                    <AiFillEye className="h-5 w-5 mt-7" />
                  )}
                </button>
              </div>
              <div className="form-control relative ">
                <label className="label ">
                  <a
                    onClick={handlePasswordReset}
                    href="#"
                    className="label-text-alt link link-hover text-gray-900"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>

              <p className="text-error ml-2">{error}</p>

              <div className="form-control mt-4">
                <button className="btn btn-primary mb-3 ">Login</button>
              </div>
              <small>
                <p className="text-gray-900">
                  Have no account? Please
                  <Link to="/register">
                    <span className="mx-1 underline text-primary">
                      Register
                    </span>
                  </Link>
                  first
                </p>
              </small>
            </form>
            <div className="flex mx-auto gap-5 mb-5">
              <button
                onClick={handleGoogleSignIn}
                className="btn bg-red-700 text-white mb-3"
              >
                <FaGoogle className="mx-2 text-lg text-white" />
                Google
              </button>
              <button
                onClick={handleGithubSignIn}
                className="btn bg-black text-white "
              >
                <FaGithub className="mx-2 text-lg text-white" />
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
