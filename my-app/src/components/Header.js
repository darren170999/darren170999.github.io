import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; //
import {
  faGithub,
  faLinkedin,
  faSquareReddit,
  faGoogleDrive,
} from "@fortawesome/free-brands-svg-icons"; //
import { Box, HStack } from "@chakra-ui/react";

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
    url: "https://www.linkedin.com/dsohjh",
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
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
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
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
