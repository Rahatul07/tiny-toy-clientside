import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Swal from "sweetalert2";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../contexts/AuthProvider";

const Register = () => {
  const {
    auth,
    setUser,
    createUser,
    setLoading,
    logOut,
    gitHubSignIn,
    googleSignIn,
  } = useContext(AuthContext);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleSignUp = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    const photoUrl = form.photo_url.value;

    if (password !== confirm) {
      setError("Your password does not match");
      return;
    } else if (!/^(?=.*[0-9]).*$/.test(password)) {
      setError("Password must contain at least one Digit.");
      return;
    }
    createUser(email, password)
      .then((result) => {
        logOut();
        navigate("/login");
        setLoading(true);

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            setUser(result.user);
            setLoading(false);
          })
          .catch((error) => {
            setError(error.code);
          })
          .catch((error) => {
            console.log(error);
            setError(error);
          });
        Swal.fire({
          icon: "success",
          title: "Successful",
          text: "User has been created successfully!",
        });
        form.reset();
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(error);
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
  return (
    <div>
      <div className="hero min-h-screen  ">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold  text-primary my-5">
              Please Register now!
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  glass">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control ">
                <label className="label ">
                  <span className="label-text text-gray-600">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered glass  text-gray-600 "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-600">Photo Url</span>
                </label>
                <input
                  type="url"
                  name="photo_url"
                  placeholder="Place your photo url"
                  className="input input-bordered glass  text-gray-600"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-600">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered glass  text-gray-600"
                  required
                />
              </div>

              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-gray-600">Password</span>
                </label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Enter your password"
                  className="input input-bordered  glass  text-gray-600"
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
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-gray-600 ">
                    Confirm Password
                  </span>
                </label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="confirm password"
                  className="input input-bordered glass  text-gray-600"
                  name="confirm"
                />
                <button
                  type="button"
                  className="absolute inset-y-12 right-0 flex items-center px-2 bg-primary text-gray-300"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <AiFillEyeInvisible className="h-5 w-5 mt-7" />
                  ) : (
                    <AiFillEye className="h-5 w-5 mt-7" />
                  )}
                </button>
              </div>

              <p className="text-error ml-2">{error}</p>

              <div className="form-control mt-6">
                <button className="btn btn-primary mb-3 ">Register</button>
              </div>
              <small>
                <p className="text-gray-600">
                  Already have an account? Please
                  <Link to="/login">
                    <span className="mx-1 underline text-primary">Login</span>
                  </Link>
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

export default Register;
