import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react";
import MainPage from './Main/MainPage';
import BlogPage from "./Main/BlogPage";

export function App() {

  return(
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/EngineeringBlog" element={<BlogPage/>}/>
        </Routes>
      </Router>

    </ChakraProvider>
  )

}
