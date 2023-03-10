import React, { useEffect } from "react";
import "./style.css";

import { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./FirebaseConfig";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { message } from "antd";

function Loginform() {
  const [google, setGoogle] = useState("");
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/auth");
    }
  }, []);

  const handleGoogle = () => {
    signInWithPopup(auth, provider).then((data) => {
      setGoogle(data.user);
      localStorage.setItem("name", data.user.displayName);
      localStorage.setItem("token", data._tokenResponse.oauthAccessToken);
      localStorage.setItem("datas", data.user.photoURL);
      if (localStorage.getItem("token")) {
        navigate("/auth");
        console.log(data.user.photoURL);
      }
    });
  };

  const handleapicall = (e) => {
    const key = "updatable";

    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    
  };

  return (
    <div>
      {contextHolder}
      <form>
        <input
          class="form-control "
          type="text"
          placeholder="USERNAME"
          aria-label=".form-control-lg example"
        />
        <input
          class="form-control "
          type="text"
          placeholder="PASSWORD"
          aria-label=".form-control-lg example"
        />

        <div class="container text-center">
          <div class="row btncontainer">
            <div class="col">
              <button type="button" class="btn btn-outline-primary">
                Login
              </button>
            </div>
            <div class="col">
              <GoogleButton
                className="googlelogin"
                buttonText="Login"
                onClick={(e) => {
                  handleGoogle();
                  handleapicall();
                }}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Loginform;
