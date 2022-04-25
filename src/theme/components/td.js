
//Td theme component used to add variants to Td table components
export const Td = {
    variants: {
        rounded: {
          padding: 8,
          borderRadius: 'xl',
          boxShadow: 'xl',
        },
        smooth: {
            borderRight: '1px',
            borderLeft: '1px',
            borderColor: 'yellow.500',
            padding: 6,
            borderRadius: 'base',
            boxShadow: '2xl',
            h: '5rem',
            w: '5rem',
            _hover: {
                boxShadow: 'md',
                borderColor: 'yellow.100'
            },
        },
    },
}