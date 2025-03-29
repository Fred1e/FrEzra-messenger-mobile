import React, { useState } from "react";
import { signInWithPhoneNumber } from "firebase/auth"; // Firebase auth
import { auth } from "../firebase"; // Firebase config
import "./Login.css";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState(null);

  const sendOTP = async () => {
    const recaptcha = new window.RecaptchaVerifier("recaptcha-container");
    const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
    setVerificationId(confirmation.verificationId);
  };

  const verifyOTP = async () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, otp);
    await auth.signInWithCredential(credential);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input type="text" placeholder="Enter phone number" onChange={(e) => setPhone(e.target.value)} />
      <button onClick={sendOTP}>Send OTP</button>

      {verificationId && (
        <>
          <input type="text" placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)} />
          <button onClick={verifyOTP}>Verify</button>
        </>
      )}

      <div id="recaptcha-container"></div>
    </div>
  );
};

export default Login;
