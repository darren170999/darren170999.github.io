import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import MainPage from "./Main/MainPage";
import {ChakraProvider} from "@chakra-ui/react";
 
const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/internships" element={<></>}/>
          <Route path="/certificates" element={<></>}/>
          
        </Routes>
      </Router>

    </ChakraProvider>
  );
}

export default App;
