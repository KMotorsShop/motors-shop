// import FormCreateAd from "./components/FormCreateAd";
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
      .max(100, "Quilometragem inválida")
      .required("Obrigatório"),
    price: yup
      .number()
      .typeError("Preço inválido")
      .min(0, "Preço inválido")
      .required("Obrigatório"),
    description: yup.string().required("Obrigatório"),
    capeImage: yup.string().url("URL inválida").required("Obrigatório"),
    img1: yup.string().required("pelo menos duas imagens"),
    img2: yup.string().required("pelo menos duas imagens"),
    img3: yup.string(),
    img4: yup.string(),
    img5: yup.string(),
    img6: yup.string(),
  });

  function submitFunction(data: any, typeVehicle: string, isActive: boolean) {
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

  };


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
