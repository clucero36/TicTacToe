import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from './components/button';
import { headingStyles as Heading } from './components/heading';
import { GlobalStyles as styles } from './style';
import { Td } from './components/td';


export const overrides = extendTheme({
    styles,

    components: {
        Button, 
        Heading,
        Td,
    },
})
