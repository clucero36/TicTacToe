import React from 'react';
import { Box, useStyleConfig } from '@chakra-ui/react'

//Td component used to override Chakra Td component styles
const Td = props => {
    const { variant, ...rest } = props

    const styles = useStyleConfig('Td', { variant })
  
    return <Box textAlign='center' __css={styles} {...rest} />
}

export default Td;