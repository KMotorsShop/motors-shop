import { UpdateAd } from "./styles";
import { BrandButton, BaseButton, OutlineButton } from "../../styles/Buttons";
import {Input, TextArea} from "../../styles/Form"
import { Label } from "../../styles/Texts";

export const ModalUpdateAd = () => {

    return (
        <UpdateAd>
            <div className="modal-title">
                <p>Editar anúncio</p>
                <button>X</button>
            </div>
            <form action="">
                <div className="ads-type label-button">
                    <Label htmlFor="">
                        Tipo de anuncio
                    </Label>
                    <div className="buttons Btype">
                        <BrandButton variant={"opacity"}>
                            Venda
                        </BrandButton>
                        <BrandButton>
                            Leilão
                        </BrandButton>
                    </div>
                </div>
                <div className="vehicle-infos">
                    <div className="input-div">
                        <Label htmlFor="">
                            Título
                        </Label>
                        <Input placeholder="Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200"/>
                        
                    </div>
                    <div className="input-div small-ones">
                        <div className="small-inputs-div">
                            <Label htmlFor="">Ano</Label>
                            <input type="text" className="small-input" placeholder="2018"/>
                        </div>
                        <div className="small-inputs-div">
                            <Label htmlFor="">Quilometragem</Label>
                            <input type="text" className="small-input" placeholder="0"/>
                        </div>
                        <div className="small-inputs-div">
                            <Label htmlFor="">preço</Label>
                            <input type="text" className="small-input" placeholder="50.000,00"/>
                        </div>
                    </div>
                    <div className="input-div">
                        <Label htmlFor="">Descrição</Label>
                        <TextArea placeholder="sua descrição sobre o veículo aqui"/>
                    </div>
                </div>
                <div className="vehicle-type label-button">
                    <Label htmlFor="">Tipo de veículo</Label>
                    <div className="buttons Bvehicle">
                        <BrandButton>Carro</BrandButton>
                        <BrandButton>Moto</BrandButton>
                    </div>
                </div>
                <div className="active label-button">
                    <Label htmlFor="">Publicado</Label>
                    <div className="buttons Bactive">
                        <BrandButton>Sim</BrandButton>
                        <BrandButton>Não</BrandButton>
                    </div>
                </div>
                <div className="input-images">
                    <div className="image-input input-div">
                        <Label htmlFor="">Imagem da capa</Label>
                        <Input placeholder="https://image.com"/>
                    </div>
                    <div className="image-input input-div">
                        <Label htmlFor="">1ª imagem da galeria</Label>
                        <Input placeholder="https://image.com"/>
                    </div>
                    <div className="image-input input-div">
                        <Label htmlFor="">2ª imagem da galeria</Label>
                        <Input placeholder="https://image.com"/>
                    </div>
                    <button className="add-inputs"> Adicionar campo para imagem da galeria</button>
                </div>
                <div className="send">
                    <OutlineButton variant={"grey"}
                    style={{
                        width: "55%"
                    }}>Excluir anúncio</OutlineButton>
                    <OutlineButton variant={"brand"}
                    style={{
                        width: "45%"
                    }}>Salvar alterações</OutlineButton>
                </div>
            </form>
        </UpdateAd>
    )
}