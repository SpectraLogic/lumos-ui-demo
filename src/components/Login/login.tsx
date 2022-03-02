import * as React from 'react';
import styled from 'styled-components';
import FlatironsImg from '../../assets/flatirons.jpg';
import { LoginForm } from './loginForm';

export interface ILoginProps {
}

const LoginBackground = styled.div`
  height: 100vh;
  background: url(${FlatironsImg});
  background-size: cover;
  position: relative;

`
const LoginFormContainer = styled.div`
  margin-left: 115px;
  position: absolute;
  margin-left: 100px;
  top: 50%;
  transform: translate(0, -50%);
`;


function Login (props: ILoginProps) {
  return (
    <LoginBackground>
      <LoginFormContainer>
        <LoginForm />
      </LoginFormContainer>
    </LoginBackground>
  );
}

export { Login };