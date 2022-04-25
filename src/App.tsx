import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Category from "./components/categories/Category";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      {" "}
      <ChakraProvider>
        <Navbar />
        <Category />
      </ChakraProvider>
    </>
  );
}

export default App;
