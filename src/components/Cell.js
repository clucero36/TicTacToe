import React from 'react'
import Td from './Td';

function Cell ({ variant, num, squares, onCellClick}) {

    return ( 
        <Td
            variant={variant}
            onClick={() => onCellClick(num)}> {squares[num]}
        </Td>
    )
}

export default Cell;