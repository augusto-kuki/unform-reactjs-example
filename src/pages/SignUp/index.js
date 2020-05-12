import React, { useCallback, useRef } from "react";
import {
  FiArrowLeft,
  FiMail,
  FiUser,
  FiFileText,
  FiPhoneCall,
  FiLock,
} from "react-icons/fi";

import { Form } from "@unform/web";

import * as Yup from "yup";

import logo from "../../assets/logo.png";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { cpfCnpjMask, telefoneMask } from "../../utils/Regex";

import { Container, Content, Background } from "./styles";

const SignUp = () => {
  const formRef = useRef(null);
  const handleSubmit = useCallback(async (data) => {
    try {
      formRef.current.setErrors({});

      console.log(data);

      const schema = Yup.object().shape({
        nome: Yup.string().required("Obrigatório para o cadastro!"),
        email: Yup.string()
          .required("Obrigatório para o cadastro!")
          .email("Informe um e-mail em um formato válido!"),
        password: Yup.string().min(6, "A senha minima 6 digitos!"),
        cpf: Yup.string()
          .required()
          .matches(cpfCnpjMask, "Informe um CPF válido!"),
        telefone: Yup.string()
          .required()
          .matches(telefoneMask, "Informe um telefone válido!"),
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
      <Background />
      <Content>
        <img src={logo} alt="Sua Logo" style={{ width: 250 }} />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Cadastre-se</h1>
          <Input name="nome" icon={FiUser} placeholder="Nome" />
          <Input name="cpf" icon={FiFileText} placeholder="CPF" />
          <Input name="telefone" icon={FiPhoneCall} placeholder="Telefone" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="/">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
