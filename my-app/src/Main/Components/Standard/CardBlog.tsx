import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, Card, CardBody, CardHeader, Divider, Heading, HStack, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Tag, TagLabel, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

type CardBlogProps = {
  heading: string;
  id: string;
  text: string;
  tags: string[];
  link: string;
}

const CardBlog = ({ id, heading, tags, text, link }: CardBlogProps) => {
  return (
    <>
      <Stack padding={"8"}>
            <Heading >
              {heading}
            </Heading>
            <Text noOfLines={[1, 2, 3]}>
            {text}
            </Text>
            <ButtonGroup spacing='2'>
                <Link to={link}>
                    <ArrowForwardIcon/> 
                    <Button variant='ghost' colorScheme='blue'>
                        Read more
                    </Button>
              </Link>
              {tags.map((tag) => (
                <Tag size='lg' colorScheme='red' borderRadius='full'>
                    <TagLabel>{tag}</TagLabel>
                </Tag>
              ) 
            )}
            </ButtonGroup>
            <Divider orientation='horizontal'/>
          </Stack>
    </>
  )
};

export default CardBlog;
