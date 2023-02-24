import { List } from "./style"
import { ArrayTesteProps, CardProductProps, ProductSectionProps } from "../../interface/interfaces"
import { CardProduct } from "../CardProduct"
import { Section } from "./style"

export const ProductSection = ({type}: ProductSectionProps) => {

    const array = [
    {
        year: 2000,
        price: 17000.80, 
        name: "Sedan Legal",
        type: "Carros",
        km: 20000,
        description: "Carro muito bom me acompanhou em varias aventuras."
    }, 
    {
        year: 2000,
        price: 17000.80, 
        name: "Pollo Legal",
        type: "Carros",
        km: 20000,
        description: "Carro muito bom me acompanhou em varias aventuras."
    }, 
    {
        year: 2000,
        price: 17000.80, 
        name: "Celta Rebaixado",
        type: "Carros",
        km: 20000,
        description: "Carro muito bom me acompanhou em varias aventuras."
    },
    {
        year: 2000,
        price: 17000.80, 
        name: "Suzuki",
        type: "Motos",
        km: 20000,
        description: "Moto muito boa me acompanhou em varias aventuras."
    },
    {
        year: 2000,
        price: 17000.80, 
        name: "Bis",
        type: "Motos",
        km: 20000,
        description: "Moto muito boa me acompanhou em varias aventuras."
    },
    {
        year: 2000,
        price: 17000.80, 
        name: "Hayabusa",
        type: "Motos",
        km: 20000,
        description: "Moto muito boa me acompanhou em varias aventuras."
    }]

    const renderCards = (arr:[ArrayTesteProps]) => {
        
    }

    return(
        <Section>
            <h1>{type}</h1>
            <List >{
            array.map(product => {
            if(product.type === type){
                return(
                    <CardProduct name={product.name} description={product.description} km={product.km} price={product.price} year={product.year}></CardProduct>
                )
            }
            })}</List>
        </Section>
    )
}
