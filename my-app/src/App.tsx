import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react";
import MainPage from '../src/Main/MainLanding';

export function App() {

  return(
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/internships" element={<></>}/>
          <Route path="/certificates" element={<></>}/>
        </Routes>
      </Router>

    </ChakraProvider>
  )

}
