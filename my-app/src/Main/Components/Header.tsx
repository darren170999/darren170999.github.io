import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faSquareReddit,
  faGoogleDrive,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Button } from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
const socials = [
  {
    icon: faEnvelope,
    url: "mailto: DSOH010@e.ntu.edu.sg",
  },
  {
    icon: faGithub,
    url: "https://github.com/darren170999",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/dsohjh/",
  },
  {
    icon: faSquareReddit,
    url: "https://www.reddit.com/user/dsjh99",
  },
  {
    icon: faGoogleDrive,
    url: "https://drive.google.com/file/d/1TxBu8AN3jee0zah3jjuBtqv0JgBZF7vj/view?usp=sharing",
  },
];

const Header = () => {
  return (
    <Box
      position="relative"
      backgroundColor="#18181b"
      
    >
      <Box color="white" maxWidth="1280px" margin="0 auto" >
        <HStack
          px={18}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={18}>
              <a href={socials[0].url}>
                <FontAwesomeIcon icon={socials[0].icon} size="2x" />
              </a>
              <a href={socials[1].url}>
                <FontAwesomeIcon icon={socials[1].icon} size="2x" />
              </a>
              <a href={socials[2].url}>
                <FontAwesomeIcon icon={socials[2].icon} size="2x" />
              </a>
              <a href={socials[3].url}>
                <FontAwesomeIcon icon={socials[3].icon} size="2x" />
              </a>
              <a href={socials[4].url}>
                <FontAwesomeIcon icon={socials[4].icon} size="2x" />
              </a>
            </HStack>
          </nav>
          <Menu >
            {({isOpen}) => (
              <>
              <MenuButton isActive={isOpen} as={Button} textColor={'#18181b'}
              rightIcon={<ChevronDownIcon />} >
                {isOpen ? 'Close' : 'Menu'}
              </MenuButton>
              <MenuList>
                <MenuItem textColor={'#18181b'}>Coming soon</MenuItem>
              </MenuList>
              </>
            )}
          </Menu>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
