import { whiten } from '@chakra-ui/theme-tools';

//button theme component to implement different variants of buttons for the application
export const ButtonStyles = {

    baseStyle: {},

    sizes: {},

    variants: {
        primary: {
            bg: 'primary',
            color: 'white',
            _hover: {
                bg: whiten('primary', 20),
                boxShadow: 'md',
            }
        },

        secondary: {
            bg: 'secondary',
            color: 'white',
            _hover: {
                bg: whiten('secondary', 20),
                boxShadow: 'md',
            }
        },

        ternary: {
            border: '1px',
            borderColor: 'yellow.500',
            bg: 'purple.900',
            color: 'yellow.400',
            _hover: {
                bg: whiten('green.900', 20),
            },
        },
    },

    defaultProps: {},
} 