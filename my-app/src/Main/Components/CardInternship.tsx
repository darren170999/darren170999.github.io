import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

type CardInternshipProps = {
  title: string;
  description: string;
  imageSrc: string;
}

const CardInternship = ({ title, description, imageSrc }: CardInternshipProps) => {
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

        </HStack>
      </div>{" "}
    </div>
  );
};

export default CardInternship;
