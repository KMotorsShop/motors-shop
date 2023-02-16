import { CardFooter, Button, IconButton, Box } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons"

import { SFooter } from "./styles";

export const Footer = () => {
    
    return (
        <SFooter>
            <div className="title">
                <h4>
                    Motors 
                </h4>
                <p> shop </p>
            </div>
            <p>
                @ 2022 - todos os direitos reservados 
            </p>
            <button>
                <ChevronUpIcon/>    
            </button>  
        </SFooter>
    );
};