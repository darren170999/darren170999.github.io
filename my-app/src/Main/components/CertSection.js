import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import CardInternship from "./CardInternship";

const certs = [
  {
    title: "CS50",
    description:
      "Hosted by Harvard University, Introduction to computer science by David J Malan.",
    getImageSrc: () => require("../../images/cert_cs50.jpg"),
  },
  {
    title: "GRPC",
    description:
      "Build modern API and microservices by Clement Jean",
    getImageSrc: () => require("../../images/cert_grpc.jpg"),
  },
];
//Responsive 
const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
}

const CertSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#1a1f71"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="certs-section">
        Featured Certificates
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit,minmax(300px,1fr))"
        gridGap={8}
      >
        {certs.map((cert) => (
          <CardInternship
            key={cert.title}
            title={cert.title}
            description={cert.description}
            imageSrc={cert.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default CertSection;
