import Head from "next/head";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { auth, googleProvider } from "../firebase";

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(googleProvider).catch(alert);
  };
  return (
    <Container>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/whatsapp.gif"/>
      </Head>

      <LoginContainer>
        <Logo src="https://img.icons8.com/fluent/240/000000/whatsapp.png" />
        <Button onClick={signIn} variant="outlined">
          Sign In with Google
        </Button>
      </LoginContainer>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

const Logo = styled.img`
  margin-bottom: 50px;
`;
