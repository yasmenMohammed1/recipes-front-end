import { CloseIcon, MinusIcon } from "@chakra-ui/icons";
import { Box, HStack, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Box backgroundColor={"red.500"}>
        <HStack backgroundColor={"red.500"}>
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              Logo
            </Text>
          </Box>

          <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
          >
            <Link to="/">visit our recipes</Link>
            <Box></Box>
          </Box>
          <Box display={{ base: "block", md: "none" }} onClick={toggle}>
            {isOpen ? <CloseIcon /> : <MinusIcon />}
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default Navbar;
