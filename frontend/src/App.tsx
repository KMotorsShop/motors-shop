import FormCreateAd from "./components/FormCreateAd";
import { Footer } from "./components/Footer";
import * as yup from "yup";
import { ModalUpdateAd } from "./components/ModalUpdateAd";

import AnnounceForm from "./components/AnnounceForm";

function App() {
  const today = new Date(Date.now());
  const createAdSchema = yup.object().shape({
    name: yup.string().required("Obrigatório"),
    year: yup
      .number()
      .typeError("Ano inválido")
      .min(1885, "Ano inválido")
      .max(today.getFullYear(), "Ano inválido")
      .required("Obrigatório"),
    km: yup
      .number()
      .typeError("Quilometragem Inválida")
      .min(0, "Quilometragem inválida")
      .required("Obrigatório"),
    price: yup
      .number()
      .typeError("Preço inválido")
      .min(0, "Preço inválido")
      .required("Obrigatório"),
    description: yup.string().required("Obrigatório"),
    capeImage: yup.string().url("URL inválida").required("Obrigatório"),
  });
  return (
    <div className="App">
      {/* <FormCreateAd />
      <ModalUpdateAd/> */}
      <AnnounceForm
        schema={createAdSchema}
        onSubmitFunction={(data: any) => console.log(data)}
      />
    </div>
  );
}
export default App;
