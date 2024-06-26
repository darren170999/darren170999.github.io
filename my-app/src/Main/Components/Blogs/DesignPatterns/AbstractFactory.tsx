import { useEffect, useState } from "react";
import { Stack, Heading, Text, Spacer, HStack, Spinner, Alert, AlertIcon, Code, Box, Button, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Tabs, TabList, TabPanels, Tab, TabPanel, useDisclosure } from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import FullScreenSection from "../../Sections/FullScreenSection";
import { doc, updateDoc, increment, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../../firebase-config";

function AbstractFactory() {
  const [uniqueViews, setUniqueViews] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    async function updateAndFetchViews() {
    const docRef = doc(db, "Views", "DesignPatternsViews");

    try {
        if (!sessionStorage.getItem("viewIncremented")) {
        await updateDoc(docRef, {
            count: increment(1),
        });
        sessionStorage.setItem("viewIncremented", "true");
        }

        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
        setUniqueViews(docSnap.data().count);
        } else {
        await setDoc(docRef, { count: 1 });
        setUniqueViews(1);
        }
    } catch (error) {
        console.error("Error updating document:", error);

    } finally {
        setLoading(false);
    }
    }

    updateAndFetchViews();
}, []);
  
  return (
    <>
      <FullScreenSection
        justifyContent="top"
        alignItems="left"
        padding="10"
        isDarkBackground
        backgroundColor="#000000"
        minHeight="70vh"
      >
        <Stack padding="5" alignContent="baseline">
            <HStack>
                <Heading size="xl">Design Patterns C#</Heading>
                <Spacer />
                <ViewIcon />
                {loading ? <Spinner size="sm" /> : <Text>{uniqueViews}</Text>}
            </HStack>
            {error && (
                <Alert status="error">
                <AlertIcon />
                {error}
                </Alert>
            )}
        </Stack>
        <Stack padding="5">
          <Text noOfLines={[20]} align="justify">
          The Abstract Factory is a creational design pattern. It provides an interface for creating a family of related or dependent objects without specifying their concrete classes. This significantly reduces the amount of code needed to implement multiple variations of classes and objects, which would otherwise bloat the implementations. By abstracting away large chunks of similar functionality, it eliminates the need for conditional statements to differentiate between different concrete classes. The factories encapsulate the creation logic, making the codebase cleaner and more maintainable.
          </Text>
        </Stack>
        <Stack padding="5">
            <Text noOfLines={[20]} align="justify" as={"b"}>
                Use Cases
            </Text>
            <Text noOfLines={[20]} align="justify">
                1. Cross-Platform Applications: When you need to create UI components for different operating systems without changing the client code.
            </Text>
            <Text noOfLines={[20]} align="justify">
                2. Product Families: When you need to work with families of related products that should be used together.
            </Text>
            <Text noOfLines={[20]} align="justify">
                3. Configurable Systems: When the system configuration needs to change dynamically at runtime (e.g., theme engines).
            </Text>
            <Text noOfLines={[20]} align="justify">
                4. Setting up for scalability: Easier to introduce new product variants without altering existing client code.
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
          <DrawerHeader>Abstract Factory Example in C#</DrawerHeader>
          <DrawerBody>
            <Tabs>
              <TabList>
                <Tab>Abstract Factory Interface</Tab>
                <Tab>Concrete Factory Classes</Tab>
                <Tab>Abstract Products</Tab>
                <Tab>Concrete Products</Tab>
                <Tab>Client Code</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Box p={4} bg="gray.100" borderRadius="md">
                    <Code p={4} display="block" whiteSpace="pre">
                      {`public interface IUIFactory
{
    IButton CreateButton();
    ITextBox CreateTextBox();
}`}
                    </Code>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box p={4} bg="gray.100" borderRadius="md">
                    <Code p={4} display="block" whiteSpace="pre">
                      {`public class WindowsFactory : IUIFactory
{
    public IButton CreateButton()
    {
        return new WindowsButton();
    }

    public ITextBox CreateTextBox()
    {
        return new WindowsTextBox();
    }
}

public class MacFactory : IUIFactory
{
    public IButton CreateButton()
    {
        return new MacButton();
    }

    public ITextBox CreateTextBox()
    {
        return new MacTextBox();
    }
}`}
                    </Code>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box p={4} bg="gray.100" borderRadius="md">
                    <Code p={4} display="block" whiteSpace="pre">
                      {`public interface IButton
{
    void Paint();
}

public interface ITextBox
{
    void Render();
}`}
                    </Code>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box p={4} bg="gray.100" borderRadius="md">
                    <Code p={4} display="block" whiteSpace="pre">
                      {`public class WindowsButton : IButton
{
    public void Paint()
    {
        Console.WriteLine("Painting a Windows button");
    }
}

public class WindowsTextBox : ITextBox
{
    public void Render()
    {
        Console.WriteLine("Rendering a Windows textbox");
    }
}

public class MacButton : IButton
{
    public void Paint()
    {
        Console.WriteLine("Painting a Mac button");
    }
}

public class MacTextBox : ITextBox
{
    public void Render()
    {
        Console.WriteLine("Rendering a Mac textbox");
    }
}`}
                    </Code>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box p={4} bg="gray.100" borderRadius="md">
                    <Code p={4} display="block" whiteSpace="pre">
                      {`public class Application
{
    private readonly IButton _button;
    private readonly ITextBox _textBox;

    public Application(IUIFactory factory)
    {
        _button = factory.CreateButton();
        _textBox = factory.CreateTextBox();
    }

    public void CreateUI()
    {
        _button.Paint();
        _textBox.Render();
    }
}

// Usage
class Program
{
    static void Main(string[] args)
    {
        IUIFactory factory;

        // Suppose we need a Windows UI
        factory = new WindowsFactory();
        var app = new Application(factory);
        app.CreateUI();

        // Suppose we need a Mac UI
        factory = new MacFactory();
        app = new Application(factory);
        app.CreateUI();
    }
}`}
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

export default AbstractFactory;
