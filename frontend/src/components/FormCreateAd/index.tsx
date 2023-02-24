import * as yup from "yup";
import { useForm } from "react-hook-form";
import {
  FieldSet,
  Form,
  Input,
  InputWrapper,
  OptionButtons,
  RadioInput,
  TextArea,
} from "../../styles/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Label, Legend } from "../../styles/Texts";
import { BrandButton, OutlineButton } from "../../styles/Buttons";
import { Flex } from "../../styles/Containers";

const onSubmitFunction = (data: any) => {
  console.log(data);
};

const FormCreateAd = () => {
  const { handleSubmit, register } = useForm();
  return (
    <Form onSubmit={handleSubmit(onSubmitFunction)}>
      <FieldSet>
        <Legend>Tipo de Anúncio</Legend>
        <OptionButtons>
          <RadioInput type="radio" value="sell" {...register("type")} />
          <Label htmlFor="type">Venda</Label>
          <RadioInput type="radio" value="auction" {...register("type")} />
          <Label htmlFor="type">Leilão</Label>
        </OptionButtons>
      </FieldSet>
      <FieldSet>
        <Legend>Informações do Veículo</Legend>
        <InputWrapper>
          <Label htmlFor="name">Título</Label>
          <Input {...register("name")} placeholder="Digitar Título" />
        </InputWrapper>
        <FieldSet type="flex">
          <Flex>
            <InputWrapper>
              <Label htmlFor="year">Ano</Label>
              <Input {...register("year")} placeholder="Digitar ano" />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="km">Quilometragem</Label>
              <Input {...register("km")} placeholder="0" />
            </InputWrapper>
          </Flex>
          <InputWrapper>
            <Label htmlFor="price">Preço</Label>
            <Input {...register("price")} placeholder="Digitar Preço" />
          </InputWrapper>
        </FieldSet>
        <InputWrapper>
          <Label htmlFor="description">Descrição</Label>
          <TextArea
            {...register("description")}
            placeholder="Digitar descrição"
          />
        </InputWrapper>
      </FieldSet>
      <FieldSet>
        <Legend>Tipo de veículo</Legend>
        <OptionButtons>
          <BrandButton>Carro</BrandButton>
          <OutlineButton variant="greyLight">Moto</OutlineButton>
        </OptionButtons>
        <InputWrapper>
          <Label>Imagem da Capa</Label>
          <Input placeholder="Inserir URL da imagem" />
        </InputWrapper>
        <InputWrapper>
          <Label>1º Imagem da Galeria</Label>
          <Input placeholder="Inserir URL da imagem" />
        </InputWrapper>
      </FieldSet>
      <BrandButton type="submit" />
    </Form>
  );
};

export default FormCreateAd;
