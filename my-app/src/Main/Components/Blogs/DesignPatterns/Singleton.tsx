import { Stack, Text, Code, Box, Button, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Tabs, TabList, TabPanels, Tab, TabPanel, useDisclosure } from "@chakra-ui/react";
import FullScreenSection from "../../Sections/FullScreenSection";
function Singleton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <FullScreenSection
        justifyContent="top"
        alignItems="left"
        padding="10"
        isDarkBackground
        backgroundColor="#000000"
      >
        <Stack padding="5">
          <Text noOfLines={[20]} align="justify">
          The Singleton pattern is a crucial creational design pattern that ensures a class has only one instance and provides a global access point to that instance,
          replacing the need for global variables by offering controlled access. It is particularly useful when a single object is needed to coordinate actions across a
          system. Unlike static classes, Singletons control instantiation and can implement interfaces or inherit from other classes, adding flexibility. From past experiences,
          singleton can be a concern in multithreaded applications on the topic of thread safety, but that is addressed with locks to ensure only one instance is created.
          Additionally, Singleton's instance is only created when first accessed and this saves resources (Lazy Init). This pattern is often employed with dependency
          injection in testing scenarios.
          </Text>
        </Stack>
        <Stack padding="5">
            <Text noOfLines={[20]} align="justify" as={"b"}>
                Use Cases
            </Text>
            <Text noOfLines={[20]} align="justify">
                1. Configuration Management: Managing global configurations.
            </Text>
            <Text noOfLines={[20]} align="justify">
                2. Logging: A single instance to handle logging across the system.
            </Text>
            <Text noOfLines={[20]} align="justify">
                3. Database Connections: Managing a single connection pool or a single database access point.
            </Text>
            <Text noOfLines={[20]} align="justify">
                4. Caching: A single instance to manage application-level caching.
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
          <DrawerHeader>Singleton Example in C#</DrawerHeader>
          <DrawerBody>
            <Tabs>
              <TabList>
                <Tab>Singleton</Tab>
                <Tab>Configuration Manager</Tab>
                <Tab>Usage</Tab>
                <Tab>Sample output</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Box p={2} bg="gray.100" borderRadius="md" overflowX="auto">
                    <Code p={2} display="block" whiteSpace="pre">
{`public sealed class Singleton
{
  private static Singleton _instance 
    = null;
  private static readonly object _lock 
    = new object();

  // Private constructor to prevent 
  // instantiation
  private Singleton() { }

  public static Singleton Instance
  {
    get
    {
      lock (_lock)
      {
        if (_instance == null)
        {
          _instance = new Singleton();
        }
        return _instance;
      }
    }
  }
}`}
                    </Code>
                  </Box>
                </TabPanel>
                <TabPanel>
                <Box p={2} bg="gray.100" borderRadius="md" overflowX="auto">
                    <Code p={2} display="block" whiteSpace="pre">
{`public sealed class ConfigurationManager
{
  private static ConfigurationManager _instance 
    = null;
  private static readonly object _lock 
    = new object();

  public string Configuration { 
    get; 
    private set; 
  }

  private ConfigurationManager()
  {
      // Load configuration settings
      Configuration = "Default Configuration";
  }

  public static ConfigurationManager Instance
  {
      get
      {
          lock (_lock)
          {
              if (_instance == null)
              {
                  _instance = new ConfigurationManager();
              }
              return _instance;
          }
      }
  }

  public void UpdateConfiguration(string newConfig)
  {
      Configuration = newConfig;
  }
}`}
                    </Code>
                  </Box>
                </TabPanel>
                <TabPanel>
                <Box p={2} bg="gray.100" borderRadius="md" overflowX="auto">
                    <Code p={2} display="block" whiteSpace="pre">
                      {`class Program
{
    static void Main(string[] args)
    {
        var configManager = ConfigurationManager.Instance;
        Console.WriteLine(configManager.Configuration);

        configManager.UpdateConfiguration("New Configuration");
        Console.WriteLine(configManager.Configuration);

        var anotherConfigManagerReference = ConfigurationManager.Instance;
        Console.WriteLine(anotherConfigManagerReference.Configuration);
    }
}`}
                    </Code>
                  </Box>
                </TabPanel>
                <TabPanel>
                <Box p={2} bg="gray.100" borderRadius="md" overflowX="auto">
                    <Code p={2} display="block" whiteSpace="pre">
                      {`Default Configuration
New Configuration
New Configuration
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

export default Singleton;
