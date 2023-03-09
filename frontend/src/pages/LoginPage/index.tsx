import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import { AuthContext } from "../../context/AuthContext";
import { BrandButton } from "../../styles/Buttons";
import { Input } from "../../styles/Form";
import { Heading5, Label } from "../../styles/Texts";
import { Body, DivButton, Login } from "./style";

export const LoginPage = () => {
  const { userLogin } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();

  const onSubmit = (credentials: any) => {
    userLogin(credentials);
  };

  return (
    <>
      <Header></Header>
      <Body>
        <Login>
          <p>
            <Heading5>Login</Heading5>
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <Label>Email</Label>
            </label>
            <Input placeholder="Digitar usuário" {...register("email")}></Input>
            <label>
              <Label>Senha</Label>
            </label>
            <Input
              type="password"
              placeholder="Digitar senha"
              {...register("password")}
            ></Input>
            <span>Esqueci minha senha</span>
            <BrandButton type="submit">Entrar</BrandButton>
          </form>
          <h4>Ainda não possui conta?</h4>
          <Link to={"/"}>
            <DivButton>Cadastrar</DivButton>
          </Link>
        </Login>
      </Body>
      <Footer></Footer>
    </>
  );
};
