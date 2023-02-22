import { UpdateAd } from "./styles";

export const ModalUpdateAd = () => {

    return (
        <UpdateAd>
            <div className="modal-title">
                <p>Editar anúncio</p>
                <button>X</button>
            </div>
            <form action="">
                <div className="ad-type">
                    <div className="buttons-type">
                        <button>
                            Venda
                        </button>
                        <button>
                            Leilão
                        </button>
                    </div>
                </div>
                <div className="vehicle-infos">
                    <div className="input-div">
                        <label htmlFor="">
                            Título
                        </label>
                        <input type="text" />
                    </div>
                    <div className="input-div">
                        <div className="small-inputs-div">
                            <label htmlFor="">Ano</label>
                            <input type="text" className="small-input" placeholder="2018"/>
                        </div>
                        <div className="small-input">
                            <label htmlFor="">Quilometragem</label>
                            <input type="text" className="small-input" placeholder="0"/>
                        </div>
                        <div className="small-input">
                            <label htmlFor="">preço</label>
                            <input type="text" className="small-input" placeholder="50.000,00"/>
                        </div>
                    </div>
                    <div className="input-div">
                        <label htmlFor="">Descrição</label>
                        <textarea></textarea>
                    </div>
                </div>
                <div className="vehicle-type">
                    <button>Carro</button>
                    <button>Moto</button>
                </div>
                <div className="active">
                    <button>Sim</button>
                    <button>Não</button>
                </div>
                <div className="input-images">
                    <div className="image-input">
                        <label htmlFor="">Imagem da capa</label>
                        <input type="text" placeholder="https://image.com"/>
                    </div>
                    <div className="image-input">
                        <label htmlFor="">1ª imagem da galeria</label>
                        <input type="text" placeholder="https://image.com"/>
                    </div>
                    <div className="image-input">
                        <label htmlFor="">2ª imagem da galeria</label>
                        <input type="text" placeholder="https://image.com"/>
                    </div>

                    <button> Adicionar campo para imagem da galeria</button>
                </div>
                <div className="send">
                    <button>Excluir anúncio</button>
                    <button>Salvar alterações</button>
                </div>
            </form>
        </UpdateAd>
    )
}