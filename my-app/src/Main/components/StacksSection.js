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
        Stacks that I Use
        </Heading>
        <Wrap>
            <WrapItem>
                <Avatar size='lg' name='MongoDB' src='https://bit.ly/40vDX71' />
            </WrapItem>
            <WrapItem>
                <Avatar size='lg' name='MS SQL' src='https://bit.ly/3z5VGGu' />
            </WrapItem>
            <WrapItem>
                <Avatar size='lg' name='MYSQL' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcovj8CFQeraYaoIuH_6baTpZN26K0xTovOQNKqo&s' />
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
                <Avatar size='lg' name='ReactJS' src='https://bit.ly/3z5fpWF' />
            </WrapItem>
            <WrapItem>
                <Avatar size='lg' name='Redux' src='https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/04/21032431/redux-cover-imgage-1024x768.jpg' />
            </WrapItem>
            {/* Docker Compose, Docker Swarm, Linux, Azure,  */}
        </Wrap>
        <Heading as="h1" id="certs-section">
        Stacks that I am currently learning
        </Heading>
        <Wrap>
            <WrapItem>
                <Avatar size='lg' name='gRPC' src='https://plugins.jetbrains.com/files/16889/307816/icon/pluginIcon.png'/>
            </WrapItem>
            <WrapItem>
                <Avatar size='lg' name='GoLang' src='https://vectorseek.com/wp-content/uploads/2023/03/Golang-Gopher-Logo-Vector-730x730.jpg'/>
            </WrapItem>
            <WrapItem>
                <Avatar size='lg' name='GraphQL' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png'/>
            </WrapItem>
            <WrapItem>
                <Avatar size='lg' name='Apache Kafka' src='https://assets.confluent.io/files/6b784911-086f-509b-bcae-7639d6442eab?response_content_disposition=inline&version=a0b1ec4b&account_id=E3DC7592-BA56-4FFC-A81833635367E2D7&signature=U4%2FwHEUkqpeaKl4pdwcJxlS8RHIRNYSoI47xQgEwVempuAepkdue9Bl9KAE1Re1r3gzOS1oXwA43HERNZKeMDg%3D%3D&expiry=1679788800000'/>
            </WrapItem>
            <WrapItem>
                <Avatar size='lg' name='Django' src='https://studygyaan.com/wp-content/uploads/2021/12/CicamXxN_400x400-1.jpg'/>
            </WrapItem>
            <WrapItem>
                <Avatar size='lg' name='TypeScript' src='https://cdn-icons-png.flaticon.com/512/919/919832.png'/>
            </WrapItem>
            <WrapItem>
                <Avatar size='lg' name='AngularJS' src='https://angular.io/assets/images/logos/angular/angular.svg'/>
            </WrapItem>
        </Wrap>
    </FullScreenSection>
  );
};

export default StacksSection;
