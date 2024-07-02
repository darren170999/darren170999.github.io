import { Button, Card, CardBody, CardHeader, Heading, HStack, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure, VStack } from "@chakra-ui/react";

type CardInternshipProps = {
  title: string;
  description: string;
  imageSrc: string;
  date: number;
}

const CardInternship = ({ title, description, imageSrc, date }: CardInternshipProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Card minWidth={{ base: "100%", md: "300px" }}>
          <CardHeader>
            <Heading color="#1a1f71" size={"md"}> {title} </Heading>
          </CardHeader>
          <CardBody>
            <Image src={imageSrc} borderRadius={"lg"} onClick={onOpen}/>
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Software Engineer Intern</Heading>
            </Stack>
          </CardBody>
        </Card>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Experience in project</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {description}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    </>
  )
};

export default CardInternship;
