import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react";
import MainPage from './Main/MainPage';
import BlogPage from "./Main/BlogPage";
import BlogInternshipExperience from "./Main/Components/Blogs/BlogInternshipExperience";
import BlogSourcegraphCody from "./Main/Components/Blogs/BlogSourcegraphCody";
import BlogDesignPatternsCSharp from "./Main/Components/Blogs/BlogDesignPatternsCSharp";
import BlogDatabricks from "./Main/Components/Blogs/BlogDatabricks";
import BlogTemporal from "./Main/Components/Blogs/BlogTemporal";
import BlogGarbageCollection from "./Main/Components/Blogs/BlogGarbageCollection";
const EngineeringBlogRoutes = () => (
  <Routes>
    <Route path="/" element={<BlogPage />} />
    <Route path="Internships" element={<BlogInternshipExperience/>} />
    <Route path="Sourcegraph" element={<BlogSourcegraphCody/>} />
    <Route path="DesignPatterns" element={<BlogDesignPatternsCSharp/>}/>
    <Route path="Databricks" element={<BlogDatabricks/>}/>
    <Route path="Temporal" element={<BlogTemporal/>}/>
    <Route path="GarbageCollection" element={<BlogGarbageCollection/>}/>
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
