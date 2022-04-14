import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import TTT from './components/TTT';
import { overrides } from './theme/index';

function App() {
  return (
    <ChakraProvider resetCSS theme={overrides}>
      <TTT />
    </ChakraProvider>
  );
}

export default App;
