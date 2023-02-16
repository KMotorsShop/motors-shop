import { CardFooter, Button, IconButton, Box } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons"

export const Footer = () => {
    
    return (
        <Box 
        bg="#0B0D0D"
        width="100%"
        color="#FFFFFF"
        display="flex" 
        alignItems="center" 
        justifyContent="space-between"
        padding={50}
        >
            <Box
            display="flex" 
            alignItems="center"
            gap="4px"
            
            >
                <h4>
                    Motors 
                </h4>
                <p> shop </p>
            </Box>
            <p>
                @ 2022 - todos os direitos reservados 
            </p>
            <IconButton 
            aria-label="Up of page"
            colorScheme="#212529"
            icon={<ChevronUpIcon/>}
            width="53px"
            height="50px">
            </IconButton>
        </Box> 
    );
};