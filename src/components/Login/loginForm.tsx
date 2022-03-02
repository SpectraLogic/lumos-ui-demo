import * as React from 'react';
import styled from 'styled-components';
import { Grid, Container, TextField, Button } from '@mui/material';
import  SpectraLogo  from '../../assets/sllogo.gif'; 

export interface ILoginFormProps {
}

const LoginFormContainer = styled.div`
  position: relative;
  background-color: #fff;
  width: 465px;
  height: 550px;
  border-radius: 16px;
  padding: 25px 25px 0px 0px;
`;

const LogoImg = styled.img`
  width: 165px;
`;

const Form = styled(Container)`
  padding-left: 75px;
  padding-right: 75px;
  position: absolute;
  top: 50%;
  transform: translate(0, -40%);
`;

const LoginInput = styled(TextField)`
  width: 100%;
`;

const LoginButton = styled(Button)`
  width: 100%;
  height: 55px;
`;

export function LoginForm (props: ILoginFormProps) {
  return (
    <LoginFormContainer>
        <Container>
          <LogoImg src={ SpectraLogo }/>
        </Container>
        <Form>
          <LoginInput label='Username' variant='outlined' />
          <br/>
          <br/>
          <br/>
          <br/>
          <LoginInput label='Password' variant='outlined' />
          <br/>
          <br/>
          <br/>
          <LoginButton variant='contained'> Login </LoginButton>
        </Form>
    </LoginFormContainer>
  );
}
