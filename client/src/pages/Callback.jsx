import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const authCode = urlParams.get("auth_code");

    if (authCode) {
      // You can send authCode to your backend to exchange it for an access token
      console.log("Auth Code:", authCode);
      // Example: localStorage.setItem("auth_code", authCode);
      navigate("/dashboard"); // or redirect to your dashboard
    } else {
      console.error("No auth_code found");
    }
  }, [navigate]);

  return <div>Processing login...</div>;
};

export default Callback;
