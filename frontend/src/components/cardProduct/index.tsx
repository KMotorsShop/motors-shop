import { Card } from "./style"

export const CardProduct = () => {

    return(
        <Card>
            <img src="https://file.kelleybluebookimages.com/kbb/base/evox/CP/43648/2023-Honda-Civic-front_43648_032_1860x760_RE_cropped.png"></img>
            <h1>Product title stays here</h1>
            <p>Lorem sadasdasd asdasdasda asdasd  saDdasdasd dasd sadasdasd asdasdasd asdas sadasdsa asadss</p>
            <Card type="user">
                <img src="https://lh3.googleusercontent.com/ogw/AAEL6siLE6kvr8NrqoiCED8VSkGgp-qIvJuXEZexpLwj=s64-c-mo"></img>
                <h3>User</h3>
            </Card>
            <Card type="infos">
                <span>0 KM</span>
                <span>2019</span>
                <h2>R$ 00.000,00</h2>
            </Card>
        </Card>
    )
}

