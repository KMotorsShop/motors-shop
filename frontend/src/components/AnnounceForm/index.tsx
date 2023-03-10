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
import { formatCurrency } from "../../tools/formatters";

interface AnnounceFormProps {
  schema: yup.AnyObject;
  onSubmitFunction: (data: any) => void;
  closeContainingModal: () => void;
}

type AnnounceTypes = "sell" | "auction";
type VehicleTypes = "Carro" | "Moto";

const AnnounceForm = ({
  schema,
  onSubmitFunction,
  closeContainingModal,
}: AnnounceFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [adType, setAdType] = useState<AnnounceTypes>("sell");
  const [vehicleType, setVehicleType] = useState<VehicleTypes>("Carro");

  const [moreInputs, setMoreInputs] = useState(2);
  const [inputsQtd, setInputsQtd] = useState([1, 2]);

  const handleSubmitFunction = (data: any) => {
    data = { ...data, type: vehicleType };
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
              <Input {...register("km")} type="number" placeholder="0" />
              <FormError>{errors.km?.message as string}</FormError>
            </InputWrapper>
          </Flex>
          <InputWrapper>
            <Label htmlFor="price">Preço</Label>
            <Input
              {...register("price")}
              onChange={(e) => {
                e.target.value = formatCurrency(e.target.value);
              }}
              placeholder="Digitar Preço"
            />
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
          {vehicleType === "Carro" ? (
            <>
              <BrandButton
                type="button"
                onClick={() => setVehicleType("Carro")}
              >
                Carro
              </BrandButton>
              <OutlineButton
                type="button"
                onClick={() => setVehicleType("Moto")}
                variant="greyLight"
              >
                Moto
              </OutlineButton>
            </>
          ) : (
            <>
              <OutlineButton
                type="button"
                onClick={() => setVehicleType("Carro")}
                variant="greyLight"
              >
                Carro
              </OutlineButton>
              <BrandButton type="button" onClick={() => setVehicleType("Moto")}>
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
          type="button"
          style={{ marginTop: 24 }}
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
        <BaseButton
          type="reset"
          variant="negative"
          onClick={closeContainingModal}
        >
          Cancelar
        </BaseButton>
        <BrandButton type="submit">Criar anúncio</BrandButton>
      </Flex>
    </Form>
  );
};

export default AnnounceForm;
