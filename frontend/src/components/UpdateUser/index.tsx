import { Box, BoxButton, BoxClose, Container } from "./styles";
import { RiCloseLine } from "react-icons/ri";
import { useContext } from "react";
import { AuthContext } from "../../context/userContext";
import { Form, Input, InputWrapper, TextArea } from "../../styles/Form";
import { FormError, Label } from "../../styles/Texts";
import { BaseButton, BrandButton } from "../../styles/Buttons";
import { useForm } from "react-hook-form";
import { IUserUpdate } from "../../interface/interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaUpdate } from "../../validator/updateUser";

const UpdateUser = () => {
  const { setIsModalUpdate } = useContext(AuthContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IUserUpdate>({ resolver: yupResolver(schemaUpdate) });

  const test = (data: IUserUpdate) => {
    console.log(data);
  };

  return (
    <Container>
      <Box>
        <BoxClose>
          <p>Editar perfil</p>
          <button>
            <RiCloseLine onClick={() => setIsModalUpdate(false)} />
          </button>
        </BoxClose>
        <p>Infomações pessoais</p>
        <Form onSubmit={handleSubmit(test)}>
          <InputWrapper>
            <Label htmlFor="name">Nome</Label>
            <Input
              placeholder="Samuel Leão Silva"
              id="name"
              {...register("name")}
            ></Input>
            {errors.name?.message && (
              <FormError>{errors.name?.message as string}</FormError>
            )}
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="samuel@kenzie.com.br"
              {...register("email")}
            ></Input>
            {errors.email?.message && (
              <FormError>{errors.email?.message as string}</FormError>
            )}
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="cpf">CPF</Label>
            <Input
              placeholder="900.880.090-00"
              {...register("cpf")}
              id="cpf"
            ></Input>
            {errors.cpf?.message && (
              <FormError>{errors.cpf?.message as string}</FormError>
            )}
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="cellphone">Celular</Label>
            <Input
              {...register("cellphone")}
              id="cellphone"
              placeholder="(084) 90909-9092"
            ></Input>
            {errors.cellphone?.message && (
              <FormError>{errors.cellphone?.message as string}</FormError>
            )}
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="birthdate">Data de nascimento</Label>
            <Input
              type="date"
              {...register("birthdate")}
              id="birthdate"
            ></Input>
            {errors.birthdate?.message && (
              <FormError>{errors.birthdate?.message as string}</FormError>
            )}
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="description">Descrição</Label>
            <TextArea {...register("description")}></TextArea>
            {errors.description?.message && (
              <FormError>{errors.description?.message as string}</FormError>
            )}
          </InputWrapper>
          <BoxButton>
            <BaseButton
              type="button"
              variant="negative"
              onClick={() => setIsModalUpdate(false)}
            >
              Cancelar
            </BaseButton>
            <BrandButton type="submit">Salvar alterações</BrandButton>
          </BoxButton>
        </Form>
      </Box>
    </Container>
  );
};

export default UpdateUser;
