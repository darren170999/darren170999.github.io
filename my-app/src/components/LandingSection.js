import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
const greeting = "Hi! I am Darren,";
const bio1 = "An Aspiring";
const bio2 = "Software Engineer";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#1a1f71"
  >
    <VStack>
      {" "}
      <Avatar size='2xl' src='/avatar.png'>
        {" "}{" "}
      </Avatar>
      <h1 style={{color: "#F7B600"}}>{greeting}</h1>
      <Heading>
        {" "}
        <h1 style={{textAlign: "Center"}}>{bio1}</h1>
        <h1 style={{color: "#F7B600"}}>{bio2}</h1>
        {" "}
      </Heading>{" "}
    </VStack>{" "}
  </FullScreenSection>
);

export default LandingSection;
