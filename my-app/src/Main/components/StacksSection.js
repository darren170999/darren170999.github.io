import FullScreenSection from "./FullScreenSection";
import { Wrap, WrapItem, Avatar, Heading } from "@chakra-ui/react";
import CardInternship from "./CardInternship";
const StacksSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#1a1f71"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
        <Heading as="h1" id="certs-section">
        Stacks that I use
        </Heading>
        <Wrap>
            <WrapItem>
                <Avatar size='lg' name='MongoDB' src='https://bit.ly/40vDX71' />
            </WrapItem>
            <WrapItem>
                <Avatar size='lg' name='MS SQL' src='https://bit.ly/3z5VGGu' />
            </WrapItem>
            <WrapItem>
                <Avatar size='lg' name='MYSQL' src='https://bit.ly/3UTFDpb' />
            </WrapItem>
            <WrapItem>
                <Avatar size='lg' name='NodeJS' src='https://bit.ly/3K5y1MJ' />
            </WrapItem>
            <WrapItem>
                <Avatar size='lg' name='Spring Boot' src='https://bit.ly/40pzsuK' />
            </WrapItem>
            <WrapItem>
                <Avatar size='lg' name='.NET Core' src='https://bit.ly/3LPqK4R' />
            </WrapItem>
            <WrapItem>
                <Avatar size='lg' name='ASP.NET Core' src='https://bit.ly/3N2CZM3' />
            </WrapItem>
            <WrapItem>
                <Avatar size='lg' name='ReactJS' src='https://bit.ly/3z5fpWF' />
            </WrapItem>
            <WrapItem>
                <Avatar size='lg' name='Redux' src='https://bit.ly/3oxJjRx' />
            </WrapItem>
            <WrapItem>
                <Avatar size='lg' name='TypeScript' src='https://bit.ly/43Uwykm'/>
            </WrapItem>
            <WrapItem>
                <Avatar size='lg' name='Mongoose' src='https://cms-assets.tutsplus.com/uploads/users/34/posts/29527/preview_image/mongoose.jpg'/>
            </WrapItem>
            {/* Docker Compose, Docker Swarm, Linux, Azure,  */}
        </Wrap>
        <Heading as="h1" id="certs-section">
        Stacks that I am currently learning
        </Heading>
        <Wrap>
            <WrapItem>
                <Avatar size='lg' name='gRPC' src='https://bit.ly/40sevPr'/>
            </WrapItem>
            <WrapItem>
                <Avatar size='lg' name='GoLang' src='https://bit.ly/3N36qh0'/>
            </WrapItem>
            <WrapItem>
                <Avatar size='lg' name='GraphQL' src='https://bit.ly/3LfHeBB'/>
            </WrapItem>
            <WrapItem>
                <Avatar size='lg' name='Apache Kafka' src='https://bit.ly/3AhUErx'/>
            </WrapItem>
            <WrapItem>
                <Avatar size='lg' name='Django' src='https://bit.ly/3Lg5apy'/>
            </WrapItem>
            <WrapItem>
                <Avatar size='lg' name='AngularJS' src='https://bit.ly/3KUM4E2'/>
            </WrapItem>
            <WrapItem>
                <Avatar size='lg' name='FireBase' src='https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png'/>
            </WrapItem>
            <WrapItem>
                <Avatar size='lg' name='Elastic Search' src='https://logowik.com/content/uploads/images/elasticsearch6390.jpg'/>
            </WrapItem>
        </Wrap>
    </FullScreenSection>
  );
};

export default StacksSection;
