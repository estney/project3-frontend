import "./LandingPage.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "antd";
import { buttonStyle } from "./styleComponents";
import styled from "styled-components";

const CustomButton = styled(Button)`
  ${buttonStyle}
`;

export default function LandingPage() {
  // import login button from Auth0
  const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
      <CustomButton type="primary" onClick={() => loginWithRedirect()}>
        {" "}
        Log In or Sign up
      </CustomButton>
    );
  };

  // user sign up. push data to backend.
  // collect email (prevent duplicate) when user sign up.
  // only push data to backend if the email is unique.

  return (
    <>
      <div className="landing-container">
        <h1 className="landing-logo">Billboard</h1>
        <div className="landing-text-container">
          <h3 className="landing-text">Where Careers and Priorities Align.</h3>
          <LoginButton />
        </div>
      </div>
    </>
  );
}
