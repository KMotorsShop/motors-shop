import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import ModalSucess from "../../components/ModalSucess";
import { AuthContext } from "../../context/userContext";
import { IUser } from "../../interface/interfaces";
import { BrandButton, OutlineButton } from "../../styles/Buttons";
import {
  Input,
  InputWrapperRegister,
  SmallInput,
  TextArea,
} from "../../styles/Form";
import { FormError, Label } from "../../styles/Texts";
import { schemaRegister } from "../../validator/registerUser";
import {
  BrandButtonForm,
  Container,
  ContainerForm,
  DivForm,
  InputSmall,
} from "./styles";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({ resolver: yupResolver(schemaRegister) });

  const { onRegister, setType, isModalSucess } = useContext(AuthContext);

  return (
    <>
      <Header />
      <Container>
        <ContainerForm onSubmit={handleSubmit(onRegister)}>
          <h1>Cadastro</h1>
          <p>Infomações pessoais</p>
          <InputWrapperRegister>
            <Label htmlFor="name">Nome</Label>
            <Input
              {...register("name")}
              id="name"
              placeholder="Ex: Samuel Leão"
            />
            {errors.name?.message && (
              <FormError>{errors.name?.message as string}</FormError>
            )}
          </InputWrapperRegister>
          <InputWrapperRegister>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Ex: samuel@kenzie.com.br"
              {...register("email")}
            />
            {errors.email?.message && (
              <FormError>{errors.email?.message as string}</FormError>
            )}
          </InputWrapperRegister>
          <InputWrapperRegister>
            <Label htmlFor="cpf">CPF</Label>
            <Input
              {...register("cpf")}
              id="cpf"
              placeholder="000.000.000-00"
              type="number"
            />
            {errors.cpf?.message && (
              <FormError>{errors.cpf?.message as string}</FormError>
            )}
          </InputWrapperRegister>
          <InputWrapperRegister>
            <Label htmlFor="cellphone">Celular</Label>
            <Input
              {...register("cellphone")}
              id="cellphone"
              placeholder="(DDD) 90000-0000"
            />
            {errors.cellphone?.message && (
              <FormError>{errors.cellphone?.message as string}</FormError>
            )}
          </InputWrapperRegister>
          <InputWrapperRegister>
            <Label htmlFor="birthdate">Data de Nascimento</Label>
            <Input
              {...register("birthdate")}
              id="birthdate"
              type="date"
              placeholder="00/00/00"
            />
            {errors.birthdate?.message && (
              <FormError>{errors.birthdate?.message as string}</FormError>
            )}
          </InputWrapperRegister>
          <InputWrapperRegister>
            <Label htmlFor="description">Descrição</Label>
            <TextArea
              {...register("description")}
              placeholder="Digitar descrição"
            />
            {errors.description?.message && (
              <FormError>{errors.description?.message as string}</FormError>
            )}
          </InputWrapperRegister>

          <p>Infomações de endereço</p>
          <InputWrapperRegister>
            <Label htmlFor="zipCode">CEP</Label>
            <Input
              {...register("zipCode")}
              id="zipCode"
              placeholder="00000.000"
              type="number"
            />
            {errors.zipCode?.message && (
              <FormError>{errors.zipCode?.message as string}</FormError>
            )}
          </InputWrapperRegister>

          <DivForm>
            <InputSmall>
              <Label htmlFor="state">Estado</Label>
              <SmallInput
                {...register("state")}
                id="state"
                placeholder="Digitar Estado"
              />
            </InputSmall>
            <InputSmall>
              <Label htmlFor="city">Cidade</Label>
              <SmallInput
                {...register("city")}
                id="city"
                placeholder="Digitar Cidade"
              />
            </InputSmall>
          </DivForm>
          <InputWrapperRegister>
            <Label htmlFor="street">Rua</Label>
            <Input
              {...register("street")}
              id="street"
              placeholder="Digitar Rua"
            />
            {errors.street?.message && (
              <FormError>{errors.street?.message as string}</FormError>
            )}
          </InputWrapperRegister>

          <DivForm>
            <InputSmall>
              <Label htmlFor="number">Número</Label>
              <SmallInput
                {...register("number")}
                id="number"
                placeholder="Digitar Número"
                type="number"
              />
            </InputSmall>
            <InputSmall>
              <Label htmlFor="complement">Complemento</Label>
              <SmallInput
                {...register("complement")}
                id="complement"
                placeholder="Ex: apart 307"
              />
            </InputSmall>
          </DivForm>
          <h5>Tipo de conta</h5>
          <DivForm>
            <BrandButton type="button" onClick={() => setType("Comprador")}>
              Comprador
            </BrandButton>
            <OutlineButton
              type="button"
              onClick={() => setType("Anunciante")}
              variant="greyLight"
            >
              Anunciante
            </OutlineButton>
          </DivForm>
          <InputWrapperRegister>
            <Label htmlFor="password">Senha</Label>
            <Input
              {...register("password")}
              type="password"
              id="password"
              placeholder="Digitar Senha"
            />
            {errors.password?.message && (
              <FormError>{errors.password?.message as string}</FormError>
            )}
          </InputWrapperRegister>
          <InputWrapperRegister>
            <Label htmlFor="">Confirmar Senha</Label>
            <Input
              {...register("ConfirmedPassword")}
              type="password"
              placeholder="Confirmar Senha"
            />
            {errors.ConfirmedPassword?.message && (
              <FormError>
                {errors.ConfirmedPassword?.message as string}
              </FormError>
            )}
          </InputWrapperRegister>

          <BrandButtonForm className="buttonConfirm" type="submit">
            Finalizar cadastro
          </BrandButtonForm>
        </ContainerForm>
      </Container>
      <Footer />
      {isModalSucess && <ModalSucess />}
    </>
  );
};

export default Register;
