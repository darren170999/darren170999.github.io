import { Stack, Text, Code, Box, Button, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Tabs, TabList, TabPanels, Tab, TabPanel, useDisclosure } from "@chakra-ui/react";
import FullScreenSection from "../../Sections/FullScreenSection";
function Command() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <FullScreenSection
                justifyContent="top"
                alignItems="left"
                padding="10"
                isDarkBackground
                backgroundColor="#000000"
                minHeight="50vh"
            >
                <Stack padding="5">
                    <Text noOfLines={[20]} align="justify">
                        The Command pattern is a behavioral design pattern that is used to encapsulate a request as an object, this allows you
                        to parameterize your client calls in the form of queues, requests or operations. These are generically classified as external
                        services actionable items. This decouples the sender of the request from the object that performs the action. I used this at work
                        to avoid keeping contexts alive for too long.
                    </Text>
                </Stack>
                <Stack padding="5">
                    <Text noOfLines={[20]} align="justify" as={"b"}>
                        Use Cases
                    </Text>
                    <Text noOfLines={[20]} align="justify">
                        1. Scope: Keeping context opened for as long as needed only.
                    </Text>
                    <Text noOfLines={[20]} align="justify">
                        2. Decoupled logic: Non-native functions will not manage native resources.
                    </Text>
                    <Button onClick={onOpen} colorScheme="teal" maxWidth={"200px"}>
                        Sample Code
                    </Button>
                </Stack>
            </FullScreenSection>
            <Drawer placement="right" onClose={onClose} isOpen={isOpen} size={"lg"}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Command Behavioural Example in C#</DrawerHeader>
                    <DrawerBody>
                        <Tabs>
                            <TabList>
                                <Tab>Sample example without Command</Tab>
                                <Tab>Sample example with Command</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <Box p={2} bg="gray.100" borderRadius="md" overflowX="auto">
                                        <Code p={2} display="block" whiteSpace="pre">
                                            {`
{...}
public static void UpdateDb(string[] args) 
{
// ... Connection based on args, _updateservice is instantiated from interface
    using (var db = new AppDbContext())
    {
        var user = db.Users.Find(userId);
        if (user != null) // verify
        {
            user.Name = newName;
            user.Email = newEmail;

            db.SaveChanges();
            // Here we need the context to find the current user by id.
            // This impl stalls the context from closing.
            _updateservice.updatesomething(user.Id);
        }
        else
        {
            Console.WriteLine($"User {userId} not found.");
        }
    }   
    db.close();
}
                                            `}
                                        </Code>
                                    </Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box p={2} bg="gray.100" borderRadius="md" overflowX="auto">
                                        <Code p={2} display="block" whiteSpace="pre">
                                            {`
{...}
public static void UpdateDb(string[] args)
{
    // ... Connection based on args
    List<Task<Dto>> externalServiceActions = new List<Task<Dto>>();
    using (var db = new AppDbContext())
        {
            var user = db.Users.Find(userId);
            if (user != null) // verify
            {
                user.Name = newName;
                user.Email = newEmail;

                db.SaveChanges();
                // Here we need the context to find the current user by id.
                // This impl stalls the context from closing.
                externalServiceActions.Add(_updateservice.updatesomething(user.Id));
            }
            else
            {
                Console.WriteLine($"User {userId} not found.");
            }
        }   
    db.close();
    foreach(task in externalServiceActions)
    {
        task.action();
    }
}
                                            `}
                                        </Code>
                                    </Box>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default Command;
