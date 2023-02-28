import { BodyHeader, Body, UserDiv, Infos, Anuncios} from "./style";
import Header from "../../components/Header";
import { Footer } from "../../components/Footer";
import { mockedUser } from "../../mocks/mocks";
import { ProductSection } from "../../components/ProductSection";

export const AnunciantePage = () => {
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