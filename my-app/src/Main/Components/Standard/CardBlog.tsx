import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Badge, Button, ButtonGroup, Card, CardBody, CardHeader, Divider, Heading, HStack, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Tag, TagLabel, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BlogItemType } from "../../Types/BlogItemType";
import { Timestamp } from "firebase/firestore";

const CardBlog = ({ id, heading, tags, text, link, date }: BlogItemType) => {
    const formattedDate = date.toDate().toISOString().split('T')[0];
  return (
    <>
        <Stack padding={"8"}>
            <HStack>
                <Heading >
                {heading}
                </Heading>
                <Badge>{formattedDate}</Badge>
            </HStack>
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
