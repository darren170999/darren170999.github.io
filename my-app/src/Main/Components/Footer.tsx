import React, { FC } from "react";
import { Box, Flex } from "@chakra-ui/react";

const Footer: FC = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Darren Soh JunHan • © 2023</p>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;