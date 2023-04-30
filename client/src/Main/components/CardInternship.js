import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const CardInternship = ({ title, description, imageSrc }) => {
  return (
    <div>
      <div>
        <Image src={imageSrc}></Image>
        <HStack>
          <Heading>
            {" "}
            <h1>{title}</h1>
          </Heading>{" "}
        </HStack>
        <Text>
          {" "}
          <h1>{description}</h1>
        </Text>
        <HStack>
          {/* <p> See more </p> */}

          {/* <FontAwesomeIcon icon={faArrowRight} size="2x" /> */}
        </HStack>
      </div>{" "}
    </div>
  );
};

export default CardInternship;
