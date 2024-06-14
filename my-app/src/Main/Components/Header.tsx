import {
  collection,
  getDocs
} from "firebase/firestore";
import { db } from "../../firebase-config";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin,faMicrosoft} from "@fortawesome/free-brands-svg-icons";
import { Menu, MenuButton, MenuList, MenuItem, Box, HStack, Button } from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons"

interface DataItem {
  id: string;
  email: string;
  github: string;
  linkedin: string;
}
function Header() {
  const [socials, setSocials] = useState<DataItem[]>([]);
  const socialsRef = collection(db, "Socials");
  useEffect(()=>{
    const getSociety = async () => {
      const data = await getDocs(socialsRef);
      setSocials(data.docs.map((doc)=>({...doc.data(), id:doc.id} as DataItem)))
    };
    getSociety();
  },[]);
  return (
    <>
    <Box
      position="relative"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto" >
        <HStack
          px={18}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          {socials.map((social)=>{
            return(
              <nav>
              <HStack spacing={18}>
                <a href={social.email}>
                  <FontAwesomeIcon icon={faMicrosoft} size="2x" />
                </a>
                <a href={social.github}>
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href={social.linkedin}>
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </HStack>
            </nav>
            )}
          )}
          
          <Menu >
            {({isOpen}) => (
              <>
              <MenuButton isActive={isOpen} as={Button} textColor={'#18181b'}
              rightIcon={<ChevronDownIcon />} >
                {isOpen ? 'Close' : 'Menu'}
              </MenuButton>
              <MenuList>
                <MenuItem textColor={'#18181b'}>Engineering Blog</MenuItem>
              </MenuList>
              </>
            )}
          </Menu>
        </HStack>
      </Box>
    </Box>
    </>
  );
};
export default Header;
