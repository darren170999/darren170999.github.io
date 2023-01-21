import {ChakraProvider} from "@chakra-ui/react";
import './App.css';
import LandingSection from "./components/LandingSection";

function App() {
  return (
    <ChakraProvider>
      <LandingSection />

    </ChakraProvider>
  );
}

export default App;
