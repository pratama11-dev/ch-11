/* eslint-disable jsx-a11y/img-redundant-alt */
// import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../utils/firebase";
import Link from "next/link";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false)
  // const navigate = useNavigate();

  async function register(e) {
    e.preventDefault()
    if (!name) alert("Please enter name");
    await registerWithEmailAndPassword(name, email, password);
    // setSuccess(true)
    // setTimeout(() => {
    //   navigate('/login')
    // }, 2000)
  };

  return (
    <section className="vh-100">
      <div className="container min-vh-100 d-flex align-items-center justify-content-center">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form className="px-5 px-md-0">
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Register in with</p>
                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                  onClick={signInWithGoogle}
                >
                  <i className="bi bi-google"></i>
                </button>
              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label className="form-label">Full Name</label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="text"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="E-mail Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="form-label">E-mail Address</label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="form-label">Password</label>
              </div>

              <div className="text-center mt-4 py-5">
                <button
                  type="button"
                  className="btn btn-primary btn-lg "
                  style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}
                  onClick={register}
                >
                  Register
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account?
                <Link href="/login" className="link-danger">Login</Link></p>
              </div>

            </form>
          </div>
        </div>
      </div>
      <div
        className="mt-auto d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2022. All rights reserved.
        </div>

        <div>
          <Link href="#!" className="text-white me-4">
            <i className="bi bi-facebook"></i>
          </Link>
          <Link href="#!" className="text-white me-4">
            <i className="bi bi-twitter"></i>
          </Link>
          <Link href="#!" className="text-white me-4">
            <i className="bi bi-google"></i>
          </Link>
          <Link href="#!" className="text-white">
            <i className="bi bi-linkedin"></i>
          </Link>
        </div>
      </div>
    </section>

  );
}
export default Register;
