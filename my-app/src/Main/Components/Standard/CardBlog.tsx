import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Badge, Button, ButtonGroup, Divider, Heading, HStack, Stack, Tag, TagLabel, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BlogItemType } from "../../Types/BlogItemType";

const CardBlog = ({ id, heading, tags, text, link, date }: BlogItemType) => {
  const formattedDate = date.toISOString().split('T')[0];

  return (
    <Stack spacing={"4"}>
      <Stack 
        direction={["column", "row"]}
        justify="space-between"
        align="center"
      >
        <Heading size={["md", "lg"]} fontWeight="bold">{heading}</Heading>
        <Badge>{formattedDate}</Badge>
      </Stack>
      
      <Text noOfLines={[3]}>{text}</Text>
      
      <ButtonGroup spacing={2}>
        <Link to={link}>
          <Button variant="ghost" colorScheme="yellow" rightIcon={<ArrowForwardIcon />}>
            Read more
          </Button>
        </Link>
        {tags.map((tag) => (
          <Tag key={tag} size="sm" colorScheme="yellow" borderRadius="full">
            <TagLabel>{tag}</TagLabel>
          </Tag>
        ))}
      </ButtonGroup>
      
      <Divider orientation="horizontal" />
    </Stack>
  );
};

export default CardBlog;
