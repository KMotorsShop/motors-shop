import { BodyHeader, Body, UserDiv, Infos, Anuncios, ButtonDiv} from "./style";
import Header from "../../components/Header";
import { Footer } from "../../components/Footer";
import { mockedUser } from "../../mocks/mocks";
import { ProductSection } from "../../components/ProductSection";
import { BrandButton, OutlineButton } from "../../styles/Buttons";

export const AnunciantePersonalPage = () => {
    return(
        <>
            <Header/>
                <BodyHeader>
                    <UserDiv>
                        <img src={mockedUser.image_url}></img>
                        <Infos>
                            <h1>{mockedUser.name}</h1>
                            <span>Anunciante</span>
                        </Infos>
                        <p>{mockedUser.description}</p>
                        <ButtonDiv>
                            <OutlineButton variant="brand">Criar anuncio</OutlineButton>
                        </ButtonDiv>
                    </UserDiv>
                </BodyHeader>
                <Body>
                    <Anuncios>
                        <ProductSection type="Carros"></ProductSection>
                        <ProductSection type="Motos"></ProductSection>
                    </Anuncios>
                </Body>
            <Footer/>
        </>
    )
}