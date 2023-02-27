import * as yup from "yup";
import { useForm } from "react-hook-form";
import {
  FieldSet,
  Form,
  Input,
  InputWrapper,
  OptionButtons,
  TextArea,
} from "../../styles/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormError, Label, Legend, Text } from "../../styles/Texts";
import { BaseButton, BrandButton, OutlineButton } from "../../styles/Buttons";
import { Flex } from "../../styles/Containers";
import { useState } from "react";

interface AnnounceFormProps {
  schema: yup.AnyObject;
  onSubmitFunction: (data: any) => void;
}

type AnnounceTypes = "sell" | "auction";
type VehicleTypes = "car" | "motorbike";

const AnnounceForm = ({ schema, onSubmitFunction }: AnnounceFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [adType, setAdType] = useState<AnnounceTypes>("sell");
  const [vehicleType, setVehicleType] = useState<VehicleTypes>("car");

  const [moreInputs, setMoreInputs] = useState(2);
  const [inputsQtd, setInputsQtd] = useState([1, 2]);

  const handleSubmitFunction = (data: any) => {
    data = { ...data, type: adType };
    onSubmitFunction(data);
  };

  return (
    <Form onSubmit={handleSubmit(handleSubmitFunction)}>
      <FieldSet>
        <Legend>Tipo de Anúncio</Legend>
        <OptionButtons>
          {adType === "sell" ? (
            <>
              <BrandButton onClick={() => setAdType("sell")}>Venda</BrandButton>
              <OutlineButton
                type="button"
                onClick={() => setAdType("auction")}
                variant="greyLight"
              >
                Leilão
              </OutlineButton>
            </>
          ) : (
            <>
              <OutlineButton
                type="button"
                onClick={() => setAdType("sell")}
                variant="greyLight"
              >
                Venda
              </OutlineButton>
              <BrandButton onClick={() => setAdType("auction")}>
                Leilão
              </BrandButton>
            </>
          )}
        </OptionButtons>
      </FieldSet>

      <FieldSet>
        <Legend>Informações do Veículo</Legend>

        <InputWrapper>
          <Label htmlFor="name">Título</Label>
          <Input {...register("name")} placeholder="Digitar Título" />
          <FormError>{errors.name?.message as string}</FormError>
        </InputWrapper>

        <FieldSet type="flex">
          <Flex>
            <InputWrapper>
              <Label htmlFor="year">Ano</Label>
              <Input
                {...register("year")}
                type="number"
                placeholder="Digitar ano"
              />
              <FormError>{errors.year?.message as string}</FormError>
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor="km">Quilometragem </Label>
              <Input {...register("km")} placeholder="0" />
              <FormError>{errors.km?.message as string}</FormError>
            </InputWrapper>
          </Flex>
          <InputWrapper>
            <Label htmlFor="price">Preço</Label>
            <Input {...register("price")} placeholder="Digitar Preço" />
            <FormError>{errors.price?.message as string}</FormError>
          </InputWrapper>
        </FieldSet>
        <InputWrapper>
          <Label htmlFor="description">Descrição</Label>
          <TextArea
            {...register("description")}
            placeholder="Digitar descrição"
          />
          <FormError>{errors.description?.message as string}</FormError>
        </InputWrapper>
      </FieldSet>
      <FieldSet>
        <Legend>Tipo de veículo</Legend>
        <OptionButtons>
          {vehicleType === "car" ? (
            <>
              <BrandButton type="button" onClick={() => setVehicleType("car")}>
                Carro
              </BrandButton>
              <OutlineButton
                type="button"
                onClick={() => setVehicleType("motorbike")}
                variant="greyLight"
              >
                Moto
              </OutlineButton>
            </>
          ) : (
            <>
              <OutlineButton
                type="button"
                onClick={() => setVehicleType("car")}
                variant="greyLight"
              >
                Carro
              </OutlineButton>
              <BrandButton
                type="button"
                onClick={() => setVehicleType("motorbike")}
              >
                Moto
              </BrandButton>
            </>
          )}
        </OptionButtons>
        <InputWrapper>
          <Label>Imagem da Capa</Label>
          <Input
            {...register("capeImage")}
            placeholder="Inserir URL da imagem"
          />
          <FormError>{errors.capeImage?.message as string}</FormError>
        </InputWrapper>
        <InputWrapper>
          <Label>1º Imagem da Galeria</Label>
          <Input {...register("img1")} placeholder="Inserir URL da imagem" />
          <FormError>{errors.img1?.message as string}</FormError>
        </InputWrapper>
        <InputWrapper>
          <Label>2º Imagem da Galeria</Label>
          <Input {...register("img2")} placeholder="Inserir URL da imagem" />
          <FormError>{errors.img2?.message as string}</FormError>
        </InputWrapper>
        {moreInputs <= 6 &&
          inputsQtd.map((input) => {
            if (input > 2) {
              return (
                <InputWrapper key={input}>
                  <Label htmlFor="">{input}ª imagem da galeria</Label>
                  <Input
                    placeholder="Inserir URL da imagem"
                    {...register(`img${input}`)}
                  />
                  <FormError>
                    {errors[`img${input}`]?.message as string}
                  </FormError>
                </InputWrapper>
              );
            }
          })}
        <BrandButton
          variant="opacity"
          onClick={() => {
            if (moreInputs == 6) {
              setMoreInputs(2);
              setInputsQtd([1, 2]);
            } else {
              setMoreInputs(moreInputs + 1);
              setInputsQtd([...inputsQtd, moreInputs + 1]);
            }
          }}
        >
          {moreInputs == 6
            ? "Inserir somente duas imagens"
            : "Adicionar campo para imagem da galeria"}
        </BrandButton>
      </FieldSet>
      <Flex justify="end">
        <BaseButton type="button" variant="negative">
          Cancelar
        </BaseButton>
        <BrandButton type="submit">Criar anúncio</BrandButton>
      </Flex>
    </Form>
  );
};

export default AnnounceForm;
