import * as React from 'react';
import styled from 'styled-components';
import FlatironsImg from '../../assets/flatirons.jpg';
import { LoginForm } from './loginForm';
import { motion, AnimatePresence } from 'framer-motion';

export interface ILoginProps {
  onLogin: () => void
}

const LoginBackground = styled( motion.div )`
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
    <AnimatePresence>
      <LoginBackground
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: 'tween', duration: 1 }}>
        <LoginFormContainer>
          <LoginForm onLogin={ props.onLogin } />
        </LoginFormContainer>
      </LoginBackground>
    </AnimatePresence>
    
  );
}

export { Login };