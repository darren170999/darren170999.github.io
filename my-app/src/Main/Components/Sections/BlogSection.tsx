import { Button, ButtonGroup, Divider, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { Link } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";
//TODO: Need Fix
function BlogSection () {
  let startDate = new Date('2022-01-01');
  let todaysDate = new Date();
  let differenceInYears = todaysDate.getFullYear() - startDate.getFullYear();
  return(
    <>
      <FullScreenSection
        justifyContent="top"
        alignItems="left"
        padding="10"
        isDarkBackground
        backgroundColor="#1a1f71">
          <Stack padding={"8"}>
            <Heading >
              Engineering Blog
            </Heading>
            <Text noOfLines={[1, 2, 3]}>
              "My documentation for everything I have learnt over the past {differenceInYears} years".
            </Text>
            <Divider orientation='horizontal'/>
          </Stack>
          <Stack padding={"8"}>
            <Heading >
              Internships
            </Heading>
            <Text noOfLines={[1, 2, 3]}>
              "My personal reflection after having done 6 internships in college".
            </Text>
            {/* TODO: Remeber to refactor this ugly implementation */}
            <ButtonGroup spacing='2'>
              <Link to={"/EngineeringBlog/Internships"}>
                <ArrowForwardIcon/> 
                <Button variant='ghost' colorScheme='blue'>
                Go To
                </Button>
              </Link>
            </ButtonGroup>
            <Divider orientation='horizontal'/>
          </Stack>
      </FullScreenSection>
    </>
  )

};

export default BlogSection;
