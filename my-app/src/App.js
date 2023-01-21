import {ChakraProvider} from "@chakra-ui/react";
import './App.css';
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <LandingSection />

    </ChakraProvider>
  );
}

export default App;
