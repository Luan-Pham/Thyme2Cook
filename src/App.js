import * as React from "react";
import { ChakraProvider, VStack } from "@chakra-ui/react";


function App() {
  return (
    <ChakraProvider>
      <VStack p={8} margin={3} spacing={10}>
      </VStack>
    </ChakraProvider>
  );
}

export default App;
