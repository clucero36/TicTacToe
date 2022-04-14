import React from 'react';
import { Box, useStyleConfig } from '@chakra-ui/react'

const Td = props => {
    const { variant, ...rest } = props

    const styles = useStyleConfig('Td', { variant })
  
    // Pass the computed styles into the `__css` prop
    return <Box textAlign='center' __css={styles} {...rest} />
}

export default Td;