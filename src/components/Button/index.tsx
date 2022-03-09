import * as React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

const Button: React.FC = () => {
  return (
    <React.Fragment>
      <ChakraButton colorScheme="teal">Hello</ChakraButton>
    </React.Fragment>
  );
};

export default Button;
