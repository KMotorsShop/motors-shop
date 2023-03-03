import { Box, BoxButton, BoxClose, Container } from "./styles";
import { RiCloseLine } from "react-icons/ri";
import { useContext } from "react";
import { AuthContext } from "../../context/userContext";
import { Form, Input, InputWrapper, TextArea } from "../../styles/Form";
import { Label } from "../../styles/Texts";
import { BaseButton, BrandButton } from "../../styles/Buttons";
import { useForm } from "react-hook-form";
import { IUser } from "../../interface/interfaces";

const UpdateUser = () => {
  const { setIsModalUpdate, updateUser } = useContext(AuthContext);

  const { handleSubmit, register } = useForm<IUser>();

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
        <Form onSubmit={handleSubmit(updateUser)}>
          <InputWrapper>
            <Label htmlFor="name">Nome</Label>
            <Input
              placeholder="Samuel Leão Silva"
              id="name"
              {...register("name")}
            ></Input>
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="samuel@kenzie.com.br"
              {...register("email")}
            ></Input>
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="cpf">CPF</Label>
            <Input
              placeholder="900.880.090-00"
              {...register("cpf")}
              id="cpf"
            ></Input>
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="cellphone">Celular</Label>
            <Input
              {...register("cellphone")}
              id="cellphone"
              placeholder="(084) 90909-9092"
            ></Input>
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="birthdate">Data de nascimento</Label>
            <Input
              type="date"
              {...register("birthdate")}
              id="birthdate"
            ></Input>
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="description">Descrição</Label>
            <TextArea {...register("description")}></TextArea>
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
