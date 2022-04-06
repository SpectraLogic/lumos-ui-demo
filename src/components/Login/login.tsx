import * as React from 'react';
import styled from 'styled-components';
import FlatironsImg from '../../assets/flatirons.jpg';
import { LoginForm } from './loginForm';
import { motion, AnimatePresence, Variants } from 'framer-motion';

export interface ILoginProps {
  onLogin: () => void
}

const LoginBackground = styled( motion.div )`
  height: 100vh;
  background: url(${FlatironsImg});
  background-size: cover;
  position: relative;

`
const LoginFormContainer = styled( motion.div )`
  margin-left: 115px; 
  position: absolute;
  margin-left: 100px;
  top: 50%;
  transform: translate(0, -50%);
`;

const rootVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.25, duration: 1 } },
  exit: { 
    opacity: 0,
    transition: { type: 'tween', delay: 0.5, duration: 0.66 }
  }
}; 

const loginFormVariants: Variants = {
  hidden: { opacity: 0, y: '-50%', x: '50%' },
  visible: { opacity: 1, y: '-50%', x: '0%', transition: { delay: 1, duration: 1 } },
  exit: { 
    x: '-100vw',
    transition: { type: 'tween', duration: 1 }
  }
}

function Login (props: ILoginProps) {
  return (
    <LoginBackground
    variants={ rootVariants }
    initial='hidden'
    animate='visible'
    exit='exit'>
      <LoginFormContainer
        variants={ loginFormVariants }
        initial='hidden'
        animate='visible'
        exit='exit'>
        <LoginForm onLogin={ props.onLogin } />
      </LoginFormContainer>
    </LoginBackground>
    
  );
}

export { Login };