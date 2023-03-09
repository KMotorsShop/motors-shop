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
import { useEffect, useState } from "react";
import { formatCurrency } from "../../tools/formatters";
import api from "../../services/api";

interface AnnounceFormUpdateProps {
  schema: yup.AnyObject;
  onSubmitFunction: (data: any) => void;
  closeContainingModal: () => void;
  id: string;
}

type AnnounceTypes = "sell" | "auction";
type VehicleTypes = "Carro" | "Moto";

const AnnounceFormUpdate = ({
  id,
  schema,
  onSubmitFunction,
  closeContainingModal,
}: AnnounceFormUpdateProps) => {
  const [originalData, setOriginalData] = useState<any>({});
  const [isPublished, setPublished] = useState<boolean>(false);
  const [adType, setAdType] = useState<AnnounceTypes>("sell");
  const [vehicleType, setVehicleType] = useState<VehicleTypes>("Carro");

  const [moreInputs, setMoreInputs] = useState(2);
  const [inputsQtd, setInputsQtd] = useState<number[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    values: {
      name: originalData.name || "",
      year: originalData.year || "",
      price: originalData.price || 0,
      km: originalData.km || 0,
      description: originalData.description || "",
      capeImage: originalData.images ? originalData.images[0] : "",
      img1: originalData.images ? originalData.images[1] : "",
      img2: originalData.images ? originalData.images[2] : "",
      img3: originalData.images ? originalData.images[3] : "",
      img4: originalData.images ? originalData.images[4] : "",
      img5: originalData.images ? originalData.images[5] : "",
      img6: originalData.images ? originalData.images[6] : "",
    },
  });

  useEffect(() => {
    api.get(`/ads/${id}`).then((res) => {
      res.data.price = formatCurrency(String(res.data.price));
      setOriginalData(res.data);
      setVehicleType(res.data.type);
      setPublished(res.data.isActive);

      const imageCount = res.data.images.length;
      let nArr = [];
      for (let i: number = 1; i < imageCount; i++) {
        nArr.push(i);
      }
      setMoreInputs(res.data.images.length > 3 ? res.data.images.length : 2);
      setInputsQtd(nArr);
    });
  }, []);

  const handleSubmitFunction = (data: any) => {
    data = { ...data, type: vehicleType, isActive: isPublished };
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
        <FieldSet style={{ marginTop: 24 }}>
          <Legend>Publicado</Legend>
          <OptionButtons>
            {isPublished ? (
              <>
                <BrandButton onClick={() => setPublished(true)}>
                  Sim
                </BrandButton>
                <OutlineButton
                  type="button"
                  onClick={() => setPublished(false)}
                  variant="greyLight"
                >
                  Não
                </OutlineButton>
              </>
            ) : (
              <>
                <OutlineButton
                  type="button"
                  onClick={() => setPublished(true)}
                  variant="greyLight"
                >
                  Sim
                </OutlineButton>
                <BrandButton onClick={() => setPublished(false)}>
                  Não
                </BrandButton>
              </>
            )}
          </OptionButtons>
        </FieldSet>
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
                  <FormError></FormError>
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
          Excluir anúncio
        </BaseButton>
        <BrandButton type="submit">Salvar Alterações</BrandButton>
      </Flex>
    </Form>
  );
};

export default AnnounceFormUpdate;
