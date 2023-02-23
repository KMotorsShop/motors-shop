import { SetStateAction, useState } from "react";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { UpdateAd } from "./styles";
import { BrandButton, OutlineButton } from "../../styles/Buttons";
import { Input, TextArea } from "../../styles/Form"
import { Label } from "../../styles/Texts";

export const ModalUpdateAd = () => {

    const [typeAd, setTypeAd] = useState("sell");
    const [typeVehicle, setTypeVehicle] = useState<SetStateAction<null | string>>(null);
    const [isActive, setIsActive] = useState(true);
    const [moreInputs, setMoreInputs] = useState(2);

    const schema = yup.object().shape({
        name: yup.string().required("Título obrigatório"),
        year: yup.string().required("Ano é obrigatório").max(2030).length(4),
        km: yup.number().required("Rodagem inválida").max(100),
        price: yup.number().required("Preço inválido, somente números"),
        description: yup.string().required("Descrição é obrigatória"),
        type: yup.string().required("Tipo do veículo é obrigatório"),
        coverImg: yup.string().required("Imagem de capa Obrigatória"),
        imgOne: yup.string().required("Obrigatório pelo menos duas imagens"),
        imgTwo: yup.string().required("Obrigatório pelo menos duas imagens"),
    });

    const { register, handleSubmit, formState: {errors}, } = useForm({
        resolver: yupResolver(schema),
    });

    function submitFunction (data: any) {
        const sendData = {
            name: data.name,
            year: data.year,
            km: data.km,
            price: data.price,
            description: data.description,
            type: typeVehicle,
            isActive: isActive,
            coverImg: data.coverImg,
            imgOne: data.imgOne,
            imgTwo: data.Two
        }
    };

    console.log(moreInputs)

    function addInputs() {
        if(moreInputs == 6){
            setMoreInputs(2)
        } else {
            setMoreInputs(moreInputs+1)
        }
    };
    return (
        <UpdateAd>
            <div className="modal-title">
                <p>Editar anúncio</p>
                <button>X</button>
            </div>
            <form action="" onSubmit={handleSubmit(submitFunction)}>
                <div className="ads-type label-button">
                    <Label htmlFor="">
                        Tipo de anuncio
                    </Label>
                    <div className="buttons Btype">
                        <BrandButton variant={typeAd == "sell" ? "opacity" : "normal"}
                        onClick={()=> setTypeAd("sell")}>
                            Venda
                        </BrandButton>
                        <BrandButton variant={typeAd == "auction" ? "opacity" : "normal"}
                        onClick={()=> setTypeAd("auction")}>
                            Leilão
                        </BrandButton>
                    </div>
                </div>
                <div className="vehicle-infos">
                    <div className="input-div">
                        <Label htmlFor="">
                            Título
                        </Label>
                        <Input placeholder="Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200"
                        className="mobile" {...register("name")}/>
                    </div>
                    <div className="input-div small-ones">
                        <div className="small-inputs-div">
                            <Label htmlFor="">Ano</Label>
                            <input type="text" className="small-input" placeholder="2018" 
                            {...register("year")}/>
                        </div>
                        <div className="small-inputs-div">
                            <Label htmlFor="">Quilometragem</Label>
                            <input type="text" className="small-input" placeholder="0"
                            {...register("km")}/>
                        </div>
                        <div className="small-inputs-div">
                            <Label htmlFor="">preço</Label>
                            <input type="text" className="small-input price" placeholder="50.000,00"
                            {...register("price")}/>
                        </div>
                    </div>
                    <div className="input-div">
                        <Label htmlFor="">Descrição</Label>
                        <TextArea placeholder="sua descrição sobre o veículo aqui"
                        {...register("description")}/>
                    </div>
                </div>
                <div className="vehicle-type label-button">
                    <Label htmlFor="">Tipo de veículo</Label>
                    <div className="buttons Bvehicle">
                        <BrandButton
                        variant={typeVehicle == "car" ? "opacity" : "normal"}
                        onClick={()=> setTypeVehicle("car")}>Carro</BrandButton>
                        <BrandButton
                        variant={typeVehicle == "motorcycle" ? "opacity" : "normal"}
                        onClick={()=> setTypeVehicle("motorcycle")}>Moto</BrandButton>
                    </div>
                </div>
                <div className="active label-button">
                    <Label htmlFor="">Publicado</Label>
                    <div className="buttons Bactive">
                        <BrandButton variant={!!isActive ? "opacity" : "normal"}
                        onClick={()=> setIsActive(true)}>Sim</BrandButton>
                        <BrandButton variant={!isActive ? "opacity" : "normal"}
                        onClick={()=> setIsActive(false)}>Não</BrandButton>
                    </div>
                </div>
                <div className="input-images">
                    <div className="image-input input-div">
                        <Label htmlFor="">Imagem da capa</Label>
                        <Input placeholder="https://image.com"
                        className="mobile"
                        {...register("coverImg")}/>
                    </div>
                    <div className="image-input input-div">
                        <Label htmlFor="">1ª imagem da galeria</Label>
                        <Input placeholder="https://image.com"
                        className="mobile"
                        {...register("imgOne")}/>
                    </div>
                    <div className="image-input input-div">
                        <Label htmlFor="">2ª imagem da galeria</Label>
                        <Input placeholder="https://image.com"
                        className="mobile"
                        {...register("imgTwo")}/>
                    </div>
                        
                    <button className="add-inputs" 
                    onClick={() => {
                        if(moreInputs == 6){
                            setMoreInputs(2)
                        } else {
                            setMoreInputs(moreInputs+1)
                        }
                    }}> 
                        Adicionar campo para imagem da galeria
                    </button>
                </div>
                <div className="send">
                    <OutlineButton variant={"grey"}
                    style={{
                        width: "55%"
                    }}>Excluir anúncio</OutlineButton>
                    <OutlineButton variant={"brand"}
                    style={{
                        width: "45%"
                    }} type="submit">Salvar alterações</OutlineButton>
                </div>
            </form>
        </UpdateAd>
    )
}