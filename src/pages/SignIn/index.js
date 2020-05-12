import React, { useRef, useCallback } from "react";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import logo from "../../assets/logo.png";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as Yup from "yup";
import { Form } from "@unform/web";

import { Container, Content, Background } from "./styles";

const SignIn = () => {
  const formRef = useRef(null);
  const handleSubmit = useCallback(async (data) => {
    try {
      formRef.current.setErrors({});

      console.log(data);

      const schema = Yup.object().shape({
        email: Yup.string()
          .required("E-mail obrigatório!")
          .email("Informe um e-mail em um formato válido!"),
        password: Yup.string().required("Senha obrigatória!"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);
      if (err instanceof Yup.ValidationError) {
        const errosMessages = {};

        err.inner.forEach((error) => {
          errosMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errosMessages);

        return;
      }
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={logo} alt="Sua Logo" style={{ width: 250 }} />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu Logon</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>

          <a href="/">Esqueci minha senha</a>
        </Form>

        <a href="/signup">
          <FiLogIn />
          Criar Conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
