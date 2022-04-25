import { whiten } from '@chakra-ui/theme-tools';

//Heading theme component used to create Heading variants
export const headingStyles = {

    baseStyle: {},

    sizes: {},

    variants: {
        winner: {
            bg: 'purple.900',
            w: '12rem',
            m: '4rem',
            border: '1px solid',
            borderColor: 'yellow.400',
            color: 'yellow.400',
            borderRadius: '1rem',
            _hover: {
                bg: whiten('green.900', 20),
            }
        },

        draw: {
            bg: 'purple.800',
            w: '12rem',
            m: '4rem',
            border: '1px solid',
            borderColor: 'yellow.500',
            color: 'yellow.400',
            borderRadius: '1rem',
            _hover: {
                bg: whiten('green.900', 20),
            }
        },
    },

    defaultProps: {},
} 