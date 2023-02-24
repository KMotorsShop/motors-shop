import { SetStateAction, useState, useEffect } from "react";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { UpdateAd } from "./styles";
import { BrandButton, OutlineButton } from "../../styles/Buttons";
import { Input, TextArea } from "../../styles/Form";
import { Label } from "../../styles/Texts";

export const ModalUpdateAd = () => {
  const [typeAd, setTypeAd] = useState("sell");
  const [typeVehicle, setTypeVehicle] =
    useState<SetStateAction<null | string>>(null);
  const [isActive, setIsActive] = useState(true);
  const [moreInputs, setMoreInputs] = useState(2);
  const [inputsQtd, setInputsQtd] = useState([1, 2]);

  useEffect(() => {}, [moreInputs]);

  const schema = yup.object().shape({
    name: yup.string().required("Título obrigatório"),
    year: yup
      .string()
      .required("Ano obrigatório")
      .length(4, "Ano inválido"),
    km: yup.string().required("Rodagem inválida"),
    price: yup.string().required("Preço inválido, somente números"),
    description: yup.string().required("Descrição é obrigatória"),
    coverImg: yup.string().required("Imagem de capa Obrigatória"),
    img1: yup.string().required("Obrigatório pelo menos duas imagens"),
    img2: yup.string().required("Obrigatório pelo menos duas imagens"),
    img3: yup.string(),
    img4: yup.string(),
    img5: yup.string(),
    img6: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function submitFunction(data: any) {
    const dataKeys = Object.keys(data);
    const imgArray = [data.coverImg, data.img1, data.img2];

    if(typeVehicle == null){
        return alert("selecione o tipo do veículo!")
    };

    for (let i = 0; i < dataKeys.length; i++) {
      switch (dataKeys[i]) {
        case "img3":
          imgArray.push(data.img3);
          break;
        case "img4":
          imgArray.push(data.img4);
          break;
        case "img5":
          imgArray.push(data.img5);
          break;
        case "img6":
          imgArray.push(data.img6);
          break;
      };
    };

    const sendData = {
      name: data.name,
      year: data.year,
      km: data.km,
      price: data.price,
      description: data.description,
      type: typeVehicle,
      isActive: isActive,
      images: imgArray,
    };
    // console.log(sendData);
  }

  return (
    <UpdateAd>
      <div className="modal-title">
        <p>Editar anúncio</p>
        <button>X</button>
      </div>
      <form action="" onSubmit={handleSubmit(submitFunction)}>
        <div className="ads-type label-button">
          <Label htmlFor="">Tipo de anuncio</Label>
          <div className="buttons Btype">
            <BrandButton
              type="button"
              variant={typeAd == "sell" ? "opacity" : "normal"}
              onClick={() => setTypeAd("sell")}
            >
              Venda
            </BrandButton>
            <BrandButton
              type="button"
              variant={typeAd == "auction" ? "opacity" : "normal"}
              onClick={() => setTypeAd("auction")}
            >
              Leilão
            </BrandButton>
          </div>
        </div>
        <div className="vehicle-infos">
          <div className="input-div">
            <Label htmlFor="">Título</Label>
            <Input
              placeholder="Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200"
              className="mobile"
              {...register("name")}
            />
            <span className="feedback">{errors.name?.message as string}</span>
          </div>
          <div className="input-div small-ones">
            <div className="small-inputs-div">
              <Label htmlFor="">Ano</Label>
              <input
                type="text"
                className="small-input"
                placeholder="2018"
                {...register("year")}
              />
              <span className="feedback">{errors.year?.message as string}</span>
            </div>
            <div className="small-inputs-div">
              <Label htmlFor="">Quilometragem</Label>
              <input
                type="number"
                className="small-input"
                placeholder="0"
                {...register("km")}
              />
              <span className="feedback">{errors.km?.message as string}</span>
            </div>
            <div className="small-inputs-div">
              <Label htmlFor="">preço</Label>
              <input
                type="number"
                className="small-input price"
                placeholder="50.000,00"
                {...register("price")}
              />
              <span className="feedback">
                {errors.price?.message as string}
              </span>
            </div>
          </div>
          <div className="input-div">
            <Label htmlFor="">Descrição</Label>
            <TextArea
              placeholder="sua descrição sobre o veículo aqui"
              {...register("description")}
            />
            <span className="feedback">
              {errors.description?.message as string}
            </span>
          </div>
        </div>
        <div className="vehicle-type label-button">
          <Label htmlFor="">Tipo de veículo</Label>
          <div className="buttons Bvehicle">
            <BrandButton
              type="button"
              variant={typeVehicle == "car" ? "opacity" : "normal"}
              onClick={() => setTypeVehicle("car")}
            >
              Carro
            </BrandButton>
            <BrandButton
              type="button"
              variant={typeVehicle == "motorcycle" ? "opacity" : "normal"}
              onClick={() => setTypeVehicle("motorcycle")}
            >
              Moto
            </BrandButton>
            <span className="feedback">{errors.type?.message as string}</span>
          </div>
        </div>
        <div className="active label-button">
          <Label htmlFor="">Publicado</Label>
          <div className="buttons Bactive">
            <BrandButton
              variant={!!isActive ? "opacity" : "normal"}
              onClick={() => setIsActive(true)}
              type="button"
            >
              Sim
            </BrandButton>
            <BrandButton
              variant={!isActive ? "opacity" : "normal"}
              onClick={() => setIsActive(false)}
              type="button"
            >
              Não
            </BrandButton>
          </div>
        </div>
        <div className="input-images">
          <div className="image-input input-div">
            <Label htmlFor="">Imagem da capa</Label>
            <Input
              placeholder="https://image.com"
              className="mobile"
              {...register("coverImg")}
            />
            <span className="feedback">
              {errors.coverImg?.message as string}
            </span>
          </div>
          <div className="image-input input-div">
            <Label htmlFor="">1ª imagem da galeria</Label>
            <Input
              placeholder="https://image.com"
              className="mobile"
              {...register("img1")}
            />
            <span className="feedback">{errors.img1?.message as string}</span>
          </div>
          <div className="image-input input-div">
            <Label htmlFor="">2ª imagem da galeria</Label>
            <Input
              placeholder="https://image.com"
              className="mobile"
              {...register("img2")}
            />
            <span className="feedback">{errors.img2?.message as string}</span>
          </div>
          {moreInputs <= 6 &&
            inputsQtd.map((input) => {
              if (input > 2) {
                return (
                  <div className="image-input input-div" key={input}>
                    <Label htmlFor="">{input}ª imagem da galeria</Label>
                    <Input
                      placeholder="https://image.com"
                      className="mobile"
                      {...register(`img${input}`)}
                    />
                  </div>
                );
              }
            })}
          <button
            className="add-inputs"
            type="button"
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
          </button>
        </div>
        <div className="send">
          <OutlineButton
            variant={"grey"}
            style={{
              width: "55%",
            }}
            type="button"
          >
            Excluir anúncio
          </OutlineButton>
          <OutlineButton
            variant={"brand"}
            style={{
              width: "45%",
            }}
            type="submit"
          >
            Salvar alterações
          </OutlineButton>
        </div>
      </form>
    </UpdateAd>
  );
};
