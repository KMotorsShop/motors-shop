import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import { BrandButton, OutlineButton } from "../../styles/Buttons";
import { Input, SmallInput, TextArea } from "../../styles/Form";
import { Label } from "../../styles/Texts";
import {
  BrandButtonForm,
  Container,
  ContainerForm,
  DivForm,
  InputSmall,
} from "./styles";

const Register = () => {
  return (
    <>
      <Header />
      <Container>
        <ContainerForm>
          <h1>Cadastro</h1>
          <p>Infomações pessoais</p>
          <Label htmlFor="name">Nome</Label>
          <Input id="name" placeholder="Ex: Samuel Leão" />
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Ex: samuel@kenzie.com.br" />
          <Label htmlFor="cpf">CPF</Label>
          <Input id="cpf" placeholder="000.000.000-00" />
          <Label htmlFor="cellphone">Celular</Label>
          <Input id="cellphone" placeholder="(DDD) 90000-0000" />
          <Label htmlFor="date">Data de Nascimento</Label>
          <Input id="date" placeholder="00/00/00" />
          <Label htmlFor="description">Descrição</Label>
          <TextArea placeholder="Digitar descrição" />
          <p>Infomações de endereço</p>
          <Label htmlFor="cep">CEP</Label>
          <Input id="cep" placeholder="00000.000" />
          <DivForm>
            <InputSmall>
              <Label htmlFor="state">Estado</Label>
              <SmallInput id="state" placeholder="Digitar Estado" />
            </InputSmall>
            <InputSmall>
              <Label htmlFor="city">Cidade</Label>
              <SmallInput id="city" placeholder="Digitar Cidade" />
            </InputSmall>
          </DivForm>
          <Label htmlFor="road">Rua</Label>
          <Input id="road" placeholder="Digitar Rua" />
          <DivForm>
            <InputSmall>
              <Label htmlFor="number">Número</Label>
              <SmallInput id="number" placeholder="Digitar Número" />
            </InputSmall>
            <InputSmall>
              <Label htmlFor="complement">Complemento</Label>
              <SmallInput id="complement" placeholder="Ex: apart 307" />
            </InputSmall>
          </DivForm>
          <span>Tipo de conta</span>
          <DivForm>
            <BrandButton>Comprador</BrandButton>
            <OutlineButton variant="greyLight">Anunciante</OutlineButton>
          </DivForm>
          <Label htmlFor="password">Senha</Label>
          <Input id="password" placeholder="Digitar Senha" />
          <Label htmlFor="">Confirmar Senha</Label>
          <Input placeholder="Confirmar Senha" />
          <BrandButtonForm className="buttonConfirm" type="submit">
            Finalizar cadastro
          </BrandButtonForm>
        </ContainerForm>
      </Container>
      <Footer />
    </>
  );
};

export default Register;
