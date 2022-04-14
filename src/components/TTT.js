import React, { useState } from 'react';
import {
    Container,
    Text,
    Table,
    Tbody,
    Tr,
    TableContainer,
    Button,
    Heading,
    ScaleFade,
} from '@chakra-ui/react';
import Cell from './Cell';


const TTT = () => {
    const [turn, setTurn] = useState('x');
    const [squares, setSquares] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState(null);
    const [draw, setDraw] = useState(false);
    // const { colorMode, toggleColorMode } = useColorMode();

    const checkWinner = (copy) => {
        let combos = {
            across: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
            ],
            down: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
            ],
            diagonal: [
                [0, 4, 8], 
                [2, 4, 6],
            ],
        };

        // a winning combo is either accross, down, or diagonal
        for (let combo in combos) {
            // 8 total patterns: 3 across, 3 down, 2 diagonal 
            combos[combo].forEach((pattern) => {
                // if squares at patterns have empty strings do nothing. 
                if (copy[pattern[0]] === '' ||
                    copy[pattern[1]] === '' || 
                    copy[pattern[2]] === '') {
                }
                // if sqaures at patterns match, set the winner. 
                else if (copy[pattern[0]] === copy[pattern[1]] && 
                    copy[pattern[1]] === copy[pattern[2]]) {
                    setWinner(turn);
                }
            })
        };
    };

    // every() returns true if all elements in an array satisfy the condition
    const checkDraw = (copy) => {
        let isDraw = copy.every((val) => val === 'x' || val === 'o')
        setDraw(isDraw)
    };

    const renderWinner = () => {
        if (winner) {
            return (
                <ScaleFade in={true}>
                    <Heading variant='winner'>{winner.toUpperCase()} Wins!</Heading>
                </ScaleFade>
            )
        }
        
    };

    const renderDraw = () => {
        if (draw && !winner) {
            return (
                <ScaleFade in={true}>
                    <Heading variant='draw'>Cats Game</Heading>
                </ScaleFade>
            )
        } 
    };

    const onCellClick = (num) => {
        //game can only be played if there is no winner and no draw
        if (!winner && !draw) {
            let copy = [...squares]

            if (copy[num] !== '') {
                alert('square taken')
                return
            }
            copy[num] = turn

            if (turn === 'x') setTurn('o')
            if (turn === 'o') setTurn('x')

            checkWinner(copy)
            checkDraw(copy)
            setSquares(copy)
        }
    };

    const resetGame = () => {
        setSquares(Array(9).fill(''))
        setTurn('x')
        setWinner('')
        setDraw(false)
    };

    return (
        <>
            <Container w='100%' h='100%' align='center' m='0 auto'>
                <Text m='5rem 0' fontSize='3rem'>Tic-Tac-Toe</Text>
                {renderWinner()}
                {renderDraw()}
                <Text pb='1rem' fontSize='1.25rem'>Turn: {turn.toUpperCase()}</Text>
                <TableContainer>
                    <Table>
                        <Tbody> 
                            <Tr display='flex' justifyContent='center'>
                                <Cell num={0} onCellClick={onCellClick} squares={squares} variant='smooth'/>
                                <Cell num={1} onCellClick={onCellClick} squares={squares} variant='smooth'/>
                                <Cell num={2} onCellClick={onCellClick} squares={squares} variant='smooth'/>
                            </Tr>
                            <Tr display='flex' justifyContent='center'>
                                <Cell num={3} onCellClick={onCellClick} squares={squares} variant='smooth'/>
                                <Cell num={4} onCellClick={onCellClick} squares={squares} variant='smooth'/>
                                <Cell num={5} onCellClick={onCellClick} squares={squares} variant='smooth'/>
                            </Tr>
                            <Tr display='flex' justifyContent='center'>
                                <Cell num={6} onCellClick={onCellClick} squares={squares} variant='smooth'/>
                                <Cell num={7} onCellClick={onCellClick} squares={squares} variant='smooth'/>
                                <Cell num={8} onCellClick={onCellClick} squares={squares} variant='smooth'/>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
                <Button variant='ternary' mt="3rem" onClick={resetGame}>Reset</Button>
            </Container>
        </>
    );
}

export default TTT;