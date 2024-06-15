import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react";
import MainPage from './Main/MainPage';
import BlogPage from "./Main/BlogPage";
const EngineeringBlogRoutes = () => (
  <Routes>
    <Route path="/" element={<BlogPage />} />
    <Route path="Internships" element={<></>} />
    <Route path="USvsSG" element={<></>} />
    {/* Add more sub-routes here as needed */}
  </Routes>
);
export function App() {

  return(
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/EngineeringBlog/*" element={<EngineeringBlogRoutes/>}/>
        </Routes>
      </Router>

    </ChakraProvider>
  )

}
