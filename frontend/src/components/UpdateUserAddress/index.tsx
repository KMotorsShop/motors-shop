import {
  Box,
  BoxButton,
  BoxClose,
  Container,
  DivForm,
  InputSmall,
} from "./styles";
import { RiCloseLine } from "react-icons/ri";
import { useContext } from "react";
import { AuthContext } from "../../context/userContext";
import {
  Form,
  Input,
  InputWrapper,
  InputWrapperUpdate,
  SmallInput,
} from "../../styles/Form";
import { Label } from "../../styles/Texts";
import { BaseButton, BrandButton } from "../../styles/Buttons";
import { useForm } from "react-hook-form";
import { IUser } from "../../interface/interfaces";

const UpdateUserAddress = () => {
  const { setIsModalUpdateAddress, updateUser } = useContext(AuthContext);

  const { handleSubmit, register } = useForm<IUser>({});

  return (
    <Container>
      <Box>
        <BoxClose>
          <p>Editar endereço</p>
          <button>
            <RiCloseLine onClick={() => setIsModalUpdateAddress(false)} />
          </button>
        </BoxClose>
        <p>Infomações de endereço</p>
        <Form onSubmit={handleSubmit(updateUser)}>
          <InputWrapper>
            <Label htmlFor="zipCode">CEP</Label>
            <Input
              placeholder="00000.000"
              id="zipCode"
              {...register("zipCode")}
            ></Input>
          </InputWrapper>
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
          <InputWrapperUpdate>
            <Label htmlFor="street">Rua</Label>
            <Input
              id="street"
              {...register("street")}
              placeholder="Rua do Paraná"
            ></Input>
          </InputWrapperUpdate>
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
          <BoxButton>
            <BaseButton
              type="button"
              variant="negative"
              onClick={() => setIsModalUpdateAddress(false)}
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

export default UpdateUserAddress;
